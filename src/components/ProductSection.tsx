import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ACCENT } from '@/lib/tokens';

const products = [
  {
    id: '01',
    name: 'mos',
    full: 'multi-agent operating system',
    tagline: 'Plug in the business — get analytics, sales, support, and reporting agents running on the same code.',
    accent: true,
    badge: 'NEW · PHASE 1',
    path: '/mos',
    bullets: [
      'config-driven · same binary for every vertical',
      'four agents · analytics · sales · support · manager',
      'orchestrator-routed · full conversation logging',
    ],
  },
  {
    id: '02',
    name: 'humo.ai',
    full: 'emotionally intelligent companion',
    tagline: 'Real-time emotion detection from voice tone. Empathetic responses that actually understand you.',
    accent: false,
    badge: 'SHIPPING',
    path: '/humo',
    bullets: [
      'emotion engine · prosodic + spectral analysis',
      'voice journaling · adaptive memory graph',
      'voice cloning · familiar trusted voices',
    ],
  },
];

const ProductSection: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 01</div>
            <div className="mt-1">products</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-5xl md:text-7xl tracking-tight max-w-3xl">
              Two products.{' '}
              <span className="opacity-50">One thesis.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
              We don't build chatbots. We build AI workforces — modular, contract-driven, and configurable for every business we touch.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-[#0a0a0a] p-8 md:p-10 flex flex-col group hover:bg-white/[0.02] transition-colors"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-50">
                  [{p.id}] / product
                </div>
                <div
                  className="mono text-[9px] tracking-[0.22em] uppercase px-2 py-1 border"
                  style={{
                    color: p.accent ? ACCENT : 'rgba(255,255,255,0.6)',
                    borderColor: p.accent ? ACCENT : 'rgba(255,255,255,0.2)',
                  }}
                >
                  {p.badge}
                </div>
              </div>

              <h3
                className="display text-6xl md:text-8xl mb-3"
                style={p.accent ? { color: ACCENT } : {}}
              >
                {p.name}
              </h3>
              <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-60 mb-6">
                {p.full}
              </div>

              <p className="text-base md:text-lg text-white/75 mb-8 max-w-md">
                {p.tagline}
              </p>

              <ul className="space-y-2 mb-10 mono text-[12px] uppercase tracking-[0.12em]">
                {p.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 opacity-70">
                    <span style={{ color: ACCENT }} className="mt-0.5">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-center gap-3">
                <Link
                  to={p.path}
                  className={`mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 transition-transform hover:-translate-y-px ${
                    p.accent ? 'text-black' : 'border border-white/30 hover:border-white text-white'
                  }`}
                  style={p.accent ? { background: ACCENT } : {}}
                >
                  ▶ explore {p.name}
                </Link>
                <Link
                  to="/contact"
                  className="mono text-[11px] uppercase tracking-[0.22em] text-white/50 hover:text-white link-draw"
                >
                  request demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
