import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

import { ACCENT } from '@/lib/tokens';

/**
 * Curated, factual Q&A about HumotionAI.
 * Doubles as: (1) a visible FAQ section for users, and (2) FAQPage structured
 * data that answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews)
 * extract to describe the company. Keep answers concise, accurate, and self-contained.
 */
export const faqs = [
  {
    q: 'What is HumotionAI?',
    a: 'HumotionAI (legal entity: Humos AI Pvt Ltd) is an AI company that ships configurable, contract-first AI agents for real businesses. Its flagship product, MOS, is a multi-agent operating system that runs an AI workforce — analytics, sales, support, and manager agents — from a single codebase.',
  },
  {
    q: 'What is MOS?',
    a: 'MOS (Multi-Agent Operating System) is HumotionAI’s platform for running an AI workforce. Behavior lives in JSON config, not code, so the same codebase serves different businesses. Agents are modular and independently replaceable, with frozen API and I/O contracts for predictable, auditable systems.',
  },
  {
    q: 'What is Humo.ai?',
    a: 'Humo.ai is HumotionAI’s emotionally intelligent AI companion. It reads tone, not just words, using a voice-tone emotion engine, adaptive voice journaling, and a long-term memory graph for genuinely empathetic interactions.',
  },
  {
    q: 'What services does HumotionAI offer?',
    a: 'HumotionAI offers contract-first engagements across AI consulting, custom development, process automation, and AI security, plus solution stacks for AI/ML, data engineering, cloud services, and IT infrastructure.',
  },
  {
    q: 'Who operates HumotionAI?',
    a: 'HumotionAI is operated by Humos AI Pvt Ltd, a private limited company based in Ghaziabad, Uttar Pradesh, India.',
  },
  {
    q: 'How can I contact HumotionAI?',
    a: 'Email Founder@humotionai.com or call +91 8700 829 517. The office is at B2 704, SCC Heights, Raj Nagar Extension, Ghaziabad, Uttar Pradesh, India. You can also use the contact form at humotionai.com/contact.',
  },
];

const FaqSection: React.FC = () => {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  return (
    <section className="bg-[#0a0a0a] text-[#f2f2f2] border-t border-white/10">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-50 mb-4">
          // faq
        </div>
        <h2 className="display text-4xl md:text-6xl tracking-tight mb-12">
          questions<span style={{ color: ACCENT }}>,</span> answered.
        </h2>

        <div className="border-t border-white/10">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-4 md:gap-6 py-8 border-b border-white/10"
            >
              <div className="col-span-12 md:col-span-5">
                <h3 className="display text-xl md:text-2xl tracking-tight">{f.q}</h3>
              </div>
              <div className="col-span-12 md:col-span-7">
                <p className="text-sm md:text-base text-white/70 leading-relaxed">{f.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
