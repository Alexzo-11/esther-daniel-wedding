import express from 'express';
import { submitRSVP, lookupRSVP } from '../controllers/rsvpController.js';

const router = express.Router();

router.post('/', submitRSVP);
router.post('/lookup', lookupRSVP);

export default router;