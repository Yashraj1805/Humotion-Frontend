import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Counter from './common/Counter';

import { ACCENT } from '@/lib/tokens';

const ROTATING = [
  'analyze leads.',
  'qualify intent.',
  'handle objections.',
  'log every word.',
  'report to managers.',
];

const HeroSection: React.FC = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % ROTATING.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] text-[#f2f2f2] pt-28 pb-20 md:pt-32 md:pb-28 bg-grid overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]" />
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
        style={{ background: ACCENT }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-12 gap-6">
          {/* Left rail */}
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50 rise rise-1">
            <div>§ 00</div>
            <div className="mt-1">overview</div>
            <div className="mt-12 hidden md:block">
              <div className="opacity-30">scroll</div>
              <div className="mt-2 w-px h-24 bg-white/15" />
            </div>
          </div>

          {/* Center: headline */}
          <div className="col-span-12 md:col-span-7">
            <div
              className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border rise rise-1"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              <span className="inline-block w-1.5 h-1.5" style={{ background: ACCENT }} />
              ai workforce · live · build 0.1.0
            </div>

            <h1 className="display text-[14vw] md:text-[112px] mt-8 rise rise-2">
              we build<br />
              <span className="serif-italic font-normal opacity-90">ai that</span>{' '}
              <span style={{ color: ACCENT }}>works.</span>
            </h1>

            <div className="mt-10 grid grid-cols-12 gap-6 items-end rise rise-3">
              <p className="col-span-12 md:col-span-8 text-lg md:text-2xl leading-snug max-w-2xl text-white/80">
                Humotionai ships configurable AI agents for real businesses.
                <span className="text-white"> One codebase.</span>{' '}
                <span className="text-white/60">Every vertical.</span>{' '}
                Watch them{' '}
                <span
                  className="inline-block mono align-middle border-b"
                  style={{ borderColor: ACCENT, color: ACCENT }}
                  key={idx}
                >
                  {ROTATING[idx]}
                </span>
              </p>

              <div className="col-span-12 md:col-span-4 mono text-[11px] uppercase tracking-[0.22em] opacity-60">
                <div className="opacity-50">// products</div>
                <div className="mt-2 text-white">2 shipping</div>
                <div className="mt-1 text-white/60">6 verticals</div>
              </div>
            </div>

            <div className="mt-14 flex flex-wrap gap-3 items-center rise rise-4">
              <Link
                to="/mos"
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 text-black transition-transform hover:-translate-y-px"
                style={{ background: ACCENT }}
              >
                ▶ explore mos
              </Link>
              <Link
                to="/humo"
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
              >
                meet humo.ai →
              </Link>
              <Link
                to="/contact"
                className="mono text-[11px] uppercase tracking-[0.22em] px-2 py-4 text-white/55 hover:text-white link-draw"
              >
                or schedule a walk-through
              </Link>
            </div>
          </div>

          {/* Right: stats card */}
          <div className="col-span-12 md:col-span-3 md:mt-16 rise rise-5">
            <div className="border border-white/15 bg-black/40 backdrop-blur-sm">
              <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 mono text-[10px] uppercase tracking-[0.22em] opacity-60">
                <span>~/humotionai</span>
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
                  <span className="w-1.5 h-1.5 rounded-full" style={{ background: ACCENT }} />
                </span>
              </div>
              <div className="p-5 space-y-5">
                {[
                  { k: '01', label: 'agents shipping', value: '4', unit: 'modular' },
                  { k: '02', label: 'verticals',       value: '6', unit: 'configured' },
                  { k: '03', label: 'time-to-deploy',  value: '7d', unit: 'avg.' },
                  { k: '04', label: 'codebase',        value: '1',  unit: 'shared' },
                ].map((s) => (
                  <div key={s.k} className="flex items-baseline justify-between border-b border-white/5 pb-3 last:border-0 last:pb-0">
                    <div>
                      <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-40">[{s.k}] {s.label}</div>
                    </div>
                    <div className="text-right">
                      <Counter to={s.value} className="display text-3xl" style={{ color: ACCENT }} />
                      <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 ml-2">{s.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-white/10 px-4 py-2 mono text-[10px] uppercase tracking-[0.22em] opacity-50">
                $ humotionai --status<span className="caret">_</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-20 border-t border-b border-white/10 overflow-hidden">
        <div className="marquee-track py-5">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-12 px-6 mono text-[11px] uppercase tracking-[0.32em] opacity-50 whitespace-nowrap">
              <span>coaching</span>
              <span style={{ color: ACCENT }}>◢</span>
              <span>real estate</span>
              <span style={{ color: ACCENT }}>◢</span>
              <span>d2c</span>
              <span style={{ color: ACCENT }}>◢</span>
              <span>saas</span>
              <span style={{ color: ACCENT }}>◢</span>
              <span>healthcare</span>
              <span style={{ color: ACCENT }}>◢</span>
              <span>services</span>
              <span style={{ color: ACCENT }}>◢</span>
              <span>fintech</span>
              <span style={{ color: ACCENT }}>◢</span>
              <span>edtech</span>
              <span style={{ color: ACCENT }}>◢</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
