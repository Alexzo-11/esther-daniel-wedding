import { transporter, defaultMailOptions } from '../config/email.js';
import dotenv from 'dotenv';
dotenv.config({ path: '../.env' });

export const sendConfirmationEmail = async (rsvp) => {
  try {
    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #580F6E;">Thank You, ${rsvp.name}!</h2>
        <p>Your RSVP for <strong>Esther &amp; Daniel's Wedding</strong> has been received.</p>
        <p><strong>Date:</strong> Saturday, 14th November 2026, 9:00am</p>
        <p><strong>Venue:</strong> Deeper Life Bible Church Headquarters, Bwari, Abuja</p>
        <p>Your status is currently <strong>${rsvp.status}</strong>. You will receive a digital pass once approved.</p>
        <p style="margin-top: 20px; color: #666;">We look forward to celebrating with you!</p>
        <p style="color: #580F6E;">— Esther &amp; Daniel</p>
      </div>
    `;
    await transporter.sendMail({
      ...defaultMailOptions,
      to: rsvp.email,
      subject: 'RSVP Confirmation – Esther & Daniel Wedding',
      html,
    });
  } catch (error) {
    console.error('Confirmation email error:', error);
  }
};

export const sendAdminAlert = async (rsvp) => {
  try {
    const html = `
      <h3>New RSVP Submission</h3>
      <p><strong>Name:</strong> ${rsvp.name}</p>
      <p><strong>Email:</strong> ${rsvp.email}</p>
      <p><strong>Phone:</strong> ${rsvp.phone || 'N/A'}</p>
      <p><strong>Guests:</strong> ${rsvp.guests}</p>
      <p><strong>Attending:</strong> ${rsvp.attending ? 'Yes' : 'No'}</p>
 n     <p><strong>Dietary Notes:</strong> ${rsvp.dietary_notes || 'None'}</p>
      <p><a href="${process.env.FRONTEND_URL}/admin">View in Admin Dashboard</a></p>
    `;
    await transporter.sendMail({
      ...defaultMailOptions,
      to: process.env.ADMIN_EMAIL,
      subject: '🔔 New RSVP Alert',
      html,
    });
  } catch (error) {
    console.error('Admin alert email error:', error);
  }
};