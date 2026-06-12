import React from 'react';
import { motion } from 'framer-motion';
import { PageRoot, PageHero, Section, CTABand, ACCENT } from '../../components/layout/PageShell';
import Seo from '@/components/Seo';

const principles = [
  { k: 'CONTRACT', v: 'Every API, schema, and agent I/O frozen before code. Predictable systems beat clever ones.' },
  { k: 'CONFIG', v: 'Same codebase, different businesses. Behavior lives in JSON — never in if-statements.' },
  { k: 'MODULAR', v: 'Each agent is independently replaceable. No tight coupling. Ever.' },
  { k: 'AUDIT', v: 'Conversations, decisions, agent outputs — all logged. Nothing escapes the ledger.' },
];

const team = [
  { role: 'solution architect', focus: 'architecture · boundaries · workflows' },
  { role: 'backend engineer',   focus: 'apis · db · orchestrator · services' },
  { role: 'ai engineer',        focus: 'prompts · agent logic · evaluation' },
  { role: 'integration',        focus: 'n8n · webhooks · crm · sheets' },
  { role: 'product owner',      focus: 'stories · acceptance · roadmap' },
];

const milestones = [
  { yr: '2024', t: 'Humos AI Pvt Ltd incorporated', d: 'Mission: ship configurable AI workforces — not chatbots.' },
  { yr: '2025', t: 'humo.ai launch',        d: 'Emotionally intelligent AI companion shipped to early users.' },
  { yr: '2026', t: 'mos phase 1',           d: 'Multi-agent operating system, live for early-access partners.' },
];

const About: React.FC = () => {
  return (
    <PageRoot>
      <Seo
        title="About HumotionAI — Builders of AI That Ships"
        description="HumotionAI (Humos AI Pvt Ltd) builds emotionally aware products and configurable agent systems for businesses that need real outcomes — contract-first, modular, audited."
        path="/about"
      />
      <PageHero
        section="01"
        label="about"
        eyebrow="we're builders · not consultants"
        titleTop={<>builders of <span style={{ color: ACCENT }}>AI</span></>}
        titleBottom="that ships."
        subtitle={
          <>
            Humotionai was founded on one conviction —{' '}
            <span className="serif-italic text-white">AI should ship.</span> We build emotionally aware
            products and configurable agent systems for businesses that need real outcomes, not slideware.
          </>
        }
        ctaPrimary={{ to: '/contact', label: 'work with us' }}
        ctaSecondary={{ to: '/services', label: 'what we do' }}
        meta={
          <div className="space-y-1">
            <div className="opacity-50">// founded</div>
            <div className="text-white">2024</div>
            <div className="opacity-50 mt-2">// products</div>
            <div className="text-white">2 shipping</div>
          </div>
        }
      />

      <Section
        section="02"
        label="principles"
        title={<>rules <span className="opacity-50">we don't break.</span></>}
        intro="Engineering culture, in four lines."
      >
        <dl className="border-t border-white/10">
          {principles.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="grid grid-cols-12 gap-6 border-b border-white/10 py-8"
            >
              <dt className="col-span-12 md:col-span-3 display text-2xl md:text-3xl tracking-tight" style={{ color: ACCENT }}>
                {p.k}.
              </dt>
              <dd className="col-span-12 md:col-span-9 text-base md:text-lg text-white/85 max-w-3xl">{p.v}</dd>
            </motion.div>
          ))}
        </dl>
      </Section>

      <Section
        section="03"
        label="team"
        title={<>five roles. <span className="opacity-50">one ledger.</span></>}
        intro="A small, deliberate team — every responsibility owned, every handoff documented."
        grid
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {team.map((t, i) => (
            <motion.div
              key={t.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="bg-[#0a0a0a] p-8 hover:bg-white/[0.025] transition-colors"
            >
              <div className="mono text-[10px] uppercase tracking-[0.22em] opacity-50 mb-3">[0{i + 1}] / role</div>
              <div className="display text-2xl tracking-tight mb-2">{t.role}</div>
              <div className="mono text-[10px] uppercase tracking-[0.22em] text-white/60">{t.focus}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section
        section="04"
        label="timeline"
        title={<>where we've been. <span className="opacity-50">where we're going.</span></>}
      >
        <div className="border-t border-white/10">
          {milestones.map((m, i) => (
            <motion.div
              key={m.yr}
              initial={{ opacity: 0, x: 12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="grid grid-cols-12 gap-6 border-b border-white/10 py-8 group hover:bg-white/[0.025] transition-colors"
            >
              <div className="col-span-3 md:col-span-2 display text-3xl md:text-5xl tracking-tight" style={{ color: ACCENT }}>
                {m.yr}
              </div>
              <div className="col-span-9 md:col-span-4 display text-xl md:text-2xl tracking-tight">{m.t}</div>
              <div className="col-span-12 md:col-span-6 text-base text-white/70">{m.d}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      <CTABand
        title={<>ready to <span style={{ color: ACCENT }}>build</span> with us?</>}
        subtitle="Pilot engagements, agent licensing, or custom development — start with a conversation."
        primary={{ to: '/contact', label: 'start a conversation' }}
        secondary={{ to: '/mos', label: 'see mos' }}
      />
    </PageRoot>
  );
};

export default About;
