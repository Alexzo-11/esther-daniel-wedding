'use client';

import { useState } from 'react';

export default function AdminLogin({ onLogin }) {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passcode === process.env.NEXT_PUBLIC_ADMIN_PASSCODE) {
      onLogin(passcode);
    } else {
      setError('Invalid passcode. Try again.');
      setPasscode('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-royal-dark to-royal-deep px-4">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-sm w-full border border-gold/20">
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🔐</div>
          <h2 className="font-serif text-3xl text-royal">Admin</h2>
          <p className="text-muted text-sm mt-1">Enter the admin passcode</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            placeholder="Enter passcode"
            className="w-full p-4 border-2 border-gray-200 rounded-xl text-center bg-cream focus:border-gold focus:ring-4 focus:ring-gold/10 outline-none transition tracking-widest"
            autoFocus
          />
          {error && <p className="text-red-600 text-sm text-center">{error}</p>}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-gold to-gold-dark text-black font-semibold py-3 rounded-full hover:shadow-2xl hover:shadow-gold/25 transition-all duration-500"
          >
            Unlock Dashboard
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-muted">
          <a href="/" className="text-royal hover:text-gold transition-colors">
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}