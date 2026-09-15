#!/usr/bin/env python3
"""
IP3 media pipeline diagnostic.

The dy8kariwa credentials are built in, so it runs from anywhere:

    python test_cloudinary.py                 # Cloudinary checks only
    python test_cloudinary.py --with-api      # also test the running Express API

A .env file in the working directory, or matching environment variables, will
override the built-in values. Only the standard library is used.
"""

import argparse
import hashlib
import http.cookiejar
import io
import json
import mimetypes
import os
import ssl
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid

# --------------------------------------------------------------------------- #
# output helpers
# --------------------------------------------------------------------------- #

GREEN, RED, YELLOW, DIM, RESET = "\033[32m", "\033[31m", "\033[33m", "\033[2m", "\033[0m"
if not sys.stdout.isatty():
    GREEN = RED = YELLOW = DIM = RESET = ""

results = []


def step(title):
    print(f"\n{DIM}{'-' * 68}{RESET}\n{title}")


def ok(msg):
    results.append(True)
    print(f"  {GREEN}PASS{RESET}  {msg}")


def fail(msg, detail=""):
    results.append(False)
    print(f"  {RED}FAIL{RESET}  {msg}")
    if detail:
        for line in str(detail).strip().splitlines()[:6]:
            print(f"        {DIM}{line}{RESET}")


def warn(msg):
    print(f"  {YELLOW}WARN{RESET}  {msg}")


def info(msg):
    print(f"        {DIM}{msg}{RESET}")


# --------------------------------------------------------------------------- #
# .env loading
# --------------------------------------------------------------------------- #


# Credentials are baked in for this deployment. A real environment variable of
# the same name still wins, so the script also works on a configured server.
HARDCODED = {
    "CLOUDINARY_CLOUD_NAME": "dy8kariwa",
    "CLOUDINARY_API_KEY": "131682156287274",
    "CLOUDINARY_API_SECRET": "wa2UmDFuGrejnKRw_Pbhsinehvk",
    "CLOUDINARY_FOLDER": "ip3",
}


def load_env(path=".env"):
    """Applies the built-in credentials, then any .env file that is present."""
    for key, value in HARDCODED.items():
        os.environ.setdefault(key, value)

    if not os.path.exists(path):
        return

    with open(path, encoding="utf-8") as fh:
        for raw in fh:
            line = raw.strip()
            if not line or line.startswith("#") or "=" not in line:
                continue
            key, _, value = line.partition("=")
            key, value = key.strip(), value.strip().strip('"').strip("'")
            if key in HARDCODED and os.environ.get(key) == HARDCODED[key]:
                os.environ[key] = value  # the .env file overrides the built-in default
            else:
                os.environ.setdefault(key, value)


# --------------------------------------------------------------------------- #
# HTTP helpers
# --------------------------------------------------------------------------- #

CTX = ssl.create_default_context()


def request(url, *, method="GET", data=None, headers=None, auth=None, opener=None, timeout=30):
    """Returns (status, body_text). Never raises on an HTTP error status."""
    req = urllib.request.Request(url, data=data, method=method)
    for key, value in (headers or {}).items():
        req.add_header(key, value)
    if auth:
        import base64

        token = base64.b64encode(f"{auth[0]}:{auth[1]}".encode()).decode()
        req.add_header("Authorization", f"Basic {token}")
    try:
        send = opener.open if opener else urllib.request.urlopen
        with send(req, timeout=timeout) if opener else send(req, timeout=timeout, context=CTX) as res:
            return res.status, res.read().decode("utf-8", "replace")
    except urllib.error.HTTPError as err:
        return err.code, err.read().decode("utf-8", "replace")
    except Exception as err:  # noqa: BLE001 — a diagnostic should report, not crash
        return 0, f"{type(err).__name__}: {err}"


def multipart(fields, file_field=None):
    """Builds a multipart/form-data body. file_field is (name, filename, bytes)."""
    boundary = f"----ip3diag{uuid.uuid4().hex}"
    buf = io.BytesIO()

    for name, value in fields.items():
        buf.write(f"--{boundary}\r\n".encode())
        buf.write(f'Content-Disposition: form-data; name="{name}"\r\n\r\n'.encode())
        buf.write(f"{value}\r\n".encode())

    if file_field:
        name, filename, blob = file_field
        ctype = mimetypes.guess_type(filename)[0] or "application/octet-stream"
        buf.write(f"--{boundary}\r\n".encode())
        buf.write(
            f'Content-Disposition: form-data; name="{name}"; filename="{filename}"\r\n'.encode()
        )
        buf.write(f"Content-Type: {ctype}\r\n\r\n".encode())
        buf.write(blob)
        buf.write(b"\r\n")

    buf.write(f"--{boundary}--\r\n".encode())
    return buf.getvalue(), f"multipart/form-data; boundary={boundary}"


def as_json(text):
    try:
        return json.loads(text)
    except Exception:  # noqa: BLE001
        return None


def explain(status, text):
    """Turns a Cloudinary failure into the thing you actually need to change."""
    body = as_json(text) or {}
    message = (body.get("error") or {}).get("message", text)[:300]

    if "prodenv" in message or "missing permissions" in message:
        return (
            message,
            "The key is valid but has no upload rights in this product environment. "
            "Cloudinary Console -> Settings -> API Keys -> generate a key with full access, "
            "and confirm it belongs to the same environment as CLOUDINARY_CLOUD_NAME.",
        )
    if status == 401:
        return message, "Wrong API key or secret. Copy both again from the console."
    if status == 404:
        return message, "Unknown cloud name. Check CLOUDINARY_CLOUD_NAME."
    if "Invalid Signature" in message:
        return message, "The signature did not match — the secret used to sign differs from the key's secret."
    return message, ""


# --------------------------------------------------------------------------- #
# a tiny real PNG (1x1, transparent) so no fixture file is needed
# --------------------------------------------------------------------------- #

PNG_1PX = bytes.fromhex(
    "89504e470d0a1a0a0000000d49484452000000010000000108060000001f15c489"
    "0000000a49444154789c6360000002000100ffff03000006000557bfabd4000000"
    "0049454e44ae426082"
)


# --------------------------------------------------------------------------- #
# checks
# --------------------------------------------------------------------------- #


def check_env():
    step("1. Environment")
    cloud = os.environ.get("CLOUDINARY_CLOUD_NAME", "")
    key = os.environ.get("CLOUDINARY_API_KEY", "")
    secret = os.environ.get("CLOUDINARY_API_SECRET", "")
    folder = os.environ.get("CLOUDINARY_FOLDER", "ip3")

    if cloud and key and secret:
        ok(f"Cloudinary credentials present (cloud '{cloud}', key ...{key[-4:]}, folder '{folder}')")
    else:
        missing = [
            n
            for n, v in (
                ("CLOUDINARY_CLOUD_NAME", cloud),
                ("CLOUDINARY_API_KEY", key),
                ("CLOUDINARY_API_SECRET", secret),
            )
            if not v
        ]
        fail(f"Missing: {', '.join(missing)}")
        return None

    if os.environ.get("CLOUDINARY_API_SECRET", "").startswith("CLOUDINARY_URL"):
        warn("The secret looks like a full CLOUDINARY_URL — use only the secret portion.")

    return {"cloud": cloud, "key": key, "secret": secret, "folder": folder}


def check_credentials(cfg):
    """Admin API read — proves the key and secret are a valid pair."""
    step("2. Credentials (Admin API read)")
    url = f"https://api.cloudinary.com/v1_1/{cfg['cloud']}/resources/image?max_results=1"
    status, text = request(url, auth=(cfg["key"], cfg["secret"]))

    if status == 200:
        count = len((as_json(text) or {}).get("resources", []))
        ok(f"Key and secret accepted (assets visible: {count})")
        return True

    message, hint = explain(status, text)
    fail(f"HTTP {status} — {message}")
    if hint:
        info(hint)
    return False


def check_unsigned_upload(cfg):
    """Basic-auth upload — proves the key may create assets."""
    step("3. Upload permission (authenticated upload)")
    body, ctype = multipart({"folder": cfg["folder"]}, ("file", "ip3-diagnostic.png", PNG_1PX))
    url = f"https://api.cloudinary.com/v1_1/{cfg['cloud']}/image/upload"
    status, text = request(
        url, method="POST", data=body, headers={"Content-Type": ctype}, auth=(cfg["key"], cfg["secret"])
    )

    if status == 200:
        payload = as_json(text) or {}
        ok(f"Upload allowed — public_id '{payload.get('public_id')}'")
        return payload.get("public_id")

    message, hint = explain(status, text)
    fail(f"HTTP {status} — {message}")
    if hint:
        info(hint)
    return None


def check_signed_upload(cfg):
    """
    Reproduces exactly what the browser does: a signature built server-side over
    {folder, timestamp}, then a direct POST to Cloudinary.
    """
    step("4. Signed browser-style upload (what the admin console does)")
    timestamp = int(time.time())
    to_sign = f"folder={cfg['folder']}&timestamp={timestamp}{cfg['secret']}"
    signature = hashlib.sha1(to_sign.encode()).hexdigest()

    body, ctype = multipart(
        {
            "api_key": cfg["key"],
            "timestamp": str(timestamp),
            "signature": signature,
            "folder": cfg["folder"],
        },
        ("file", "ip3-signed-diagnostic.png", PNG_1PX),
    )
    url = f"https://api.cloudinary.com/v1_1/{cfg['cloud']}/image/upload"
    status, text = request(url, method="POST", data=body, headers={"Content-Type": ctype})

    if status == 200:
        payload = as_json(text) or {}
        ok(f"Signed upload accepted — {payload.get('secure_url')}")
        return payload.get("public_id")

    message, hint = explain(status, text)
    fail(f"HTTP {status} — {message}")
    if hint:
        info(hint)
    return None


def cleanup(cfg, public_ids):
    ids = [pid for pid in public_ids if pid]
    if not ids:
        return
    step("5. Cleanup")
    for public_id in ids:
        body, ctype = multipart({"public_ids[]": public_id})
        status, _ = request(
            f"https://api.cloudinary.com/v1_1/{cfg['cloud']}/resources/image/upload?public_ids[]={urllib.parse.quote(public_id)}",
            method="DELETE",
            headers={"Content-Type": ctype},
            auth=(cfg["key"], cfg["secret"]),
        )
        if status == 200:
            ok(f"Removed test asset {public_id}")
        else:
            warn(f"Could not remove {public_id} (HTTP {status}) — delete it manually if it lingers.")


def check_api(base, password, cfg):
    """End-to-end through the Express API, the way the admin console goes."""
    step("6. Express API (/api/media)")

    jar = http.cookiejar.CookieJar()
    opener = urllib.request.build_opener(
        urllib.request.HTTPCookieProcessor(jar), urllib.request.HTTPSHandler(context=CTX)
    )

    status, text = request(
        f"{base}/api/auth/login",
        method="POST",
        data=json.dumps({"password": password}).encode(),
        headers={"Content-Type": "application/json"},
        opener=opener,
    )
    if status != 200:
        fail(f"Sign-in failed (HTTP {status})", text)
        info("Check ADMIN_PASSWORD / ADMIN_PASSWORD_HASH and that the server is running.")
        return
    ok("Signed in to the admin API")

    status, text = request(f"{base}/api/media/config", opener=opener)
    config = as_json(text) or {}
    if status == 200 and config.get("configured"):
        ok(f"Server reports the CDN configured (cloud '{config.get('cloudName')}')")
    else:
        fail(f"/api/media/config returned HTTP {status}", text)
        info("The server cannot see the Cloudinary variables — restart it after editing .env.")
        return

    status, text = request(
        f"{base}/api/media/signature",
        method="POST",
        data=json.dumps({"resourceType": "image"}).encode(),
        headers={"Content-Type": "application/json"},
        opener=opener,
    )
    sig = as_json(text) or {}
    if status != 200 or "signature" not in sig:
        fail(f"/api/media/signature returned HTTP {status}", text)
        return
    ok("Server issued an upload signature")

    body, ctype = multipart(
        {
            "api_key": sig["apiKey"],
            "timestamp": str(sig["timestamp"]),
            "signature": sig["signature"],
            "folder": sig["folder"],
        },
        ("file", "ip3-api-diagnostic.png", PNG_1PX),
    )
    status, text = request(sig["uploadUrl"], method="POST", data=body, headers={"Content-Type": ctype})
    uploaded = as_json(text) or {}
    if status != 200:
        message, hint = explain(status, text)
        fail(f"Upload with the server's signature failed — HTTP {status}: {message}")
        if hint:
            info(hint)
        return
    ok(f"Uploaded with the server's signature — {uploaded.get('secure_url')}")

    status, text = request(
        f"{base}/api/media",
        method="POST",
        data=json.dumps(
            {
                "url": uploaded.get("secure_url"),
                "publicId": uploaded.get("public_id"),
                "resourceType": "image",
                "format": uploaded.get("format"),
                "bytes": uploaded.get("bytes"),
                "width": uploaded.get("width"),
                "height": uploaded.get("height"),
                "originalName": "ip3-api-diagnostic.png",
            }
        ).encode(),
        headers={"Content-Type": "application/json"},
        opener=opener,
    )
    record = as_json(text) or {}
    if status in (200, 201) and record.get("ok"):
        ok("Recorded in MongoDB — the full pipeline works")
        media_id = (record.get("item") or {}).get("_id")
        if media_id:
            status, _ = request(f"{base}/api/media/{media_id}", method="DELETE", opener=opener)
            if status == 200:
                ok("Test asset removed from the library and the CDN")
    else:
        fail(f"POST /api/media returned HTTP {status}", text)
        info("The upload reached the CDN but MongoDB did not record it — check MONGODB_URI.")


# --------------------------------------------------------------------------- #

def main():
    parser = argparse.ArgumentParser(description="Diagnose the IP3 Cloudinary upload pipeline.")
    parser.add_argument("--env", default=".env", help="path to the .env file (default: .env)")
    parser.add_argument("--with-api", action="store_true", help="also test the running Express API")
    parser.add_argument("--base", default="http://localhost:3000", help="API base URL")
    parser.add_argument("--password", default=None, help="admin passphrase (defaults to ADMIN_PASSWORD)")
    parser.add_argument("--keep", action="store_true", help="keep the uploaded test assets")
    args = parser.parse_args()

    print(f"{DIM}IP3 media pipeline diagnostic{RESET}")
    load_env(args.env)
    print(f"{DIM}Cloud: {os.environ.get('CLOUDINARY_CLOUD_NAME')} · folder: {os.environ.get('CLOUDINARY_FOLDER')}{RESET}")

    cfg = check_env()
    if not cfg:
        print(f"\n{RED}Cloudinary variables are missing.{RESET}")
        sys.exit(1)

    uploaded = []
    if check_credentials(cfg):
        uploaded.append(check_unsigned_upload(cfg))
        uploaded.append(check_signed_upload(cfg))

    if not args.keep:
        cleanup(cfg, uploaded)

    if args.with_api:
        password = args.password or os.environ.get("ADMIN_PASSWORD")
        if not password:
            warn("No admin passphrase available — pass --password to test the API.")
        else:
            check_api(args.base.rstrip("/"), password, cfg)

    step("Summary")
    passed, total = sum(results), len(results)
    if passed == total:
        print(f"  {GREEN}All {total} checks passed.{RESET}")
    else:
        print(f"  {RED}{total - passed} of {total} checks failed.{RESET}")
        print(f"  {DIM}The first failure above is the one to fix; later ones usually follow from it.{RESET}")
    sys.exit(0 if passed == total else 1)


if __name__ == "__main__":
    main()