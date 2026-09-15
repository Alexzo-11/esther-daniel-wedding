'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import SectionDivider from '../ui/SectionDivider';

export default function RSVPForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 1,
    attending: true,
    attendance_mode: 'onsite',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const res = await axios.post('/api/rsvps', formData);
      if (res.status === 200) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          guests: 1,
          attending: true,
          attendance_mode: 'onsite',
        });
      } else {
        setError(res.data.error || 'Something went wrong.');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="rsvp" className="relative py-24 overflow-hidden bg-gradient-to-b from-white to-cream">
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-royal/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-royal">
            RSVP
          </h2>
          <SectionDivider variant="modern" />
          <p className="text-muted uppercase tracking-[0.3em] text-sm">
            Kindly confirm your attendance
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
              {success ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-8"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1 }}
                    className="text-7xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h4 className="font-serif text-3xl text-royal">Thank You!</h4>
                  <SectionDivider variant="elegant" className="my-3" />
                  <p className="text-muted mt-2 max-w-md mx-auto">
                    Your RSVP has been received. We look forward to celebrating with you!
                  </p>
                  {formData.attendance_mode === 'online' && (
                    <p className="text-sm text-gold-dark mt-2 font-semibold">
                      📺 The live stream link will be shared with you closer to the date.
                    </p>
                  )}
                  <motion.button
                    onClick={() => setSuccess(false)}
                    className="mt-6 text-gold font-semibold hover:text-gold-dark transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Submit Another Response →
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-red-50 border-l-4 border-red-500 text-red-700 p-4 rounded-xl"
                    >
                      {error}
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-sm text-royal mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-sm text-royal mb-2">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-semibold text-sm text-royal mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition"
                        placeholder="e.g. 08012345678"
                      />
                    </div>
                    <div>
                      <label className="block font-semibold text-sm text-royal mb-2">
                        Number of Guests
                      </label>
                      <input
                        type="number"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        max="10"
                        className="w-full p-3 border-2 border-gray-200 rounded-xl bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold text-sm text-royal mb-3">
                      How will you be attending? <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 ${
                          formData.attendance_mode === 'onsite'
                            ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
                            : 'border-gray-200 bg-cream hover:border-gold/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance_mode"
                          value="onsite"
                          checked={formData.attendance_mode === 'onsite'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <span className="text-3xl block mb-1">🏛️</span>
                          <span className="font-semibold text-royal text-sm">Onsite</span>
                          <span className="block text-xs text-muted mt-1">Attend in person</span>
                        </div>
                        {formData.attendance_mode === 'onsite' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-5 h-5 bg-gold rounded-full flex items-center justify-center"
                          >
                            <span className="text-white text-xs">✓</span>
                          </motion.div>
                        )}
                      </motion.label>

                      <motion.label
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`relative cursor-pointer rounded-2xl p-4 border-2 transition-all duration-300 ${
                          formData.attendance_mode === 'online'
                            ? 'border-gold bg-gold/5 shadow-lg shadow-gold/10'
                            : 'border-gray-200 bg-cream hover:border-gold/40'
                        }`}
                      >
                        <input
                          type="radio"
                          name="attendance_mode"
                          value="online"
                          checked={formData.attendance_mode === 'online'}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className="text-center">
                          <span className="text-3xl block mb-1">📺</span>
                          <span className="font-semibold text-royal text-sm">Online</span>
                          <span className="block text-xs text-muted mt-1">Join via live stream</span>
                        </div>
                        {formData.attendance_mode === 'online' && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-5 h-5 bg-gold rounded-full flex items-center justify-center"
                          >
                            <span className="text-white text-xs">✓</span>
                          </motion.div>
                        )}
                      </motion.label>
                    </div>

                    {formData.attendance_mode === 'online' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="mt-3 bg-gold/5 border-l-4 border-gold rounded-xl p-3"
                      >
                        <p className="text-xs text-gold-dark flex items-center gap-2">
                          <span>📧</span>
                          <span>The live stream link will be shared with you closer to the wedding date.</span>
                        </p>
                      </motion.div>
                    )}
                  </div>

                  <div className="flex items-center gap-3 bg-cream rounded-xl p-4">
                    <input
                      type="checkbox"
                      name="attending"
                      checked={formData.attending}
                      onChange={handleChange}
                      className="w-5 h-5 accent-gold"
                    />
                    <label className="font-medium text-royal">
                      I will be attending the ceremony
                    </label>
                  </div>

                  <motion.button
                    type="submit"
                    disabled={loading}
                    className="w-full group relative overflow-hidden bg-gradient-to-r from-gold to-gold-dark text-black font-semibold py-4 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: loading ? 1 : 1.01 }}
                    whileTap={{ scale: loading ? 1 : 0.98 }}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      {loading ? (
                        <>
                          <svg
                            className="animate-spin h-5 w-5 text-black"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            />
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        '📋 Submit RSVP'
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                  </motion.button>

                  <p className="text-xs text-muted text-center mt-4">
                    By submitting, you agree to our privacy policy.
                  </p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}