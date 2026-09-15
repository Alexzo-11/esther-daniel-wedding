'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('rsvps');
  const [rsvps, setRsvps] = useState([]);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copiedId, setCopiedId] = useState(null);

  const adminPass = process.env.NEXT_PUBLIC_ADMIN_PASSCODE;

  // ============ FETCH DATA ============
  const fetchAll = async () => {
    setLoading(true);
    try {
      const [rsvpRes, msgRes] = await Promise.all([
        axios.get('/api/admin', { headers: { 'x-admin-pass': adminPass } }),
        axios.get('/api/admin/guestbook', { headers: { 'x-admin-pass': adminPass } }),
      ]);
      setRsvps(rsvpRes.data || []);
      setMessages(msgRes.data || []);
    } catch (err) {
      console.error('Failed to load admin data', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAll();
  }, []);

  // ============ COPY EMAIL ============
  const copyEmail = (email, id) => {
    navigator.clipboard.writeText(email);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1500);
  };

  // ============ EXPORT CSV ============
  const downloadCSV = (filename, rows) => {
    const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? '').replace(/"/g, '""')}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const exportRSVPs = () => {
    const header = ['Name', 'Email', 'Phone', 'Guests', 'Attendance', 'Attending', 'Status', 'Date'];
    const rows = rsvps.map((r) => [
      r.name,
      r.email,
      r.phone || '',
      r.guests || 1,
      r.attendance_mode === 'online' ? 'Online' : 'Onsite',
      r.attending ? 'Yes' : 'No',
      r.status || 'pending',
      new Date(r.created_at).toLocaleString(),
    ]);
    downloadCSV(`rsvps_${new Date().toISOString().slice(0, 10)}.csv`, [header, ...rows]);
  };

  const exportMessages = () => {
    const header = ['Name', 'Email', 'Message', 'Anonymous', 'Date'];
    const rows = messages.map((m) => [
      m.is_anonymous ? 'Anonymous' : m.name || 'Guest',
      m.email || '',
      m.message,
      m.is_anonymous ? 'Yes' : 'No',
      new Date(m.created_at).toLocaleString(),
    ]);
    downloadCSV(`guestbook_${new Date().toISOString().slice(0, 10)}.csv`, [header, ...rows]);
  };

  return (
    <div className="min-h-screen bg-cream p-6">
      <div className="max-w-6xl mx-auto">
        {/* ============ HEADER ============ */}
        <div className="flex justify-between items-center flex-wrap gap-4 mb-6">
          <div>
            <h1 className="font-serif text-3xl text-royal">Admin Dashboard</h1>
            <p className="text-sm text-muted mt-1">Esther &amp; Daniel Wedding</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={fetchAll}
              className="bg-white text-royal border-2 border-royal px-4 py-2 rounded-full text-sm font-semibold hover:bg-royal hover:text-white transition"
            >
              🔄 Refresh
            </button>
            <button
              onClick={onLogout}
              className="bg-white text-muted border border-gray-200 px-4 py-2 rounded-full text-sm hover:text-red-600 hover:border-red-200 transition"
            >
              Logout
            </button>
          </div>
        </div>

        {/* ============ TABS ============ */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setActiveTab('rsvps')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
              activeTab === 'rsvps'
                ? 'bg-royal text-white shadow-lg shadow-royal/20'
                : 'bg-white text-royal border border-royal/30 hover:border-royal'
            }`}
          >
            📋 RSVPs
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === 'rsvps' ? 'bg-white/20 text-white' : 'bg-royal/10 text-royal'
              }`}
            >
              {rsvps.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('messages')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition flex items-center gap-2 ${
              activeTab === 'messages'
                ? 'bg-royal text-white shadow-lg shadow-royal/20'
                : 'bg-white text-royal border border-royal/30 hover:border-royal'
            }`}
          >
            💌 Messages
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                activeTab === 'messages' ? 'bg-white/20 text-white' : 'bg-royal/10 text-royal'
              }`}
            >
              {messages.length}
            </span>
          </button>
        </div>

        {/* ============ RSVPs TAB ============ */}
        {activeTab === 'rsvps' && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-gray-100 flex-wrap gap-3">
              <h2 className="font-serif text-xl text-royal">RSVP List</h2>
              <button
                onClick={exportRSVPs}
                disabled={rsvps.length === 0}
                className="bg-gold text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gold-dark transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                📥 Export CSV
              </button>
            </div>

            {loading ? (
              <div className="py-16 text-center text-muted">Loading...</div>
            ) : rsvps.length === 0 ? (
              <div className="py-16 text-center text-muted">
                <span className="text-4xl block mb-2">📭</span>
                No RSVPs yet.
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-royal/5 text-royal">
                    <tr>
                      <th className="py-3 px-4 text-left font-semibold">#</th>
                      <th className="py-3 px-4 text-left font-semibold">Name</th>
                      <th className="py-3 px-4 text-left font-semibold">Email</th>
                      <th className="py-3 px-4 text-center font-semibold">Guests</th>
                      <th className="py-3 px-4 text-center font-semibold">Mode</th>
                      <th className="py-3 px-4 text-center font-semibold">Copy</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rsvps.map((r, i) => (
                      <tr
                        key={r._id}
                        className="border-b border-gray-50 hover:bg-cream/50 transition"
                      >
                        <td className="py-3 px-4 text-muted">{i + 1}</td>
                        <td className="py-3 px-4 font-semibold text-royal">{r.name}</td>
                        <td className="py-3 px-4 text-muted break-all">{r.email}</td>
                        <td className="py-3 px-4 text-center text-muted">{r.guests || 1}</td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                              r.attendance_mode === 'online'
                                ? 'bg-gold/20 text-gold-dark'
                                : 'bg-royal/10 text-royal'
                            }`}
                          >
                            {r.attendance_mode === 'online' ? '📺 Online' : '🏛️ Onsite'}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <button
                            onClick={() => copyEmail(r.email, r._id)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition ${
                              copiedId === r._id
                                ? 'bg-green-100 text-green-700'
                                : 'bg-royal text-white hover:bg-royal-dark'
                            }`}
                          >
                            {copiedId === r._id ? '✓ Copied' : '📧 Copy'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* ============ MESSAGES TAB ============ */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="flex justify-between items-center p-5 border-b border-gray-100 flex-wrap gap-3">
              <h2 className="font-serif text-xl text-royal">Guestbook Messages</h2>
              <button
                onClick={exportMessages}
                disabled={messages.length === 0}
                className="bg-gold text-black text-sm font-semibold px-4 py-2 rounded-full hover:bg-gold-dark transition disabled:opacity-40 disabled:cursor-not-allowed"
              >
                📥 Export CSV
              </button>
            </div>

            {loading ? (
              <div className="py-16 text-center text-muted">Loading...</div>
            ) : messages.length === 0 ? (
              <div className="py-16 text-center text-muted">
                <span className="text-4xl block mb-2">💭</span>
                No messages yet.
              </div>
            ) : (
              <div className="divide-y divide-gray-100">
                {messages.map((m, i) => (
                  <div key={m._id} className="p-5 hover:bg-cream/50 transition">
                    <div className="flex justify-between items-start flex-wrap gap-2 mb-2">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-semibold text-royal">
                          {m.is_anonymous ? 'Anonymous' : m.name || 'Guest'}
                        </span>
                        <span className="text-xs text-muted">#{i + 1}</span>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-xs text-gray-400">
                          {new Date(m.created_at).toLocaleString()}
                        </span>
                        {m.email && (
                          <button
                            onClick={() => copyEmail(m.email, m._id)}
                            className={`text-xs font-semibold px-3 py-1.5 rounded-full transition ${
                              copiedId === m._id
                                ? 'bg-green-100 text-green-700'
                                : 'bg-royal text-white hover:bg-royal-dark'
                            }`}
                          >
                            {copiedId === m._id ? '✓ Copied' : '📧 Copy Email'}
                          </button>
                        )}
                      </div>
                    </div>
                    {m.email && (
                      <p className="text-xs text-muted mb-2 break-all">📧 {m.email}</p>
                    )}
                    <p className="text-muted text-sm leading-relaxed bg-cream/60 rounded-xl p-3 border-l-2 border-gold">
                      {m.message}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}