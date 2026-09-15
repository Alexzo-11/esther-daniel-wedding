import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { connectDB } from './config/database.js';
import rsvpRoutes from './routes/rsvpRoutes.js';
import guestbookRoutes from './routes/guestbookRoutes.js';
import adminRoutes from './routes/adminRoutes.js';
import rateLimiter from './middleware/rateLimiter.js';

// Load .env from current directory
dotenv.config();

const app = express();
const PORT = process.env.BACKEND_PORT || 4000;

connectDB();

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:3000' }));
app.use(express.json());
app.use(morgan('dev'));
app.use(rateLimiter);

app.use('/api/rsvps', rsvpRoutes);
app.use('/api/guestbook', guestbookRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/health', (req, res) => res.json({ status: 'OK', timestamp: new Date() }));

// Handle 404 for API
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API route not found' });
});

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});