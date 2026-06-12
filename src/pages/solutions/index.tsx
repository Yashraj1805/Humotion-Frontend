import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageRoot, PageHero, Section, CTABand, ACCENT } from '../../components/layout/PageShell';

const solutions = [
  { id: '01', slug: 'ai',                 title: 'ai solutions',     desc: 'Production-grade ML, NLP, and vision systems engineered for real workloads.',     items: ['machine learning models', 'natural language processing', 'computer vision', 'predictive analytics'] },
  { id: '02', slug: 'it-infrastructure',  title: 'it infrastructure', desc: 'Cloud architecture, system integration, and DevOps — the unglamorous foundation.', items: ['cloud architecture', 'system integration', 'network security', 'devops solutions'] },
  { id: '03', slug: 'data',               title: 'data solutions',   desc: 'From raw events to decision-grade intelligence — engineered end-to-end.',           items: ['data engineering', 'business intelligence', 'real-time analytics', 'data governance'] },
  { id: '04', slug: 'cloud',              title: 'cloud services',   desc: 'Migration, scaling, and cost optimization — done with discipline.',                  items: ['migration strategy', 'scalable architecture', 'performance optimization', 'cost management'] },
];

const Solutions: React.FC = () => (
  <PageRoot>
    <PageHero
      section="03"
      label="solutions"
      eyebrow="ai + infra · end to end"
      titleTop={<>ai <span style={{ color: ACCENT }}>+</span> infra.</>}
      titleBottom="end to end."
      subtitle="Comprehensive technology stacks designed to ship and scale. Pick a pillar or scope a full-stack engagement."
      ctaPrimary={{ to: '/contact', label: 'scope a stack' }}
      ctaSecondary={{ to: '/services', label: 'see services' }}
    />

    <Section section="01" label="pillars">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {solutions.map((s, i) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
          >
            <Link
              to={`/solutions/${s.slug}`}
              className="bg-[#0a0a0a] p-8 flex flex-col group hover:bg-white/[0.025] transition-colors h-full"
            >
              <div className="flex items-start justify-between mb-8">
                <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{s.id}] / pillar</div>
                <span style={{ color: ACCENT }} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
              </div>

              <h3 className="display text-3xl md:text-4xl tracking-tight mb-3 group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
                {s.title}
              </h3>
              <p className="text-base text-white/70 mb-6 max-w-md">{s.desc}</p>

              <ul className="space-y-2 mb-8">
                {s.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 mono text-[11px] uppercase tracking-[0.18em] text-white/65">
                    <span style={{ color: ACCENT }} className="mt-0.5">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto mono text-[11px] uppercase tracking-[0.22em] text-white/85 group-hover:text-white inline-flex items-center gap-2">
                <span className="link-draw">read brief</span>
                <span style={{ color: ACCENT }}>→</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>

    <CTABand
      title={<>need a <span style={{ color: ACCENT }}>full-stack</span> engagement?</>}
      subtitle="We architect, build, and operate. End-to-end, on contract."
      primary={{ to: '/contact', label: 'request a brief' }}
      secondary={{ to: '/mos', label: 'see mos product' }}
    />
  </PageRoot>
);

export default Solutions;
