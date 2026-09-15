import mongoose from 'mongoose';

const ContentSchema = new mongoose.Schema(
  {
    key: { type: String, default: 'site', unique: true, index: true },
    data: { type: mongoose.Schema.Types.Mixed, required: true },
    version: { type: Number, default: 1 },
    updatedBy: { type: String, default: 'admin' },
  },
  { timestamps: true, minimize: false }
);

export const Content = mongoose.models.Content || mongoose.model('Content', ContentSchema);
export default Content;
