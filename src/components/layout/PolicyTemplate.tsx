import React from 'react';
import { Link } from 'react-router-dom';
import { PageRoot, ACCENT } from './PageShell';

export interface PolicySection {
  heading: string;
  paragraphs: string[];
}

export interface PolicyTemplateProps {
  section: string;
  label: string;
  title: React.ReactNode;
  lastUpdated: string;
  intro: React.ReactNode;
  sections: PolicySection[];
}

const PolicyTemplate: React.FC<PolicyTemplateProps> = ({ section, label, title, lastUpdated, intro, sections }) => (
  <PageRoot>
    <div className="bg-[#0a0a0a] pt-28 pb-16 md:pt-32 md:pb-20 border-b border-white/10 bg-grid">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-50 mb-8 flex flex-wrap items-center gap-4">
          <span>§ {section}</span>
          <span>·</span>
          <span>{label}</span>
          <span>·</span>
          <span>last updated · {lastUpdated}</span>
        </div>
        <h1 className="display text-5xl md:text-7xl tracking-tight leading-[0.95] max-w-4xl">{title}</h1>
        <p className="mt-8 text-lg md:text-xl text-white/70 max-w-3xl">{intro}</p>
      </div>
    </div>

    <div className="bg-[#0a0a0a] py-16 md:py-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-6">
        {/* TOC */}
        <aside className="hidden md:block md:col-span-3">
          <div className="sticky top-28">
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-3 pb-2 border-b border-white/10">// contents</div>
            <ol className="space-y-2">
              {sections.map((s, i) => (
                <li key={s.heading}>
                  <a href={`#sec-${i + 1}`} className="mono text-[11px] uppercase tracking-[0.18em] text-white/55 hover:text-white link-draw">
                    <span className="opacity-50 mr-2">[{String(i + 1).padStart(2, '0')}]</span>
                    {s.heading}
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </aside>

        {/* Body */}
        <div className="col-span-12 md:col-span-9">
          {sections.map((s, i) => (
            <section key={s.heading} id={`sec-${i + 1}`} className="mb-12 scroll-mt-28">
              <div className="flex items-baseline gap-4 mb-4 pb-3 border-b border-white/10">
                <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-50">§ {String(i + 1).padStart(2, '0')}</span>
                <h2 className="display text-2xl md:text-3xl tracking-tight">{s.heading}</h2>
              </div>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-base text-white/80 leading-relaxed mb-4 max-w-2xl">{p}</p>
              ))}
            </section>
          ))}
        </div>
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <Link to="/" className="mono text-[11px] uppercase tracking-[0.22em] text-white/60 hover:text-white link-draw">← back to humotionai</Link>
        <Link
          to="/contact"
          className="mono text-[11px] uppercase tracking-[0.22em] px-5 py-3 text-black inline-flex items-center gap-2 self-start md:self-auto"
          style={{ background: ACCENT }}
        >
          ▶ questions? contact us
        </Link>
      </div>
    </div>
  </PageRoot>
);

export default PolicyTemplate;
