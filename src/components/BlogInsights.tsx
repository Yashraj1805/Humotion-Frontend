import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ACCENT } from '@/lib/tokens';

interface BlogPost {
  id: string;
  date: string;
  read: string;
  title: string;
  description: string;
  link: string;
  tag: string;
}

const featuredPosts: BlogPost[] = [
  {
    id: '001',
    date: '2025.07',
    read: '8 min',
    title: 'The future of emotional AI',
    description: 'Exploring how artificial intelligence is rebuilding human emotional understanding from prosody up.',
    link: '/blog/EmotionalAIFuture',
    tag: 'essay',
  },
  {
    id: '002',
    date: '2025.06',
    read: '12 min',
    title: 'Neural networks & human emotions',
    description: 'Deep dive into how neural networks process spectral and temporal features of emotional speech.',
    link: '/blog/NeuralEmotions',
    tag: 'deep-dive',
  },
  {
    id: '003',
    date: '2025.05',
    read: '6 min',
    title: 'AI-powered mental health',
    description: 'Why empathetic AI is becoming infrastructure for emotional well-being — and where it must stay out.',
    link: '/blog/AIMentalHealth',
    tag: 'opinion',
  },
];

const BlogInsights: React.FC = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-24 border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 gap-6 mb-14">
          <div className="col-span-12 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-50">
            <div>§ 06</div>
            <div className="mt-1">writing</div>
          </div>
          <div className="col-span-12 md:col-span-7">
            <h2 className="display text-5xl md:text-7xl tracking-tight">
              from the <span style={{ color: ACCENT }}>field.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-3 md:text-right md:self-end">
            <span className="mono text-[11px] uppercase tracking-[0.22em] opacity-60">
              {featuredPosts.length} essays · publishing monthly
            </span>
          </div>
        </div>

        <div className="border-t border-white/10">
          {featuredPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group border-b border-white/10 hover:bg-white/[0.025] transition-colors"
            >
              <Link to={post.link} className="grid grid-cols-12 gap-6 py-10 px-2 items-center">
                <div className="col-span-3 md:col-span-1 mono text-[11px] uppercase tracking-[0.22em] opacity-50">[{post.id}]</div>
                <div className="col-span-9 md:col-span-2 mono text-[11px] uppercase tracking-[0.22em] opacity-60">
                  <div>{post.date}</div>
                  <div className="opacity-50 mt-1">{post.read}</div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <h3 className="display text-2xl md:text-4xl tracking-tight group-hover:text-[var(--mos-accent,#d4ff00)] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/60 max-w-2xl">{post.description}</p>
                </div>
                <div className="col-span-6 md:col-span-1">
                  <span className="mono text-[10px] uppercase tracking-[0.22em] px-2 py-1 border border-white/15 text-white/60">
                    {post.tag}
                  </span>
                </div>
                <div className="col-span-6 md:col-span-1 text-right">
                  <span style={{ color: ACCENT }} className="text-xl group-hover:translate-x-1 transition-transform inline-block">→</span>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogInsights;
