import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageRoot, PageHero, Section, CTABand, ACCENT } from './PageShell';

export interface SubArea {
  id: string;
  title: string;
  tag: string;
  intro: string;
  bullets: string[];
}

export interface StackEntry {
  k: string;
  v: string;
}

export interface SolutionTemplateProps {
  section: string;
  label: string;
  eyebrow: string;
  titleTop: React.ReactNode;
  titleBottom: React.ReactNode;
  subtitle: React.ReactNode;
  metric: { value: string; label: string }[];
  subAreas: SubArea[];
  stack: StackEntry[];
  useCases: { title: string; desc: string }[];
  ctaTitle: React.ReactNode;
  ctaSubtitle?: React.ReactNode;
  siblings: { label: string; to: string }[];
}

const SolutionTemplate: React.FC<SolutionTemplateProps> = (p) => (
  <PageRoot>
    <PageHero
      section={p.section}
      label={p.label}
      eyebrow={p.eyebrow}
      titleTop={p.titleTop}
      titleBottom={p.titleBottom}
      subtitle={p.subtitle}
      ctaPrimary={{ to: '/contact', label: 'scope this pillar' }}
      ctaSecondary={{ to: '/solutions', label: 'all pillars' }}
      meta={
        <div className="space-y-3">
          {p.metric.map((m) => (
            <div key={m.label}>
              <div className="display text-2xl" style={{ color: ACCENT }}>{m.value}</div>
              <div className="opacity-50 mt-0.5">{m.label}</div>
            </div>
          ))}
        </div>
      }
    />

    {/* SUB-AREAS — the 4 sub-solutions, each as a dedicated section */}
    <Section
      section="01"
      label="sub-areas"
      title={<>four <span style={{ color: ACCENT }}>workstreams.</span></>}
      intro="Every pillar resolves into concrete sub-areas — scoped independently, delivered together."
    >
      <div className="border-t border-white/10">
        {p.subAreas.map((sa, i) => (
          <motion.div
            key={sa.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="grid grid-cols-12 gap-6 border-b border-white/10 py-10 group hover:bg-white/[0.025] transition-colors"
          >
            <div className="col-span-2 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{sa.id}]</div>

            <div className="col-span-10 md:col-span-4">
              <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-60 mb-2">{sa.tag}</div>
              <h3 className="display text-2xl md:text-3xl tracking-tight group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
                {sa.title}
              </h3>
            </div>

            <div className="col-span-12 md:col-span-7">
              <p className="text-base text-white/75 mb-4 max-w-2xl">{sa.intro}</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                {sa.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 mono text-[11px] uppercase tracking-[0.18em] text-white/65">
                    <span style={{ color: ACCENT }} className="mt-0.5">▸</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* STACK */}
    <Section
      section="02"
      label="stack"
      title={<>what we <span style={{ color: ACCENT }}>build on.</span></>}
      intro="No religion about tools — pick what survives production. These are our defaults."
      grid
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {p.stack.map((s, i) => (
          <div key={s.k} className="bg-[#0a0a0a] p-6 hover:bg-white/[0.025] transition-colors">
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-2">[{String(i + 1).padStart(2, '0')}] {s.k}</div>
            <div className="display text-lg tracking-tight text-white/90">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* USE CASES */}
    <Section
      section="03"
      label="patterns"
      title={<>where this <span style={{ color: ACCENT }}>ships.</span></>}
      intro="Concrete patterns we've shipped — or are shipping — across verticals."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
        {p.useCases.map((uc, i) => (
          <motion.div
            key={uc.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="bg-[#0a0a0a] p-6 hover:bg-white/[0.025] transition-colors group"
          >
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-3">
              [0{i + 1}] / case
            </div>
            <h4 className="display text-xl tracking-tight mb-2 group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
              {uc.title}
            </h4>
            <p className="text-sm text-white/70">{uc.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    {/* SIBLING NAV */}
    <section className="bg-[#0a0a0a] border-b border-white/10 py-14">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 items-end mb-8">
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 04</div>
            <div className="mt-1">explore</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-3xl md:text-5xl tracking-tight">
              other <span className="opacity-50">pillars.</span>
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {p.siblings.map((s, i) => (
            <Link
              key={s.to}
              to={s.to}
              className="bg-[#0a0a0a] p-6 group hover:bg-white/[0.03] transition-colors"
            >
              <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-2">// 0{i + 1}</div>
              <div className="display text-2xl tracking-tight group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors flex items-center justify-between">
                {s.label}
                <span style={{ color: ACCENT }} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>

    <CTABand
      title={p.ctaTitle}
      subtitle={p.ctaSubtitle}
      primary={{ to: '/contact', label: 'book a call' }}
      secondary={{ to: '/solutions', label: 'browse pillars' }}
    />
  </PageRoot>
);

export default SolutionTemplate;
