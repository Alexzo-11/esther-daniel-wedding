import express from 'express';
import { getEntries, submitEntry } from '../controllers/guestbookController.js';

const router = express.Router();

router.get('/', getEntries);
router.post('/', submitEntry);

export default router;