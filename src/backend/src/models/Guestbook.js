import mongoose from 'mongoose';

const guestbookSchema = new mongoose.Schema({
  name: { type: String, default: null },
  email: { type: String },
  category: { type: String, enum: ['wish', 'memory'], default: 'wish' },
  message: { type: String, required: true },
  is_anonymous: { type: Boolean, default: false },
  status: { type: String, enum: ['pending', 'approved', 'declined'], default: 'approved' },
  created_at: { type: Date, default: Date.now },
});

export default mongoose.model('Guestbook', guestbookSchema);