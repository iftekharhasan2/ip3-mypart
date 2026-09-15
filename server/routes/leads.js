import { Router } from 'express';
import rateLimit from 'express-rate-limit';
import Lead from '../models/Lead.js';
import { requireAdmin } from '../lib/auth.js';
import { asyncHandler, httpError, isValidId, randomTicket, sanitizePayload, isEmail } from '../lib/helpers.js';

const router = Router();

const submitLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { ok: false, error: 'Too many submissions from this address. Please try again later.', code: 'RATE_LIMITED' },
});

const ALLOWED_STATUS = ['new', 'in_review', 'contacted', 'closed', 'archived'];

/** Public: every enquiry form on the site posts here. */
router.post(
  '/',
  submitLimiter,
  asyncHandler(async (req, res) => {
    const payload = sanitizePayload(req.body);

    if (!payload.name || String(payload.name).length < 2) {
      throw httpError(400, 'Please provide your name.', 'INVALID_NAME');
    }
    if (!isEmail(payload.email)) {
      throw httpError(400, 'Please provide a valid email address.', 'INVALID_EMAIL');
    }

    const lead = await Lead.create({
      ...payload,
      ticketId: randomTicket(),
      source: payload.source || 'General Contact',
      status: 'new',
      ip: req.ip,
      userAgent: String(req.get('user-agent') || '').slice(0, 300),
    });

    res.status(201).json({ ok: true, ticketId: lead.ticketId, timestamp: lead.createdAt });
  })
);

/** Admin: inbox. */
router.get(
  '/',
  requireAdmin,
  asyncHandler(async (req, res) => {
    const { status, source, limit = 200 } = req.query;
    const filter = {};
    if (status) filter.status = String(status);
    if (source) filter.source = String(source);

    const items = await Lead.find(filter)
      .sort({ createdAt: -1 })
      .limit(Math.min(Number(limit) || 200, 500))
      .lean();

    res.json({ items });
  })
);

router.patch(
  '/:id',
  requireAdmin,
  asyncHandler(async (req, res) => {
    if (!isValidId(req.params.id)) throw httpError(400, 'Invalid lead id.', 'INVALID_ID');

    const { status } = req.body || {};
    if (!ALLOWED_STATUS.includes(status)) {
      throw httpError(400, `Status must be one of: ${ALLOWED_STATUS.join(', ')}.`, 'INVALID_STATUS');
    }

    const item = await Lead.findByIdAndUpdate(req.params.id, { $set: { status } }, { new: true }).lean();
    if (!item) throw httpError(404, 'Lead not found.', 'NOT_FOUND');

    res.json({ ok: true, item });
  })
);

router.delete(
  '/:id',
  requireAdmin,
  asyncHandler(async (req, res) => {
    if (!isValidId(req.params.id)) throw httpError(400, 'Invalid lead id.', 'INVALID_ID');
    await Lead.findByIdAndDelete(req.params.id);
    res.json({ ok: true });
  })
);

export default router;
