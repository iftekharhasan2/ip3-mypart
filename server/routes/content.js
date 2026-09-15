import { Router } from 'express';
import Content from '../models/Content.js';
import Revision from '../models/Revision.js';
import { requireAdmin } from '../lib/auth.js';
import { asyncHandler, httpError, isValidId } from '../lib/helpers.js';

const router = Router();

const MAX_REVISIONS = Number(process.env.MAX_REVISIONS || 30);

/** Public: the whole published content tree. */
router.get(
  '/',
  asyncHandler(async (_req, res) => {
    const doc = await Content.findOne({ key: 'site' }).lean();
    if (!doc) {
      // Nothing seeded yet — the client paints its bundled defaults.
      return res.json({ data: null, version: 0, updatedAt: null, seeded: false });
    }
    res.json({
      data: doc.data,
      version: doc.version,
      updatedAt: doc.updatedAt,
      seeded: true,
    });
  })
);

/** Admin: publish. Every publish also writes an immutable revision. */
router.put(
  '/',
  requireAdmin,
  asyncHandler(async (req, res) => {
    const { data, note } = req.body || {};
    if (!data || typeof data !== 'object') {
      throw httpError(400, 'Missing content data payload.', 'INVALID_PAYLOAD');
    }

    const current = await Content.findOne({ key: 'site' });
    const version = (current?.version || 0) + 1;

    const doc = await Content.findOneAndUpdate(
      { key: 'site' },
      { $set: { data, version, updatedBy: req.admin.email } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    await Revision.create({
      version,
      note: note || `Published version ${version}`,
      createdBy: req.admin.email,
      data,
    });

    // Keep the history bounded so the collection cannot grow without limit.
    const stale = await Revision.find({}).sort({ version: -1 }).skip(MAX_REVISIONS).select('_id').lean();
    if (stale.length) {
      await Revision.deleteMany({ _id: { $in: stale.map((r) => r._id) } });
    }

    res.json({ ok: true, version: doc.version, updatedAt: doc.updatedAt });
  })
);

/** Admin: revision list (metadata only — payloads stay out of the response). */
router.get(
  '/revisions',
  requireAdmin,
  asyncHandler(async (_req, res) => {
    const items = await Revision.find({})
      .sort({ version: -1 })
      .limit(MAX_REVISIONS)
      .select('version note createdBy createdAt')
      .lean();
    res.json({ items });
  })
);

/** Admin: roll back. The restore itself becomes a new revision. */
router.post(
  '/revisions/:id/restore',
  requireAdmin,
  asyncHandler(async (req, res) => {
    if (!isValidId(req.params.id)) throw httpError(400, 'Invalid revision id.', 'INVALID_ID');

    const target = await Revision.findById(req.params.id).lean();
    if (!target) throw httpError(404, 'Revision not found.', 'NOT_FOUND');

    const current = await Content.findOne({ key: 'site' });
    const version = (current?.version || 0) + 1;

    const doc = await Content.findOneAndUpdate(
      { key: 'site' },
      { $set: { data: target.data, version, updatedBy: req.admin.email } },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    await Revision.create({
      version,
      note: `Restored from revision v${target.version}`,
      createdBy: req.admin.email,
      data: target.data,
    });

    res.json({ ok: true, version: doc.version, updatedAt: doc.updatedAt });
  })
);

export default router;
