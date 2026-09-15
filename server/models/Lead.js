import mongoose from 'mongoose';

/**
 * Enquiries from every public form. `strict: false` because the site has a
 * dozen different forms and each sends a slightly different shape; the fields
 * below are the ones the admin console relies on.
 */
const LeadSchema = new mongoose.Schema(
  {
    ticketId: { type: String, required: true, unique: true, index: true },
    source: { type: String, default: 'General Contact', index: true },
    status: { type: String, default: 'new', index: true },
    name: String,
    email: { type: String, index: true },
    phone: String,
    organization: String,
    organisation: String,
    focusArea: String,
    message: String,
    ip: String,
    userAgent: String,
  },
  { timestamps: true, strict: false, minimize: false }
);

LeadSchema.index({ createdAt: -1 });

export const Lead = mongoose.models.Lead || mongoose.model('Lead', LeadSchema);
export default Lead;
