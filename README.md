# IP3 Platform — MERN (MongoDB · Express · React · Node) on Vercel

A production-ready build of the IP3 Agriscience & Precision Research Farm site:
a public React front end, a password-gated `/admin` CMS console, an Express API,
MongoDB Atlas for persistence, and Cloudinary as the media CDN.

Everything the admin publishes is written to MongoDB and served to every
visitor on every device. Nothing is stored in `localStorage`, and no image or
video is ever kept as a base64 blob — uploads go straight from the browser to
Cloudinary and only the resulting URL is stored.

---

## 1. Quick start

```bash
npm install
cp .env.example .env        # then fill in the values (section 3)
npm run db:seed             # loads the bundled default content into MongoDB
npm run dev                 # http://localhost:3000  ·  admin at /admin
```

`npm run dev` boots **one** server on port 3000: Express owns `/api/*` and Vite
runs in middleware mode for everything else, so development is same-origin — no
CORS, no proxy, and the exact API that ships to production.

Other scripts:

| Script | What it does |
| --- | --- |
| `npm run build` | Vite production build into `dist/` (site + admin bundles) |
| `npm start` | Serves `dist/` + the API from Node (for non-Vercel hosting) |
| `npm run db:seed` | Seeds default content; no-op if content already exists |
| `npm run db:seed:force` | Overwrites live content with the bundled defaults |
| `npm run hash:password "pass"` | Prints a bcrypt `ADMIN_PASSWORD_HASH` |
| `npm run lint` | TypeScript check (`tsc --noEmit`) |

---

## 2. Project structure

```
ip3-platform/
├── api/
│   └── index.js               # Vercel serverless entry — re-exports the Express app
├── server/                    # The API (plain ESM JavaScript)
│   ├── app.js                 # App assembly: helmet, CORS, routers, error handling
│   ├── lib/
│   │   ├── db.js              # Cached Mongoose connection (serverless-safe)
│   │   ├── auth.js            # bcrypt check, JWT httpOnly session, requireAdmin
│   │   ├── cloudinary.js      # Signed direct uploads, asset deletion, thumbnails
│   │   └── helpers.js         # asyncHandler, payload sanitising, validation
│   ├── models/                # Content · Revision · Lead · Booking · Media
│   └── routes/                # auth · content · leads · bookings · media · health
├── src/                       # React front end
│   ├── admin/                 # Gated CMS console (own bundle, own entry)
│   ├── components/            # Sections, cards, modals, page shells
│   ├── context/CMSContext.tsx # Loads from / publishes to MongoDB
│   ├── data/                  # Bundled default content (seed payload)
│   ├── lib/                   # apiClient · contentStore · mediaUploader
│   └── types.ts
├── scripts/
│   ├── seed.ts                # Seeds MongoDB with the default content
│   └── hash-password.js       # Generates ADMIN_PASSWORD_HASH
├── server.js                  # Local dev/production server (Vite or dist)
├── index.html · admin.html    # Two entry points → two bundles
├── vercel.json · vite.config.ts · .env.example
```

---

## 3. Environment variables

Set these in `.env` locally and in **Vercel → Settings → Environment Variables**.

| Variable | Required | Notes |
| --- | --- | --- |
| `MONGODB_URI` | yes | Atlas connection string |
| `MONGODB_DB` | no | Database name (default `ip3`) |
| `JWT_SECRET` | yes | Long random string; signs the admin session |
| `ADMIN_PASSWORD_HASH` | yes* | bcrypt hash — preferred in production |
| `ADMIN_PASSWORD` | yes* | Plaintext fallback if no hash is set |
| `ADMIN_EMAIL` | no | Shown in the console (default `admin@ip3.org`) |
| `SESSION_DAYS` | no | Session lifetime (default 7) |
| `CLOUDINARY_CLOUD_NAME` / `_API_KEY` / `_API_SECRET` | yes | Media uploads |
| `CLOUDINARY_FOLDER` | no | Upload folder (default `ip3`) |
| `MEETING_LINK` / `MEETING_MINUTES` | no | Booking confirmation defaults |
| `CORS_ORIGIN` | no | Only when the front end is on another domain |
| `VITE_API_BASE_URL` | no | Only for a split deployment; leave empty on Vercel |

\* One of `ADMIN_PASSWORD_HASH` or `ADMIN_PASSWORD` must be set, or sign-in is
disabled. Generate the hash with `npm run hash:password "your passphrase"`.

In MongoDB Atlas, set **Network Access → 0.0.0.0/0**: Vercel's functions do not
have fixed egress IPs.

---

## 4. Deploying to Vercel

1. Push the repository to GitHub and import it in Vercel.
2. Framework preset: **Other**. Build command `npm run build`, output `dist`.
   (`vercel.json` already declares this.)
3. Add every variable from section 3 to Production **and** Preview.
4. Deploy.
5. Seed the database once, from your machine, against the production URI:
   `MONGODB_URI="<atlas uri>" npm run db:seed`
6. Open `/admin`, sign in, and publish.

`vercel.json` routes `/api/*` to the serverless function, `/admin*` to the admin
bundle (with `X-Robots-Tag: noindex`), everything else to the site, and marks
hashed assets immutable.

Note: Vercel caps a serverless request body at ~4.5 MB. That is far above the
content payload, and media never goes through the function — the browser uploads
it directly to Cloudinary with a server-signed token.

---

## 5. API reference

Public (no session):

| Method | Route | Purpose |
| --- | --- | --- |
| `GET` | `/api/content` | Published content tree + version |
| `POST` | `/api/leads` | Any enquiry form (rate limited, validated) |
| `GET` | `/api/bookings/availability?date=` | Slots already taken |
| `POST` | `/api/bookings` | Confirm a consultation slot |
| `GET` | `/api/health` | Liveness, DB state, CDN state |

Admin only (httpOnly JWT cookie):

| Method | Route | Purpose |
| --- | --- | --- |
| `POST` | `/api/auth/login` · `/logout`, `GET /api/auth/me` | Session |
| `PUT` | `/api/content` | Publish; writes a revision |
| `GET` | `/api/content/revisions` | Revision history (metadata) |
| `POST` | `/api/content/revisions/:id/restore` | Roll back |
| `GET` `PATCH` `DELETE` | `/api/leads`, `/api/leads/:id` | Enquiry inbox |
| `GET` `PATCH` | `/api/bookings`, `/api/bookings/:id/cancel` | Schedule |
| `GET` `POST` `DELETE` | `/api/media`, `/api/media/:id` | Media library |
| `GET` `POST` | `/api/media/config`, `/api/media/signature` | Cloudinary |

---

## 6. How the pieces work

**Content.** One `Content` document (`key: 'site'`) holds the whole tree plus a
version number. Each publish also writes an immutable `Revision`, and the
history is capped at `MAX_REVISIONS` (30) so the collection cannot grow without
bound. Restoring a revision is itself a new publish, so history is never
rewritten. The front end hydrates from `GET /api/content` on load and merges the
stored document over the bundled defaults, so a key added by a newer build is
never `undefined` against an older stored document.

**Auth.** The passphrase is compared on the server against a bcrypt hash (or
constant-time against a plaintext fallback) and never reaches the bundle. The
session is a signed JWT in an httpOnly, `secure`, `sameSite` cookie — unreadable
by any script in the page. Login is rate limited to 10 attempts per 10 minutes.
There is no client-side fallback: if the API rejects the passphrase, there is no
session.

**Media.** The console asks `/api/media/signature` for a short-lived Cloudinary
token, the browser `PUT`s the file straight to Cloudinary with an upload
progress bar, and only the returned URL and metadata are recorded in MongoDB.
Deleting an asset removes it from both the library and the CDN.

**Bookings.** Double booking is prevented by a partial unique index on
`{date, timeSlot}` for confirmed bookings — the database rejects the clash and
the API answers `409 SLOT_TAKEN`, so two people clicking the same slot at the
same moment cannot both succeed. Cancelling frees the slot again.

**Resilience.** The Mongoose connection is cached on `globalThis`, so a warm
Vercel lambda reuses one pool. An unreachable database returns `503
DB_UNAVAILABLE` rather than a stack trace, and the console shows an offline
state instead of pretending an edit was published.
