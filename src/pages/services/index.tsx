import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PageRoot, PageHero, Section, CTABand, ACCENT } from '@/components/layout/PageShell';

/**
 * Services overview — rebuilt onto the Humotion design system.
 * (Dark surface, acid-lime accent, mono labels, sharp hairline borders.)
 * The live `/services` route is `pages/Services.tsx`; this file mirrors the
 * same system so the codebase stays fully on-system.
 */

interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  benefits: string[];
  detail: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'ai consulting',
    description: 'Strategic AI solutions and expert guidance grounded in your real business constraints.',
    features: ['AI strategy development', 'Technology assessment', 'Implementation planning', 'ROI analysis'],
    benefits: ['Expert guidance', 'Cost optimization', 'Risk mitigation', 'Competitive advantage'],
    detail: 'Ready to put AI consulting to work? Book a scoping call for a tailored roadmap.',
  },
  {
    id: '02',
    title: 'custom development',
    description: 'Tailored AI systems built for your specific needs — innovation with pragmatism.',
    features: ['Custom AI models', 'API development', 'Integration services', 'Scalable solutions'],
    benefits: ['Tailored solutions', 'Flexible architecture', 'Future-proof design', 'Seamless integration'],
    detail: 'Have a system in mind? Tell us the constraint and we will come back with options.',
  },
  {
    id: '03',
    title: 'process automation',
    description: 'Streamline operations with intelligent automation that adapts to reality.',
    features: ['Workflow automation', 'Task optimization', 'Process monitoring', 'Performance analytics'],
    benefits: ['Increased efficiency', 'Reduced errors', 'Cost savings', '24/7 operation'],
    detail: 'Automate the right lever, not everything. Book a walkthrough of your workflow.',
  },
  {
    id: '04',
    title: 'ai security',
    description: 'Advanced, policy-driven safeguards for every AI surface you ship.',
    features: ['Threat detection', 'Real-time monitoring', 'Vulnerability assessment', 'Security analytics'],
    benefits: ['Enhanced protection', 'Proactive defense', 'Compliance support', 'Risk reduction'],
    detail: 'Hardening an AI product? Start with a red-team and a monitoring baseline.',
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <PageRoot>
      <PageHero
        section="02"
        label="services"
        eyebrow="emotional intelligence · human-ai interaction"
        titleTop={<>our</>}
        titleBottom="services."
        subtitle="Cutting-edge AI services for emotional intelligence and human–AI interaction. Every engagement is contract-first; every deliverable is measurable."
        ctaPrimary={{ to: '/contact', label: 'schedule a demo' }}
        ctaSecondary={{ to: '/solutions', label: 'see solutions' }}
      />

      <Section section="01" label="practice areas" grid>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-line border border-line">
          {services.map((s, i) => {
            const open = active === s.id;
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group bg-surface-0 p-8 flex flex-col"
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{s.id}]</span>
                  <span style={{ color: ACCENT }} className="opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
                </div>

                <h3 className="display text-2xl md:text-3xl tracking-tight mb-3 group-hover:text-[var(--brand)] transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm md:text-base text-ink-muted leading-relaxed mb-8">{s.description}</p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="eyebrow mb-3">// features</div>
                    <ul className="space-y-2">
                      {s.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-ink-muted">
                          <span style={{ color: ACCENT }} className="mt-0.5">›</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="eyebrow mb-3">// benefits</div>
                    <ul className="space-y-2">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-ink-muted">
                          <span style={{ color: ACCENT }} className="mt-0.5">+</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActive(open ? null : s.id)}
                  className="btn btn-outline mt-auto w-full justify-center"
                  aria-expanded={open}
                >
                  {open ? '× hide details' : '▸ learn more'}
                </button>

                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 p-4 panel-raised text-sm text-ink-muted">{s.detail}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <CTABand
        title={<>ready to transform your <span style={{ color: ACCENT }}>business?</span></>}
        subtitle="Tell us the constraint, not the spec — we'll come back with options."
        primary={{ to: '/contact', label: 'schedule a demo' }}
        secondary={{ to: '/about', label: 'who we are' }}
      />

      <div className="sr-only">
        <Link to="/services">canonical services</Link>
      </div>
    </PageRoot>
  );
};

export default Services;
