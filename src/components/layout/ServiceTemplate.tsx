import React from 'react';
import { motion } from 'framer-motion';
import { PageRoot, PageHero, Section, CTABand, ACCENT } from './PageShell';

export interface ServiceDetailProps {
  section: string;
  label: string;
  eyebrow: string;
  titleTop: React.ReactNode;
  titleBottom: React.ReactNode;
  subtitle: React.ReactNode;
  deliverables: { id: string; title: string; desc: string }[];
  process: { k: string; d: string }[];
  ctaTitle: React.ReactNode;
  ctaSubtitle?: React.ReactNode;
}

const ServiceTemplate: React.FC<ServiceDetailProps> = (p) => (
  <PageRoot>
    <PageHero
      section={p.section}
      label={p.label}
      eyebrow={p.eyebrow}
      titleTop={p.titleTop}
      titleBottom={p.titleBottom}
      subtitle={p.subtitle}
      ctaPrimary={{ to: '/contact', label: 'scope this engagement' }}
      ctaSecondary={{ to: '/services', label: 'all services' }}
    />

    <Section
      section="01"
      label="deliverables"
      title={<>what you <span style={{ color: ACCENT }}>get.</span></>}
      intro="No vague outputs. Every engagement ships these artefacts."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {p.deliverables.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="bg-[#0a0a0a] p-8 hover:bg-white/[0.025] transition-colors group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50">[{d.id}] / deliverable</div>
              <span style={{ color: ACCENT }} className="opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
            </div>
            <h3 className="display text-2xl tracking-tight mb-3 group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
              {d.title}
            </h3>
            <p className="text-sm text-white/70">{d.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section
      section="02"
      label="process"
      title={<>how it <span style={{ color: ACCENT }}>runs.</span></>}
      grid
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
        {p.process.map((s, i) => (
          <div key={s.k} className="bg-[#0a0a0a] p-6">
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-2">step 0{i + 1}</div>
            <div className="display text-xl tracking-tight mb-2" style={{ color: ACCENT }}>{s.k}</div>
            <div className="text-sm text-white/70">{s.d}</div>
          </div>
        ))}
      </div>
    </Section>

    <CTABand
      title={p.ctaTitle}
      subtitle={p.ctaSubtitle}
      primary={{ to: '/contact', label: 'book a call' }}
      secondary={{ to: '/services', label: 'browse services' }}
    />
  </PageRoot>
);

export default ServiceTemplate;
