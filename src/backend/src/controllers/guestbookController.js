import Guestbook from '../models/Guestbook.js';

export const getEntries = async (req, res) => {
  try {
    const entries = await Guestbook.find({ status: 'approved' }).sort({ created_at: -1 }).limit(50);
    res.json(entries);
  } catch (error) {
    console.error('Guestbook fetch error:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const submitEntry = async (req, res) => {
  try {
    const { name, email, category, message, is_anonymous } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required.' });
    }

    const entry = new Guestbook({ 
      name: name || null, 
      email: email || '', 
      category: category || 'wish', 
      message, 
      is_anonymous: is_anonymous || false 
    });
    
    await entry.save();
    res.status(200).json({ success: true, entry });
  } catch (error) {
    console.error('Guestbook submit error:', error);
    res.status(500).json({ error: 'Server error: ' + error.message });
  }
};