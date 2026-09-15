import RSVP from '../models/RSVP.js';
import Guestbook from '../models/Guestbook.js';

// RSVP controllers
export const getAllRSVPs = async (req, res) => {
  try {
    const rsvps = await RSVP.find().sort({ created_at: -1 });
    res.json(rsvps);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateRSVPStatus = async (req, res) => {
  try {
    const { id, status } = req.body;
    const rsvp = await RSVP.findByIdAndUpdate(id, { status }, { new: true });
    if (!rsvp) return res.status(404).json({ error: 'Not found' });
    res.json({ success: true, rsvp });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteRSVP = async (req, res) => {
  try {
    const { id } = req.body;
    await RSVP.findByIdAndDelete(id);
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};

// NEW: Guestbook admin controller
export const getAllGuestbookEntries = async (req, res) => {
  try {
    const entries = await Guestbook.find().sort({ created_at: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
};