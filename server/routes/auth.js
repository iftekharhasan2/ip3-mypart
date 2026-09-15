import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import { verifyPassword, issueSession, clearSession, readSession } from '../lib/auth.js';
import { asyncHandler } from '../lib/helpers.js';

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many attempts. Try again in a few minutes.', code: 'RATE_LIMITED' },
});

router.post(
  '/login',
  loginLimiter,
  asyncHandler(async (req, res) => {
    const { password } = req.body || {};
    const ok = await verifyPassword(password);

    if (!ok) {
      return res.status(401).json({ ok: false, error: 'Invalid administrator passphrase.', code: 'BAD_CREDENTIALS' });
    }

    const user = { email: process.env.ADMIN_EMAIL || 'admin@ip3.org', role: 'admin' };
    const expiresAt = issueSession(res, user);
    res.json({ ok: true, user, expiresAt });
  })
);

router.get('/me', (req, res) => {
  const session = readSession(req);
  if (!session) {
    return res.status(401).json({ ok: false, error: 'Unauthenticated.', code: 'UNAUTHENTICATED' });
  }
  res.json({ ok: true, user: session.user, expiresAt: session.expiresAt });
});

router.post('/logout', (_req, res) => {
  clearSession(res);
  res.json({ ok: true });
});

export default router;
