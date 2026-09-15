import express from 'express';
import { adminAuth } from '../middleware/auth.js';
import {
  getAllRSVPs,
  updateRSVPStatus,
  deleteRSVP,
  getAllGuestbookEntries,
} from '../controllers/adminController.js';

const router = express.Router();

// RSVPs
router.get('/rsvps', adminAuth, getAllRSVPs);
router.post('/rsvp-status', adminAuth, updateRSVPStatus);
router.delete('/rsvps', adminAuth, deleteRSVP);

// Guestbook (NEW)
router.get('/guestbook', adminAuth, getAllGuestbookEntries);

export default router;