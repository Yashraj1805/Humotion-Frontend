import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageRoot, PageHero, Section, CTABand, ACCENT } from '../components/layout/PageShell';

const services = [
  { id: '01', slug: 'ai-consulting',      title: 'ai consulting',      desc: 'Strategic AI roadmaps grounded in your real business constraints — not slide-deck demos.', bullets: ['discovery', 'mapping', 'rollout', 'governance'] },
  { id: '02', slug: 'custom-development', title: 'custom development', desc: 'Bespoke systems that bridge innovation and pragmatism. Built to last.', bullets: ['fastapi', 'contracts', 'agents', 'observability'] },
  { id: '03', slug: 'process-automation', title: 'process automation', desc: 'Operations that automate and adapt — not workflows that break the moment reality hits.', bullets: ['n8n', 'agents', 'humans', 'sla'] },
  { id: '04', slug: 'ai-security',        title: 'ai security',        desc: 'Protect AI surfaces with monitoring, hardening, and policy-driven safeguards.', bullets: ['injection', 'filters', 'pii', 'red-team'] },
];

const Services: React.FC = () => (
  <PageRoot>
    <PageHero
      section="02"
      label="services"
      eyebrow="four practice areas · contract-first"
      titleTop={<>engineering,</>}
      titleBottom="not promises."
      subtitle="Every engagement is contract-first. Every deliverable is measurable. Pick a practice area below or talk to us directly."
      ctaPrimary={{ to: '/contact', label: 'scope a project' }}
      ctaSecondary={{ to: '/solutions', label: 'see solutions' }}
    />

    <Section section="01" label="practice areas">
      <div className="border-t border-white/10">
        {services.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            className="group border-b border-white/10"
          >
            <Link to={`/services/${s.slug}`} className="grid grid-cols-12 gap-6 py-10 hover:bg-white/[0.025] transition-colors">
              <div className="col-span-2 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{s.id}]</div>
              <div className="col-span-10 md:col-span-3">
                <h3 className="display text-2xl md:text-4xl tracking-tight group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
                  {s.title}
                </h3>
              </div>
              <div className="col-span-12 md:col-span-5 text-base text-white/70 max-w-xl">{s.desc}</div>
              <div className="col-span-12 md:col-span-2 flex flex-wrap gap-1.5">
                {s.bullets.slice(0, 3).map((b) => (
                  <span key={b} className="mono text-[9px] uppercase tracking-[0.18em] px-1.5 py-0.5 border border-white/15 text-white/55">
                    {b}
                  </span>
                ))}
              </div>
              <div className="col-span-12 md:col-span-1 flex md:justify-end items-start">
                <span style={{ color: ACCENT }} className="text-2xl group-hover:translate-x-1 transition-transform inline-block">→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section
      section="02"
      label="process"
      title={<>how we <span style={{ color: ACCENT }}>operate.</span></>}
      intro="No surprise deliverables. No expanding scope. No ghost handoffs."
      grid
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-white/10 border border-white/10">
        {[
          { k: 'DISCOVER', d: 'Map current state. Find the lever.' },
          { k: 'CONTRACT', d: 'Freeze schemas + scope upfront.' },
          { k: 'BUILD',    d: 'Vertical slices. Demo weekly.' },
          { k: 'TEST',     d: 'Real data. Real users. Real edges.' },
          { k: 'HANDOFF',  d: 'Docs, runbooks, observability.' },
        ].map((p, i) => (
          <div key={p.k} className="bg-[#0a0a0a] p-6">
            <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-2">step 0{i + 1}</div>
            <div className="display text-xl tracking-tight mb-2" style={{ color: ACCENT }}>{p.k}</div>
            <div className="text-sm text-white/70">{p.d}</div>
          </div>
        ))}
      </div>
    </Section>

    <CTABand
      title={<>have a problem to <span style={{ color: ACCENT }}>solve?</span></>}
      subtitle="Tell us the constraint, not the spec. We'll come back with options."
      primary={{ to: '/contact', label: 'book a scoping call' }}
      secondary={{ to: '/about', label: 'who we are' }}
    />
  </PageRoot>
);

export default Services;
