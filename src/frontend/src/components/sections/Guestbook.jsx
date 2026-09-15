'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SectionDivider from '../ui/SectionDivider';

export default function Guestbook() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    is_anonymous: false,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await axios.post('/api/guestbook', { ...form, category: 'wish' });
      if (res.status === 200) {
        setSuccess(true);
        setForm({ name: '', email: '', message: '', is_anonymous: false });
        setTimeout(() => setSuccess(false), 4000);
      } else {
        setError(res.data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Network error.');
    } finally {
      setLoading(false);
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="guestbook" className="relative py-24 overflow-hidden bg-gradient-to-b from-cream to-white">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-royal/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-3xl" />
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
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-royal">
            Guestbook
          </h2>
          <SectionDivider variant="floral" />
          <p className="text-muted uppercase tracking-[0.3em] text-sm">
            Leave a wish for the couple
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
            <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-royal/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
            <div className="relative bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-gold/10 hover:border-gold/30 transition-all duration-500">
              <h4 className="font-serif text-2xl text-royal mb-6 flex items-center gap-3">
                <span className="text-3xl">💌</span>
                Write a Message
              </h4>

              {success && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-l-4 border-green-500 text-green-700 p-4 rounded-xl mb-4"
                >
                  ✅ Your message has been submitted! Thank you for your kind words.
                </motion.div>
              )}
              {error && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-xl mb-4"
                >
                  {error}
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your name (optional)"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your email (optional)"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition"
                />
                <textarea
                  name="message"
                  placeholder="Write your heartfelt message..."
                  value={form.message}
                  onChange={handleChange}
                  rows="5"
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition resize-y"
                />
                <div className="flex items-center gap-2 bg-cream rounded-xl p-3">
                  <input
                    type="checkbox"
                    name="is_anonymous"
                    checked={form.is_anonymous}
                    onChange={handleChange}
                    className="w-4 h-4 accent-gold"
                  />
                  <label className="text-sm text-royal">Post anonymously</label>
                </div>
                <motion.button
                  type="submit"
                  disabled={loading}
                  className="w-full group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-black font-semibold py-3 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 disabled:opacity-50"
                  whileHover={{ scale: loading ? 1 : 1.01 }}
                  whileTap={{ scale: loading ? 1 : 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? '⏳ Sending...' : '💌 Send Message'}
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}