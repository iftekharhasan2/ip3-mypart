import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const COOKIE_NAME = 'ip3_session';
const SESSION_DAYS = Number(process.env.SESSION_DAYS || 7);
const MAX_AGE_MS = SESSION_DAYS * 86400000;

function jwtSecret() {
  const secret = process.env.JWT_SECRET;
  if (!secret || secret.length < 16) {
    throw Object.assign(new Error('JWT_SECRET is not configured.'), {
      status: 500,
      code: 'AUTH_NOT_CONFIGURED',
    });
  }
  return secret;
}

/** Constant-time comparison so a wrong passphrase leaks no timing information. */
function safeEqual(a = '', b = '') {
  const bufA = Buffer.from(String(a));
  const bufB = Buffer.from(String(b));
  if (bufA.length !== bufB.length) return false;
  return crypto.timingSafeEqual(bufA, bufB);
}

/**
 * Verifies the administrator passphrase.
 * ADMIN_PASSWORD_HASH (a bcrypt hash) is preferred; ADMIN_PASSWORD is accepted
 * as a plain fallback for smaller deployments. Neither ever reaches the bundle.
 */
export async function verifyPassword(password) {
  if (!password) return false;

  const hash = process.env.ADMIN_PASSWORD_HASH;
  if (hash) return bcrypt.compare(password, hash);

  const plain = process.env.ADMIN_PASSWORD;
  if (plain) return safeEqual(password, plain);

  throw Object.assign(new Error('Admin authentication is not configured on the server.'), {
    status: 500,
    code: 'AUTH_NOT_CONFIGURED',
  });
}

export function cookieOptions() {
  const isProd = process.env.NODE_ENV === 'production';
  const sameSite = process.env.COOKIE_SAMESITE || (isProd ? 'none' : 'lax');
  return {
    httpOnly: true,
    secure: isProd || sameSite === 'none',
    sameSite,
    maxAge: MAX_AGE_MS,
    path: '/',
  };
}

export function issueSession(res, user) {
  const expiresAt = new Date(Date.now() + MAX_AGE_MS);
  const token = jwt.sign({ sub: user.email, role: user.role }, jwtSecret(), {
    expiresIn: `${SESSION_DAYS}d`,
  });
  res.cookie(COOKIE_NAME, token, cookieOptions());
  return expiresAt.toISOString();
}

export function clearSession(res) {
  res.clearCookie(COOKIE_NAME, { ...cookieOptions(), maxAge: undefined });
}

export function readSession(req) {
  const token = req.cookies?.[COOKIE_NAME];
  if (!token) return null;
  try {
    const payload = jwt.verify(token, jwtSecret());
    return {
      user: { email: payload.sub, role: payload.role || 'admin' },
      expiresAt: new Date(payload.exp * 1000).toISOString(),
    };
  } catch {
    return null;
  }
}

/** Gate for every write and every read of private data. */
export function requireAdmin(req, res, next) {
  const session = readSession(req);
  if (!session || session.user.role !== 'admin') {
    return res.status(401).json({ ok: false, error: 'Administrator session required.', code: 'UNAUTHENTICATED' });
  }
  req.admin = session.user;
  next();
}

/** Attaches the session when present but never rejects. */
export function optionalAdmin(req, _res, next) {
  const session = readSession(req);
  if (session) req.admin = session.user;
  next();
}
