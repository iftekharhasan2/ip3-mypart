import mongoose from 'mongoose';

const MediaSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    publicId: { type: String, required: true, index: true },
    resourceType: { type: String, enum: ['image', 'video'], default: 'image', index: true },
    format: String,
    bytes: Number,
    width: Number,
    height: Number,
    duration: Number,
    thumbnailUrl: String,
    originalName: String,
    alt: String,
    folder: String,
  },
  { timestamps: true }
);

MediaSchema.index({ createdAt: -1 });

export const Media = mongoose.models.Media || mongoose.model('Media', MediaSchema);
export default Media;
