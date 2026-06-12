import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ACCENT } from '@/lib/tokens';

const solutions = [
  {
    id: '01',
    slug: 'ai',
    category: 'ai solutions',
    items: ['Machine learning models', 'Natural language processing', 'Computer vision systems', 'Predictive analytics'],
  },
  {
    id: '02',
    slug: 'it-infrastructure',
    category: 'it infrastructure',
    items: ['Cloud architecture', 'System integration', 'Network security', 'DevOps solutions'],
  },
  {
    id: '03',
    slug: 'data',
    category: 'data solutions',
    items: ['Data engineering', 'Business intelligence', 'Real-time analytics', 'Data governance'],
  },
  {
    id: '04',
    slug: 'cloud',
    category: 'cloud services',
    items: ['Migration strategy', 'Scalable architecture', 'Performance optimization', 'Cost management'],
  },
];

const SolutionsSection: React.FC = () => {
  return (
    <section id="solutions" className="relative bg-[#0a0a0a] text-white py-24 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 03</div>
            <div className="mt-1">solutions</div>
          </div>
          <div className="col-span-12 md:col-span-10">
            <h2 className="display text-5xl md:text-7xl tracking-tight max-w-4xl">
              ai <span style={{ color: ACCENT }}>+</span> infra.<br />
              <span className="opacity-50">end to end.</span>
            </h2>
            <p className="mt-6 text-lg md:text-xl text-white/70 max-w-2xl">
              Comprehensive technology stacks — combining AI with robust IT — designed to ship and scale.
            </p>
          </div>
        </div>

        <div className="border border-white/10">
          {solutions.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="border-b border-white/10 last:border-b-0"
            >
              <Link
                to={`/solutions/${s.slug}`}
                className="grid grid-cols-12 gap-6 py-8 px-6 group hover:bg-white/[0.025] transition-colors"
              >
                <div className="col-span-2 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{s.id}]</div>
                <div className="col-span-10 md:col-span-4">
                  <h3 className="display text-2xl md:text-3xl tracking-tight group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors">
                    {s.category}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                        <span style={{ color: ACCENT }} className="mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-span-12 md:col-span-1 flex md:justify-end items-start">
                  <span
                    style={{ color: ACCENT }}
                    className="text-2xl opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all inline-block"
                  >
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 flex items-center gap-3">
          <Link
            to="/solutions"
            className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 text-black transition-transform hover:-translate-y-px"
            style={{ background: ACCENT }}
          >
            ▶ explore all solutions
          </Link>
          <Link
            to="/contact"
            className="mono text-[11px] uppercase tracking-[0.22em] px-2 py-4 text-white/60 hover:text-white link-draw"
          >
            or talk to engineering
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
