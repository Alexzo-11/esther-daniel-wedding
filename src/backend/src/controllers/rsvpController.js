import RSVP from '../models/RSVP.js';

export const submitRSVP = async (req, res) => {
  try {
    const { name, email, phone, guests, dietary_notes, attending, attendance_mode } = req.body;

    if (!name || !email) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }

    const existing = await RSVP.findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'This email has already RSVPed.' });
    }

    const rsvp = new RSVP({
      name,
      email,
      phone: phone || '',
      guests: guests || 1,
      dietary_notes: dietary_notes || '',
      attending: attending !== false,
      attendance_mode: attendance_mode || 'onsite',
    });

    await rsvp.save();
    res.status(200).json({ success: true, rsvp });
  } catch (error) {
    console.error('RSVP Error:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
};

export const lookupRSVP = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });
    const rsvp = await RSVP.findOne({ email });
    if (!rsvp) return res.status(404).json({ error: 'Not found' });
    res.json({ rsvp });
  } catch (error) {
    console.error('Lookup Error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};