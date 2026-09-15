import mongoose from 'mongoose';

/** Wraps an async route so a rejected promise reaches the error handler. */
export const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

export const httpError = (status, message, code = 'REQUEST_FAILED') =>
  Object.assign(new Error(message), { status, code });

export const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

export const randomTicket = (prefix = 'IP3') =>
  `${prefix}-${Math.floor(100000 + Math.random() * 900000)}`;

/** Trims strings and drops keys the client must never control. */
const BLOCKED_KEYS = new Set(['_id', '__v', 'status', 'ticketId', 'bookingId', 'createdAt', 'updatedAt']);

export function sanitizePayload(body = {}, { maxLength = 5000 } = {}) {
  const out = {};
  for (const [key, value] of Object.entries(body)) {
    if (BLOCKED_KEYS.has(key) || key.startsWith('$')) continue;
    if (typeof value === 'string') out[key] = value.trim().slice(0, maxLength);
    else if (typeof value === 'number' || typeof value === 'boolean') out[key] = value;
    else if (value === null) out[key] = null;
    else if (Array.isArray(value) || typeof value === 'object') out[key] = JSON.parse(JSON.stringify(value));
  }
  return out;
}

export const isEmail = (value = '') => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value).trim());
