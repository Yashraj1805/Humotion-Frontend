import React from 'react';
import { Link } from 'react-router-dom';

import { ACCENT } from '@/lib/tokens';
export { ACCENT };

interface PageHeroProps {
  section: string;
  label: string;
  eyebrow?: string;
  titleTop: React.ReactNode;
  titleBottom?: React.ReactNode;
  subtitle?: React.ReactNode;
  meta?: React.ReactNode;
  ctaPrimary?: { to: string; label: string };
  ctaSecondary?: { to: string; label: string };
}

export const PageHero: React.FC<PageHeroProps> = ({
  section,
  label,
  eyebrow,
  titleTop,
  titleBottom,
  subtitle,
  meta,
  ctaPrimary,
  ctaSecondary,
}) => (
  <section className="relative bg-[#0a0a0a] text-white pt-28 pb-20 md:pt-32 md:pb-24 bg-grid overflow-hidden border-b border-white/10">
    <div
      className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-[0.10] blur-[120px] pointer-events-none"
      style={{ background: ACCENT }}
    />
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50 rise rise-1">
          <div>§ {section}</div>
          <div className="mt-1">{label}</div>
        </div>

        <div className="col-span-12 md:col-span-9">
          {eyebrow && (
            <div
              className="inline-flex items-center gap-2 mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border rise rise-1 mb-8"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              <span className="inline-block w-1.5 h-1.5" style={{ background: ACCENT }} />
              {eyebrow}
            </div>
          )}

          <h1 className="display text-[12vw] md:text-[96px] leading-[0.9] rise rise-2">
            {titleTop}
            {titleBottom && (
              <>
                <br />
                <span className="opacity-50">{titleBottom}</span>
              </>
            )}
          </h1>

          {subtitle && (
            <div className="mt-10 text-lg md:text-2xl leading-snug max-w-3xl text-white/80 rise rise-3">
              {subtitle}
            </div>
          )}

          {(ctaPrimary || ctaSecondary) && (
            <div className="mt-12 flex flex-wrap gap-3 items-center rise rise-4">
              {ctaPrimary && (
                <Link
                  to={ctaPrimary.to}
                  className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 text-black transition-transform hover:-translate-y-px"
                  style={{ background: ACCENT }}
                >
                  ▶ {ctaPrimary.label}
                </Link>
              )}
              {ctaSecondary && (
                <Link
                  to={ctaSecondary.to}
                  className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
                >
                  {ctaSecondary.label} →
                </Link>
              )}
            </div>
          )}
        </div>

        {meta && (
          <div className="col-span-12 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] opacity-60 rise rise-5 md:text-right">
            {meta}
          </div>
        )}
      </div>
    </div>
  </section>
);

interface SectionProps {
  section: string;
  label: string;
  title?: React.ReactNode;
  intro?: React.ReactNode;
  children: React.ReactNode;
  grid?: boolean;
}

export const Section: React.FC<SectionProps> = ({ section, label, title, intro, children, grid }) => (
  <section className={`relative bg-[#0a0a0a] text-white py-24 border-b border-white/10 ${grid ? 'bg-grid-fine' : ''}`}>
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-6 mb-12">
        <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
          <div>§ {section}</div>
          <div className="mt-1">{label}</div>
        </div>
        <div className="col-span-12 md:col-span-10">
          {title && <h2 className="display text-4xl md:text-6xl tracking-tight max-w-3xl">{title}</h2>}
          {intro && <p className="mt-5 text-base md:text-lg text-white/70 max-w-2xl">{intro}</p>}
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="hidden md:block md:col-span-2" />
        <div className="col-span-12 md:col-span-10">{children}</div>
      </div>
    </div>
  </section>
);

interface CTABandProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  primary?: { to: string; label: string };
  secondary?: { to: string; label: string };
}

export const CTABand: React.FC<CTABandProps> = ({ title, subtitle, primary, secondary }) => (
  <section className="relative bg-[#0a0a0a] text-white py-20 border-b border-white/10">
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
          <div>§ exec</div>
          <div className="mt-1">act</div>
        </div>
        <div className="col-span-12 md:col-span-10">
          <h2 className="display text-4xl md:text-6xl tracking-tight max-w-3xl">{title}</h2>
          {subtitle && <p className="mt-5 text-base md:text-lg text-white/65 max-w-2xl">{subtitle}</p>}
          <div className="mt-10 flex flex-wrap gap-3 items-center">
            {primary && (
              <Link
                to={primary.to}
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 text-black transition-transform hover:-translate-y-px"
                style={{ background: ACCENT }}
              >
                ▶ {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                to={secondary.to}
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
              >
                {secondary.label} →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export const PageRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-[#0a0a0a] text-[#f2f2f2]">{children}</div>
);
