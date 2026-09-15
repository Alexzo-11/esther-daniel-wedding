import mongoose from 'mongoose';

const rsvpSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String },
  guests: { type: Number, default: 1 },
  dietary_notes: { type: String },
  attendance_mode: {
    type: String,
    enum: ['onsite', 'online'],
    default: 'onsite',
  },
  attending: { type: Boolean, default: true },
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'pending' },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model('RSVP', rsvpSchema);