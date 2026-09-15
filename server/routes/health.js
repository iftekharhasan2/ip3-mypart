import { Router } from 'express';
import Content from '../models/Content.js';
import Lead from '../models/Lead.js';
import Booking from '../models/Booking.js';
import Media from '../models/Media.js';
import { dbState, dbPing } from '../lib/db.js';
import { isCloudinaryConfigured } from '../lib/cloudinary.js';
import { optionalAdmin } from '../lib/auth.js';
import { asyncHandler } from '../lib/helpers.js';

const router = Router();

/**
 * Public: liveness only. Counts and content metadata are returned only to a
 * signed-in administrator — the console's overview panel uses them.
 */
router.get(
  '/',
  optionalAdmin,
  asyncHandler(async (req, res) => {
    const state = dbState();
    const ping = await dbPing();

    const payload = {
      ok: ping === 'ok',
      database: 'MongoDB',
      dbState: state,
      dbPing: ping,
      cdn: isCloudinaryConfigured() ? 'Cloudinary' : 'Not configured',
      adminAuth: process.env.ADMIN_PASSWORD_HASH || process.env.ADMIN_PASSWORD ? 'Active' : 'Not configured',
      content: null,
      counts: null,
    };

    if (req.admin) {
      const [content, leads, newLeads, bookings, upcoming, media] = await Promise.all([
        Content.findOne({ key: 'site' }).select('version updatedAt updatedBy').lean(),
        Lead.countDocuments({}),
        Lead.countDocuments({ status: 'new' }),
        Booking.countDocuments({}),
        Booking.countDocuments({ status: 'confirmed' }),
        Media.countDocuments({}),
      ]);

      payload.content = content
        ? { version: content.version, updatedAt: content.updatedAt, updatedBy: content.updatedBy }
        : null;
      payload.counts = { leads, newLeads, bookings, upcoming, media };
    }

    res.status(payload.ok ? 200 : 503).json(payload);
  })
);

export default router;
