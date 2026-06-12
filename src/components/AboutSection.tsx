import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { ACCENT } from '@/lib/tokens';

const values = [
  { k: 'HUMAN', v: 'Tech that amplifies human judgment — never tries to replace it.' },
  { k: 'RESULTS', v: 'Measurable outcomes per engagement. Vanity metrics get cut from the deck.' },
  { k: 'PIONEER', v: 'Set the standard, then publish it. Closed knowledge ages badly.' },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative bg-[#0a0a0a] text-white py-28 border-b border-white/10 overflow-hidden">
      <div
        className="absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.08] blur-[120px] pointer-events-none"
        style={{ background: ACCENT }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 04</div>
            <div className="mt-1">about</div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <h2 className="display text-5xl md:text-7xl tracking-tight">
              We're <span style={{ color: ACCENT }}>builders.</span><br />
              <span className="opacity-50">Not consultants.</span>
            </h2>

            <p className="mt-10 text-lg md:text-2xl leading-snug text-white/80 max-w-2xl">
              Humotionai was founded on a single conviction —{' '}
              <span className="serif-italic text-white">AI should ship.</span>{' '}
              We build emotionally aware products and configurable agent systems for
              businesses that need real outcomes, not slideware.
            </p>

            <p className="mt-6 text-base md:text-lg text-white/60 max-w-2xl">
              Every engagement is contract-first. Every agent is modular. Every config is
              version-controlled. Our work is auditable, replaceable, and unapologetically engineered.
            </p>

            <div className="mt-12 flex items-center gap-3">
              <Link
                to="/about"
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 text-black transition-transform hover:-translate-y-px"
                style={{ background: ACCENT }}
              >
                ▶ our story
              </Link>
              <Link
                to="/services"
                className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 border border-white/25 hover:border-white text-white/80 hover:text-white transition-colors"
              >
                what we do →
              </Link>
            </div>
          </div>

          <div className="col-span-12 md:col-span-3 md:mt-4">
            <div className="border border-white/15">
              <div className="px-4 py-2 mono text-[10px] uppercase tracking-[0.22em] opacity-60 border-b border-white/10">
                // operating values
              </div>
              {values.map((v, i) => (
                <motion.div
                  key={v.k}
                  initial={{ opacity: 0, x: 12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="px-4 py-5 border-b border-white/10 last:border-b-0"
                >
                  <div
                    className="display text-2xl tracking-tight mb-1"
                    style={{ color: ACCENT }}
                  >
                    {v.k}.
                  </div>
                  <div className="text-sm text-white/70 leading-relaxed">{v.v}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
