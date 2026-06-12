import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PageRoot, ACCENT } from './PageShell';

export interface Section {
  heading: string;
  paragraphs: string[];
  pull?: string;
}

export interface BlogTemplateProps {
  id: string;
  date: string;
  read: string;
  tag: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  sections: Section[];
  next: { label: string; to: string };
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ id, date, read, tag, title, subtitle, sections, next }) => (
  <PageRoot>
    <article className="bg-[#0a0a0a]">
      {/* Hero */}
      <section className="bg-grid pt-28 pb-16 md:pt-32 md:pb-20 border-b border-white/10">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mono text-[11px] uppercase tracking-[0.22em] opacity-50 mb-8 flex items-center gap-4">
            <span>[{id}]</span>
            <span>·</span>
            <span>{date}</span>
            <span>·</span>
            <span>{read}</span>
            <span>·</span>
            <span className="border px-2 py-0.5 border-white/15">{tag}</span>
          </div>

          <h1 className="display text-5xl md:text-7xl tracking-tight leading-[0.95] max-w-4xl">
            {title}
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-white/70 max-w-3xl leading-snug">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-16 md:py-24">
        <div className="max-w-[860px] mx-auto px-4 sm:px-6 lg:px-8">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45 }}
              className="mb-16"
            >
              <div className="flex items-baseline gap-4 mb-6">
                <span className="mono text-[10px] uppercase tracking-[0.22em] opacity-50">
                  § {String(i + 1).padStart(2, '0')}
                </span>
                <h2 className="display text-3xl md:text-4xl tracking-tight">
                  {s.heading}
                </h2>
              </div>
              {s.paragraphs.map((p, j) => (
                <p key={j} className="text-base md:text-lg text-white/80 leading-relaxed mb-5 max-w-2xl">
                  {p}
                </p>
              ))}
              {s.pull && (
                <blockquote
                  className="my-10 pl-6 border-l-2 text-2xl md:text-3xl serif-italic max-w-2xl"
                  style={{ borderColor: ACCENT, color: '#f2f2f2' }}
                >
                  "{s.pull}"
                </blockquote>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Next + back */}
      <section className="border-t border-white/10 py-12">
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <Link to="/" className="mono text-[11px] uppercase tracking-[0.22em] text-white/60 hover:text-white link-draw">
            ← back to humotionai
          </Link>
          <Link
            to={next.to}
            className="mono text-[11px] uppercase tracking-[0.22em] px-6 py-4 text-black inline-flex items-center gap-2"
            style={{ background: ACCENT }}
          >
            read next · {next.label} →
          </Link>
        </div>
      </section>
    </article>
  </PageRoot>
);

export default BlogTemplate;
