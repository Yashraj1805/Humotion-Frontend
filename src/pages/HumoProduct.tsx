import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ACCENT } from '@/lib/tokens';

const features = [
  { id: '01', name: 'emotion engine',  role: 'voice tone analysis · real-time',
    detail: 'Reads prosodic, spectral, and temporal features from your voice. Detects emotional state without you having to say it.' },
  { id: '02', name: 'voice journaling', role: 'adaptive · empathetic',
    detail: 'Journals that respond to your tone — not just your words. Patterns surface over weeks, not minutes.' },
  { id: '03', name: 'memory graph',    role: 'long-term · contextual',
    detail: 'Learns what matters to you across sessions. Every interaction becomes more meaningful — never starts from zero.' },
  { id: '04', name: 'voice cloning',   role: 'trusted · familiar',
    detail: 'Speak with — and hear back in — the voices you trust. Genuine emotional connection, not synthetic neutrality.' },
];

const steps = [
  ['01', 'voice.in',     'You speak naturally. Humo listens — to tone, not just words.'],
  ['02', 'state.detect', 'Real-time analysis surfaces what you\'re actually feeling.'],
  ['03', 'memory.fetch', 'Context from prior sessions threads itself in.'],
  ['04', 'reply.empathic', 'Response with understanding — calibrated, not canned.'],
];

const Equalizer = () => {
  const bars = Array.from({ length: 24 });
  return (
    <div className="flex items-end gap-1 h-20">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1"
          style={{ background: ACCENT }}
          animate={{ height: [`${20 + (i % 5) * 8}%`, `${50 + (i % 7) * 6}%`, `${20 + (i % 5) * 8}%`] }}
          transition={{ duration: 1.2 + (i % 4) * 0.2, repeat: Infinity, ease: 'easeInOut', delay: i * 0.05 }}
        />
      ))}
    </div>
  );
};

const HumoProduct: React.FC = () => {
  const [mood, setMood] = useState(0);
  const moods = ['calm', 'curious', 'stressed', 'joyful', 'reflective'];
  useEffect(() => {
    const t = setInterval(() => setMood((m) => (m + 1) % moods.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div
      className="min-h-screen pt-16 bg-[#0a0a0a] text-[#f2f2f2] font-mono selection:bg-[#d4ff00] selection:text-black bg-grid"
    >
      {/* Status strip */}
      <div className="border-b border-white/15 text-[11px] tracking-[0.18em] uppercase">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <span className="opacity-70">humo // emotionally intelligent ai companion</span>
          <span className="flex items-center gap-2 opacity-70">
            <span className="inline-block w-2 h-2" style={{ background: ACCENT }} />
            shipping · {new Date().toISOString().slice(0, 10)}
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 00</div>
            <div className="mt-1">companion</div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div
              className="inline-block border px-2 py-1 text-[10px] tracking-[0.22em] uppercase mb-8"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              ◢ shipping
            </div>

            <h1 className="text-[14vw] md:text-[110px] leading-[0.85] font-extrabold tracking-tighter">
              humo<span style={{ color: ACCENT }}>.</span>ai
            </h1>

            <p className="mt-8 text-lg md:text-2xl max-w-2xl leading-snug font-sans">
              An AI companion that <span style={{ color: ACCENT }}>understands</span> how you feel —
              not just what you say. Voice in. Tone out. Memory that lasts.
            </p>

            <div className="mt-6 mono text-[11px] uppercase tracking-[0.22em] opacity-70">
              <span className="opacity-50">// current state // </span>
              <motion.span
                key={mood}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ color: ACCENT }}
              >
                {moods[mood]}
              </motion.span>
            </div>

            <div className="mt-12 flex flex-wrap gap-3 items-center">
              <Link
                to="/register"
                className="group inline-flex items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.22em] text-black"
                style={{ background: ACCENT }}
              >
                <span>▶</span>
                get started free
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white px-6 py-4 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
              >
                schedule demo →
              </Link>
              <Link
                to="/mos"
                className="inline-flex items-center gap-3 border border-white/15 hover:border-white/40 px-6 py-4 text-xs uppercase tracking-[0.22em] text-white/60 hover:text-white transition-colors"
              >
                see mos →
              </Link>
            </div>
          </div>

          {/* Equalizer panel */}
          <div className="col-span-12 md:col-span-3 md:mt-12">
            <div className="border border-white/15 bg-black/60">
              <div className="flex items-center justify-between border-b border-white/10 px-3 py-2 text-[10px] uppercase tracking-[0.22em] opacity-70">
                <span>~/humo/listen</span>
                <span>● rec</span>
              </div>
              <div className="p-6">
                <Equalizer />
                <div className="mt-4 mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                  signal · prosody · spectral
                </div>
                <div className="mt-1 mono text-[10px] uppercase tracking-[0.22em] opacity-50">
                  detection confidence · 0.94
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 01</div>
            <div className="mt-1">features</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-3xl font-sans">
              four engines. <span className="opacity-50">one companion.</span>
            </h2>

            <div className="border-t border-white/15">
              {features.map((f) => (
                <motion.div
                  key={f.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.3 }}
                  className="group grid grid-cols-12 gap-6 border-b border-white/15 py-6 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="col-span-2 md:col-span-1 text-xs opacity-50">[{f.id}]</div>
                  <div className="col-span-10 md:col-span-3">
                    <div className="text-lg md:text-xl font-semibold tracking-tight font-sans">{f.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.22em] opacity-50 mt-1">{f.role}</div>
                  </div>
                  <div className="col-span-12 md:col-span-7 text-sm md:text-base opacity-80 group-hover:opacity-100 font-sans">
                    {f.detail}
                  </div>
                  <div className="hidden md:flex col-span-1 justify-end items-start">
                    <span style={{ color: ACCENT }} className="opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 02</div>
            <div className="mt-1">flow</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-3xl font-sans">
              voice <span className="opacity-50">→</span> tone <span className="opacity-50">→</span> reply.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-white/15 border border-white/15">
              {steps.map(([k, name, d]) => (
                <div key={k} className="bg-[#0a0a0a] p-5">
                  <div className="text-[10px] opacity-50 tracking-[0.22em] uppercase mb-2">step {k}</div>
                  <div className="text-sm" style={{ color: ACCENT }}>{name}</div>
                  <div className="text-xs opacity-60 mt-2 font-sans">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 03</div>
            <div className="mt-1">premise</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <p className="font-sans text-3xl md:text-5xl leading-tight max-w-4xl">
              <span className="serif-italic opacity-70">"Most AI</span> answers what you say.{' '}
              <span style={{ color: ACCENT }}>Humo</span> hears how you say it —
              <span className="opacity-50"> and remembers.</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 04</div>
            <div className="mt-1">begin</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="text-xs uppercase tracking-[0.22em] opacity-60 mb-4">$ humo --listen --remember</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-4xl font-sans">
              ready to be <span style={{ color: ACCENT }}>heard?</span>
            </h2>

            <div className="mt-12 flex flex-wrap gap-3 items-center">
              <Link
                to="/register"
                className="inline-flex items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.22em] font-semibold text-black"
                style={{ background: ACCENT }}
              >
                ▶ start free
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white px-6 py-4 text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white transition-colors"
              >
                schedule demo →
              </Link>
            </div>

            <div className="mt-16 text-[10px] uppercase tracking-[0.22em] opacity-40">
              // end of document · humo.ai · humotionai.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumoProduct;
