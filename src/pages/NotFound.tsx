import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { ACCENT } from '@/lib/tokens';

const NotFound: React.FC = () => {
  const location = useLocation();
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    console.error('404 · route not found:', location.pathname);
    const t = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 120);
    }, 2400);
    return () => clearInterval(t);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white bg-grid pt-28 pb-20 flex items-center">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-12 gap-6">
          <div className="hidden md:block md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ error</div>
            <div className="mt-1">not found</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div
              className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border mb-8"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              <span className="inline-block w-1.5 h-1.5" style={{ background: ACCENT }} />
              status · 404
            </div>

            <h1
              className={`display text-[28vw] md:text-[280px] leading-[0.85] tracking-tighter transition-transform ${glitch ? 'translate-x-1' : ''}`}
              style={{ color: 'transparent', WebkitTextStroke: '2px #f2f2f2' }}
            >
              404<span style={{ color: ACCENT, WebkitTextStroke: '0' }}>.</span>
            </h1>

            <div className="mt-10 max-w-2xl">
              <p className="text-xl md:text-3xl text-white leading-snug">
                this page <span className="serif-italic opacity-70">does not exist —</span>{' '}
                <span style={{ color: ACCENT }}>yet.</span>
              </p>
              <div className="mt-4 mono text-[11px] uppercase tracking-[0.22em] text-white/55">
                $ humotionai --route <span className="text-white">{location.pathname}</span> <span style={{ color: ACCENT }}>→ E_NOT_FOUND</span>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10 max-w-3xl">
              {[
                { to: '/', label: 'index',    note: 'start over' },
                { to: '/mos', label: 'mos',     note: 'multi-agent os' },
                { to: '/humo', label: 'humo.ai', note: 'companion' },
              ].map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="bg-[#0a0a0a] p-5 hover:bg-white/[0.03] group transition-colors"
                >
                  <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-2">// {l.note}</div>
                  <div className="display text-2xl tracking-tight group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
                    {l.label}<span style={{ color: ACCENT }}>.</span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                to="/"
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 text-black"
                style={{ background: ACCENT }}
              >
                ▶ back to home
              </Link>
              <Link
                to="/contact"
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
              >
                report broken link →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
