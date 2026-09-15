'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SectionDivider from '../ui/SectionDivider';

export default function PassLookup() {
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const lookup = async () => {
    if (!email) return;
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await axios.post('/api/pass', { email });
      if (res.status === 200) {
        setResult(res.data.rsvp);
      } else {
        setError('No RSVP found for this email.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Network error.');
    } finally {
      setLoading(false);
    }
  };

  const downloadPass = (rsvp) => {
    const canvas = document.createElement('canvas');
    canvas.width = 800;
    canvas.height = 500;
    const ctx = canvas.getContext('2d');

    // Enhanced design
    const grad = ctx.createLinearGradient(0, 0, 800, 500);
    grad.addColorStop(0, '#1a0a1f');
    grad.addColorStop(0.5, '#2d0a3a');
    grad.addColorStop(1, '#0f0314');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 800, 500);

    // Decorative elements
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 3;
    ctx.strokeRect(30, 30, 740, 440);
    
    ctx.strokeStyle = 'rgba(212,175,55,0.2)';
    ctx.lineWidth = 1;
    ctx.strokeRect(45, 45, 710, 410);
    
    // Corner decorations
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 2;
    const corners = [
      [50, 50, 30, 30],
      [750, 50, -30, 30],
      [50, 450, 30, -30],
      [750, 450, -30, -30]
    ];
    corners.forEach(([x, y, dx, dy]) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx, y);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x, y + dy);
      ctx.stroke();
    });

    // Title with gold gradient
    ctx.textAlign = 'center';
    ctx.shadowColor = 'rgba(212,175,55,0.3)';
    ctx.shadowBlur = 20;
    ctx.fillStyle = '#D4AF37';
    ctx.font = 'bold 32px "Cormorant Garamond", serif';
    ctx.fillText('Esther & Daniel', 400, 95);
    ctx.shadowBlur = 0;

    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.font = '14px "Montserrat", sans-serif';
    ctx.fillText('— Wedding Pass —', 400, 130);

    // Decorative line
    ctx.strokeStyle = 'rgba(212,175,55,0.3)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(300, 150);
    ctx.lineTo(500, 150);
    ctx.stroke();

    // Name with script font
    ctx.shadowColor = 'rgba(212,175,55,0.2)';
    ctx.shadowBlur = 15;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 48px "Alex Brush", cursive';
    ctx.fillText(rsvp.name, 400, 220);
    ctx.shadowBlur = 0;

    // Details
    ctx.fillStyle = 'rgba(255,255,255,0.85)';
    ctx.font = '18px "Montserrat", sans-serif';
    ctx.fillText('Saturday, 14th November 2026 · 9:00am', 400, 275);
    
    ctx.fillStyle = 'rgba(255,255,255,0.6)';
    ctx.font = '15px "Montserrat", sans-serif';
    ctx.fillText('Deeper Life Bible Church Headquarters, Bwari, Abuja', 400, 310);

    // Status badge
    const statusColor = rsvp.status === 'approved' ? '#4CAF50' : rsvp.status === 'declined' ? '#f44336' : '#FFC107';
    ctx.shadowColor = `${statusColor}40`;
    ctx.shadowBlur = 20;
    ctx.fillStyle = statusColor;
    ctx.font = 'bold 24px "Montserrat", sans-serif';
    ctx.fillText((rsvp.status || 'pending').toUpperCase(), 400, 375);
    ctx.shadowBlur = 0;

    // Footer with verse
    ctx.fillStyle = 'rgba(255,255,255,0.2)';
    ctx.font = '11px "Montserrat", sans-serif';
    ctx.fillText(`Pass #${rsvp._id ? rsvp._id.slice(-6).toUpperCase() : 'N/A'}  ·  James 1:17`, 400, 440);

    // Gold border glow effect
    ctx.strokeStyle = 'rgba(212,175,55,0.1)';
    ctx.lineWidth = 1;
    ctx.strokeRect(20, 20, 760, 460);

    const link = document.createElement('a');
    link.download = `wedding-pass-${rsvp.name.replace(/\s+/g, '-')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="pass" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-cream">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-2xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-purple">
            My Pass
          </h2>
          <SectionDivider variant="modern" />
          <p className="text-muted uppercase tracking-[0.3em] text-sm">
            Look up your digital guest pass
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-purple/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gold/10 hover:border-gold/30 transition-all duration-500">
              <p className="text-muted text-sm text-center mb-6">
                Enter the email you used for RSVP to view your digital pass.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition"
                  onKeyDown={(e) => e.key === 'Enter' && lookup()}
                />
                <motion.button
                  onClick={lookup}
                  disabled={loading}
                  className="group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-white font-semibold px-8 py-3 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 disabled:opacity-50"
                  whileHover={{ scale: loading ? 1 : 1.02 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {loading ? '⏳ Searching...' : '🔍 Look Up'}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-600 text-sm text-center mt-4"
                >
                  {error}
                </motion.div>
              )}

              {result && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-6 bg-gradient-to-br from-purple/5 to-gold/5 rounded-2xl p-6 border-2 border-gold/20"
                >
                  <div className="flex justify-between items-center flex-wrap gap-3">
                    <span className="font-script text-2xl text-purple">{result.name}</span>
                    <span className={`text-xs font-bold uppercase px-4 py-1.5 rounded-full ${
                      result.status === 'approved' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : result.status === 'declined' 
                        ? 'bg-red-100 text-red-800 border border-red-200' 
                        : 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                    }`}>
                      {result.status || 'pending'}
                    </span>
                  </div>
                  <SectionDivider variant="elegant" className="my-3" />
                  <div className="mt-3 space-y-1 text-sm text-muted">
                    <p>📧 {result.email}</p>
                    <p>👥 {result.guests || 1} guest{result.guests > 1 ? 's' : ''}</p>
                    <p className="flex items-center gap-2">
                      <span className={result.attending ? 'text-green-600' : 'text-red-600'}>
                        {result.attending ? '✅ Attending' : '❌ Not attending'}
                      </span>
                    </p>
                  </div>
                  <motion.button
                    onClick={() => downloadPass(result)}
                    className="mt-4 w-full group relative overflow-hidden bg-gradient-to-r from-purple to-purple-dark text-white font-semibold py-3 rounded-full hover:shadow-2xl hover:shadow-purple/25 transition-all duration-500"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      ⬇ Download Pass
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}