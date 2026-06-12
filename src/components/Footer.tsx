import React from 'react';
import { Link } from 'react-router-dom';

import { ACCENT } from '@/lib/tokens';

const columns = [
  {
    title: 'products',
    items: [
      { name: 'mos', path: '/mos', badge: 'NEW' },
      { name: 'humo.ai', path: '/humo' },
    ],
  },
  {
    title: 'company',
    items: [
      { name: 'about', path: '/about' },
      { name: 'services', path: '/services' },
      { name: 'solutions', path: '/solutions' },
      { name: 'contact', path: '/contact' },
    ],
  },
  {
    title: 'resources',
    items: [
      { name: 'blog / neural emotions', path: '/blog/NeuralEmotions' },
      { name: 'blog / ai mental health', path: '/blog/AIMentalHealth' },
      { name: 'blog / emotional ai future', path: '/blog/EmotionalAIFuture' },
    ],
  },
  {
    title: 'legal',
    items: [
      { name: 'privacy policy', path: '/privacy-policy' },
      { name: 'terms of service', path: '/terms' },
      { name: 'cookie policy', path: '/cookies' },
    ],
  },
];

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-white/10 mt-0">
      {/* Massive wordmark */}
      <div className="border-b border-white/10 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-50 mb-6">
            // an ai workforce, configured for every business
          </div>
          <div className="display text-[14vw] md:text-[180px] leading-[0.85] tracking-tighter">
            <span>humotionai</span>
            <span style={{ color: ACCENT }}>.</span>
          </div>
        </div>
      </div>

      {/* Columns */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-4">
          <div className="flex items-center gap-3 mb-4">
            <span
              className="inline-block w-2.5 h-2.5"
              style={{ background: ACCENT, boxShadow: '0 0 12px rgba(212,255,0,0.7)' }}
            />
            <span className="display text-2xl">
              humotionai<span style={{ color: ACCENT }}>.</span>
            </span>
          </div>
          <p className="text-sm text-white/60 max-w-sm leading-relaxed">
            Configurable AI workforces for real businesses. Modular agents. Contract-first.
            Same code — every vertical.
          </p>

          <div className="mt-8 mono text-[10px] uppercase tracking-[0.22em] opacity-50 space-y-1">
            <div>$ humotionai --status</div>
            <div className="flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5" style={{ background: ACCENT }} />
              <span>online · phase 1 · {year}</span>
            </div>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="col-span-6 md:col-span-2">
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-4 pb-2 border-b border-white/10">
              // {col.title}
            </div>
            <ul className="space-y-2.5">
              {col.items.map((it) => (
                <li key={it.path}>
                  <Link
                    to={it.path}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                  >
                    <span className="link-draw">{it.name}</span>
                    {('badge' in it && it.badge) ? (
                      <span
                        className="mono text-[9px] tracking-[0.22em] px-1.5 py-0.5 border"
                        style={{ color: ACCENT, borderColor: ACCENT }}
                      >
                        {it.badge}
                      </span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom strip */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row md:items-center md:justify-between gap-3 mono text-[10px] uppercase tracking-[0.22em] opacity-60">
          <span>© {year} Humos AI Pvt Ltd · all rights reserved</span>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span>made with restraint</span>
            <span className="opacity-50">·</span>
            <span>shipping from earth</span>
            <span className="opacity-50">·</span>
            <Link to="/contact" className="hover:text-white link-draw" style={{ color: ACCENT }}>
              ▶ start a conversation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
