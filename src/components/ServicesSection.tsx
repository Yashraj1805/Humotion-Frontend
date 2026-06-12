import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ACCENT } from '@/lib/tokens';

const services = [
  {
    id: '01',
    title: 'ai consulting',
    description: 'Strategic AI roadmaps grounded in your real business constraints, not slide-deck demos.',
    link: '/services/ai-consulting',
    tags: ['discovery', 'strategy', 'roadmap'],
  },
  {
    id: '02',
    title: 'custom development',
    description: 'Bespoke systems that bridge the gap between innovation and pragmatism — built to last.',
    link: '/services/custom-development',
    tags: ['systems', 'apis', 'integrations'],
  },
  {
    id: '03',
    title: 'process automation',
    description: 'Operations that automate and adapt — not workflows that break the moment reality hits.',
    link: '/services/process-automation',
    tags: ['n8n', 'pipelines', 'agents'],
  },
  {
    id: '04',
    title: 'ai security',
    description: 'Protect AI surfaces with monitoring, hardening, and policy-driven safeguards.',
    link: '/services/ai-security',
    tags: ['hardening', 'audit', 'monitoring'],
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative bg-[#0a0a0a] text-white py-24 border-b border-white/10 bg-grid-fine">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 02</div>
            <div className="mt-1">services</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-5xl md:text-7xl tracking-tight max-w-3xl">
              Engineering, <span className="opacity-50">not promises.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
              Four practice areas — every engagement contract-first, every deliverable measurable.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {services.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group bg-[#0a0a0a] p-8 flex flex-col hover:bg-white/[0.025] transition-colors"
            >
              <div className="flex items-start justify-between mb-12">
                <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{s.id}]</div>
                <span style={{ color: ACCENT }} className="opacity-0 group-hover:opacity-100 transition-opacity">▸</span>
              </div>

              <h3 className="display text-2xl md:text-3xl tracking-tight mb-4 group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
                {s.title}
              </h3>
              <p className="text-sm md:text-base text-white/70 leading-relaxed mb-6">
                {s.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {s.tags.map((t) => (
                  <span key={t} className="mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border border-white/15 text-white/60">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                to={s.link}
                className="mt-auto mono text-[11px] uppercase tracking-[0.22em] text-white/80 hover:text-white inline-flex items-center gap-2"
              >
                <span className="link-draw">read brief</span>
                <span style={{ color: ACCENT }}>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
