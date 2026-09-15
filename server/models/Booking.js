import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    bookingId: { type: String, required: true, unique: true, index: true },
    ticketId: { type: String, required: true },
    source: { type: String, default: 'Consultation Scheduler' },
    status: { type: String, default: 'confirmed', index: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: String,
    organization: String,
    serviceId: String,
    serviceTitle: String,
    meetingMode: { type: String, default: 'virtual' },
    date: { type: String, required: true, index: true },
    timeSlot: { type: String, required: true },
    meetLink: String,
    notes: String,
  },
  { timestamps: true, strict: false, minimize: false }
);

/** One confirmed booking per slot — enforced by the database, not the browser. */
BookingSchema.index(
  { date: 1, timeSlot: 1 },
  { unique: true, partialFilterExpression: { status: 'confirmed' } }
);
BookingSchema.index({ createdAt: -1 });

export const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema);
export default Booking;
