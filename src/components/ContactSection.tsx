import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import axios from 'axios';

import { ACCENT } from '@/lib/tokens';

const emotions = [
  { emoji: '😊', label: 'happy' },
  { emoji: '😔', label: 'sad' },
  { emoji: '😡', label: 'angry' },
  { emoji: '😌', label: 'calm' },
  { emoji: '🤔', label: 'curious' },
];

const contactInfo = [
  { label: 'email',   value: 'Founder@humotionai.com',                                  href: 'mailto:Founder@humotionai.com' },
  { label: 'phone',   value: '+91 8700 829 517',                                        href: 'tel:+918700829517' },
  { label: 'office',  value: 'B2 704, SCC Heights, Raj Nagar Ext, Ghaziabad, India',    href: '#' },
];

const ContactSection: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return setStatus({ type: 'error', message: 'all fields required.' });
    }
    if (!selectedEmotion) {
      return setStatus({ type: 'error', message: 'select your current state.' });
    }
    setLoading(true);
    setStatus({ type: null, message: '' });
    try {
      const response = await axios.post('https://backend-server-5mwr.onrender.com/api/createFeedback', {
        ...formData,
        mood: emotions.find((em) => em.emoji === selectedEmotion)?.label,
        timestamp: new Date().toISOString(),
      });
      if (response.status === 200 || response.status === 201) {
        setStatus({ type: 'success', message: 'transmission received. we will reply soon.' });
        setFormData({ name: '', email: '', message: '' });
        setSelectedEmotion(null);
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setStatus({ type: 'error', message: err.response?.data?.message || 'transmission failed. retry.' });
      } else {
        setStatus({ type: 'error', message: 'unexpected error. retry.' });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative bg-[#0a0a0a] text-white py-24 border-b border-white/10 bg-grid-fine">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 05</div>
            <div className="mt-1">contact</div>
          </div>

          {/* Left: pitch + info */}
          <div className="col-span-12 md:col-span-5">
            <h2 className="display text-5xl md:text-7xl tracking-tight">
              start a<br />
              <span style={{ color: ACCENT }}>conversation.</span>
            </h2>
            <p className="mt-6 text-lg text-white/70 max-w-md">
              Whether you're scoping a pilot or hiring an AI workforce — drop a line.
              We respond fast. Engineering reads every message.
            </p>

            <div className="mt-12 border-t border-white/10">
              {contactInfo.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="group flex items-baseline justify-between gap-4 py-5 border-b border-white/10 hover:bg-white/[0.025] transition-colors px-1"
                >
                  <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 w-20 shrink-0">{c.label}</div>
                  <div className="text-base md:text-lg text-white/85 group-hover:text-white text-right">
                    {c.value}
                  </div>
                  <span style={{ color: ACCENT }} className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div className="col-span-12 md:col-span-5">
            <div className="border border-white/15 bg-black/40">
              <div className="px-5 py-3 mono text-[10px] uppercase tracking-[0.22em] opacity-60 border-b border-white/10 flex items-center justify-between">
                <span>~/humotionai/contact</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                </span>
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-8">
                  <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-3">
                    // state.now
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {emotions.map((em) => {
                      const active = selectedEmotion === em.emoji;
                      return (
                        <motion.button
                          key={em.label}
                          whileHover={{ y: -2 }}
                          whileTap={{ scale: 0.95 }}
                          type="button"
                          onClick={() => setSelectedEmotion(em.emoji)}
                          className={`flex items-center gap-2 px-3 py-2 border transition-colors ${
                            active ? 'text-black' : 'text-white/70 border-white/20 hover:border-white/40'
                          }`}
                          style={active ? { background: ACCENT, borderColor: ACCENT } : {}}
                        >
                          <span className="text-base">{em.emoji}</span>
                          <span className="mono text-[10px] uppercase tracking-[0.22em]">{em.label}</span>
                        </motion.button>
                      );
                    })}
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {[
                    { name: 'name',    label: 'name',    type: 'text',  placeholder: 'your name' },
                    { name: 'email',   label: 'email',   type: 'email', placeholder: 'you@domain.com' },
                  ].map((f) => (
                    <div key={f.name}>
                      <label className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2 block">
                        // {f.label}
                      </label>
                      <input
                        name={f.name}
                        type={f.type}
                        value={(formData as any)[f.name]}
                        onChange={handleInputChange}
                        disabled={loading}
                        placeholder={f.placeholder}
                        className="w-full bg-transparent border border-white/15 focus:border-[var(--mos-accent,#d4ff00)] outline-none px-4 py-3 text-white placeholder-white/30 transition-colors"
                      />
                    </div>
                  ))}

                  <div>
                    <label className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2 block">
                      // message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      disabled={loading}
                      placeholder="what are you building?"
                      rows={4}
                      className="w-full bg-transparent border border-white/15 focus:border-[var(--mos-accent,#d4ff00)] outline-none px-4 py-3 text-white placeholder-white/30 resize-none transition-colors"
                    />
                  </div>

                  {status.type && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`px-4 py-3 mono text-[11px] uppercase tracking-[0.22em] border ${
                        status.type === 'success'
                          ? 'border-[color:var(--mos-accent,#d4ff00)] text-[color:var(--mos-accent,#d4ff00)]'
                          : 'border-red-400/40 text-red-300'
                      }`}
                    >
                      {status.type === 'success' ? '✓' : '!'} {status.message}
                    </motion.div>
                  )}

                  <motion.button
                    type="submit"
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    className="w-full py-4 px-6 mono text-[11px] uppercase tracking-[0.22em] text-black flex items-center justify-center gap-2 disabled:opacity-60"
                    style={{ background: ACCENT }}
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        sending<span className="caret">_</span>
                      </>
                    ) : (
                      <>▶ transmit message</>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
