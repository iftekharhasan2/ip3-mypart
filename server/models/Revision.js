import mongoose from 'mongoose';

const RevisionSchema = new mongoose.Schema(
  {
    version: { type: Number, required: true, index: true },
    note: { type: String, default: '' },
    createdBy: { type: String, default: 'admin' },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
  },
  { timestamps: { createdAt: true, updatedAt: false }, minimize: false }
);

RevisionSchema.index({ createdAt: -1 });

export const Revision = mongoose.models.Revision || mongoose.model('Revision', RevisionSchema);
export default Revision;
