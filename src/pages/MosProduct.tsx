import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import { ACCENT } from '@/lib/tokens';

const agents = [
  { id: '01', name: 'analytics.ai', status: 'READY', role: 'lead scoring · intent detection · routing',
    detail: 'Reads every incoming lead. Outputs score, intent, category, urgency, recommended action. JSON-first.' },
  { id: '02', name: 'sales.ai', status: 'READY', role: 'qualification · objection handling · CTA drive',
    detail: 'Not a Q&A bot. Moves the lead toward action. Tone, products, CTAs all sourced from business config.' },
  { id: '03', name: 'support.ai', status: 'STANDBY', role: 'FAQ · complaints · escalation',
    detail: 'Handles repetitive support, logs complaints, escalates when the contract says so.' },
  { id: '04', name: 'manager.ai', status: 'READY', role: 'summaries · gaps · daily reports',
    detail: 'Business intelligence layer. Identifies gaps, suggests improvements, reports daily.' },
];

const principles = [
  { k: 'CONFIG', v: 'Same code. Different businesses. Behavior lives in JSON, never in if-statements.' },
  { k: 'CONTRACTS', v: 'API, DB, agent I/O schemas frozen before code. Predictable and auditable.' },
  { k: 'MODULAR', v: 'Every agent is independently replaceable. Fixed input. Fixed output. No tight coupling.' },
  { k: 'ORCHESTRATOR', v: 'A backend router decides which agent runs. n8n is integration, not the brain.' },
];

const flow = [
  ['lead.received', 'orchestrator.route'],
  ['analytics.score', 'sales.respond'],
  ['conversation.log', 'scenario.detect'],
  ['manager.summarize', 'report.emit'],
];

const verticals = ['coaching', 'real-estate', 'd2c', 'saas', 'healthcare', 'services'];

const useBootSequence = () => {
  const lines = [
    '$ mos init --phase=1',
    '> loading business_config.json     [ok]',
    '> spawning orchestrator             [ok]',
    '> attaching agents/                 [4 ready]',
    '> binding integration layer (n8n)   [ok]',
    '> system ready. awaiting lead.',
  ];
  const [shown, setShown] = useState<string[]>([]);
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setShown((s) => [...s, lines[i]]);
      i += 1;
      if (i >= lines.length) clearInterval(t);
    }, 320);
    return () => clearInterval(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return shown;
};

const Cursor = () => (
  <span className="inline-block w-[0.6em] h-[1em] align-[-0.15em] bg-current animate-pulse ml-1" />
);

const MosProduct: React.FC = () => {
  const boot = useBootSequence();

  return (
    <div
      className="min-h-screen pt-16 bg-[#0a0a0a] text-[#f2f2f2] font-mono selection:bg-[#d4ff00] selection:text-black"
      style={{
        backgroundImage:
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        backgroundSize: '64px 64px',
      }}
    >
      {/* Top status strip */}
      <div className="border-b border-white/15 text-[11px] tracking-[0.18em] uppercase">
        <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
          <span className="opacity-70">mos // multi-agent operating system</span>
          <span className="flex items-center gap-2 opacity-70">
            <span className="inline-block w-2 h-2 bg-[var(--mos-accent)]" style={{ ['--mos-accent' as any]: ACCENT }} />
            phase 1 · build 0.1.0 · {new Date().toISOString().slice(0, 10)}
          </span>
        </div>
      </div>

      {/* HERO — asymmetric 12-col */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 pt-16 pb-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.2em] opacity-50">
            <div>§ 00</div>
            <div className="mt-1">overview</div>
          </div>

          <div className="col-span-12 md:col-span-7">
            <div
              className="inline-block border border-white/20 px-2 py-1 text-[10px] tracking-[0.2em] uppercase mb-8"
              style={{ color: ACCENT, borderColor: ACCENT }}
            >
              ◢ new — phase 1
            </div>
            <h1 className="text-[14vw] md:text-[110px] leading-[0.85] font-extrabold tracking-tighter">
              MOS.
            </h1>
            <p className="mt-8 text-lg md:text-2xl max-w-2xl leading-snug">
              An <span style={{ color: ACCENT }}>operating system</span> for your AI workforce. Plug in
              the business — get analytics, sales, support, and reporting agents running on the same code.
            </p>

            <div className="mt-12 flex flex-wrap gap-3 items-center">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 border border-white/30 hover:border-white px-5 py-3 text-xs uppercase tracking-[0.2em] transition-colors"
                style={{ color: ACCENT }}
              >
                <span className="group-hover:translate-x-1 transition-transform">▶</span>
                request demo
              </Link>
              <Link
                to="/humo"
                className="inline-flex items-center gap-3 border border-white/15 hover:border-white/40 px-5 py-3 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
              >
                see humo.ai →
              </Link>
            </div>
          </div>

          {/* Terminal panel */}
          <div className="col-span-12 md:col-span-3 md:mt-12">
            <div className="border border-white/20 bg-black/60">
              <div className="flex items-center justify-between border-b border-white/15 px-3 py-2 text-[10px] uppercase tracking-[0.2em] opacity-70">
                <span>~/mos</span>
                <span>● ● ●</span>
              </div>
              <pre className="p-3 text-[11px] leading-relaxed whitespace-pre-wrap min-h-[210px]">
{boot.join('\n')}
                <Cursor />
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* AGENTS — numbered grid */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.2em] opacity-50">
            <div>§ 01</div>
            <div className="mt-1">agents</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-3xl">
              Four agents. <span className="opacity-50">One contract.</span>
            </h2>

            <div className="border-t border-white/15">
              {agents.map((a) => (
                <motion.div
                  key={a.id}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.3 }}
                  className="group grid grid-cols-12 gap-6 border-b border-white/15 py-6 hover:bg-white/[0.03] transition-colors"
                >
                  <div className="col-span-2 md:col-span-1 text-xs opacity-50">[{a.id}]</div>
                  <div className="col-span-10 md:col-span-3">
                    <div className="text-lg md:text-xl font-semibold tracking-tight">{a.name}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] opacity-50 mt-1">{a.role}</div>
                  </div>
                  <div className="col-span-9 md:col-span-6 text-sm md:text-base opacity-80 group-hover:opacity-100">
                    {a.detail}
                  </div>
                  <div className="col-span-3 md:col-span-2 text-right">
                    <span
                      className="inline-block text-[10px] tracking-[0.2em] uppercase border px-2 py-1"
                      style={{
                        color: a.status === 'READY' ? ACCENT : '#9ca3af',
                        borderColor: a.status === 'READY' ? ACCENT : 'rgba(255,255,255,0.2)',
                      }}
                    >
                      ● {a.status}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FLOW — ASCII pipeline */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.2em] opacity-50">
            <div>§ 02</div>
            <div className="mt-1">flow</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-3xl">
              From lead <span className="opacity-50">to</span> report.
            </h2>

            <div className="border border-white/15 bg-black/40 p-6 md:p-10 overflow-x-auto">
              <pre className="text-xs md:text-sm leading-loose whitespace-pre">
{`  ┌──────────────┐     ┌──────────────┐     ┌──────────────┐     ┌──────────────┐
  │  lead.in     │ ──▶ │ orchestrator │ ──▶ │ analytics.ai │ ──▶ │  sales.ai    │
  └──────────────┘     └──────────────┘     └──────────────┘     └──────────────┘
                              │                                          │
                              ▼                                          ▼
                       ┌──────────────┐                           ┌──────────────┐
                       │  business    │                           │  conv.log    │
                       │  config      │                           └──────┬───────┘
                       └──────────────┘                                  ▼
                                                                  ┌──────────────┐
                                                                  │ scenario.eng │
                                                                  └──────┬───────┘
                                                                         ▼
                                                                  ┌──────────────┐
                                                                  │  manager.ai  │  ──▶  report
                                                                  └──────────────┘`}
              </pre>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-px bg-white/15 border border-white/15">
              {flow.map(([a, b], i) => (
                <div key={i} className="bg-[#0a0a0a] p-5">
                  <div className="text-[10px] opacity-50 tracking-[0.2em] uppercase mb-2">step {String(i + 1).padStart(2, '0')}</div>
                  <div className="text-sm" style={{ color: ACCENT }}>{a}</div>
                  <div className="text-xs opacity-60 mt-1">↳ {b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES — definition list */}
      <section className="border-b border-white/15">
        <div className="max-w-[1400px] mx-auto px-6 py-20 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.2em] opacity-50">
            <div>§ 03</div>
            <div className="mt-1">principles</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-12 max-w-3xl">
              Rules <span className="opacity-50">we don't break.</span>
            </h2>

            <dl className="border-t border-white/15">
              {principles.map((p) => (
                <div key={p.k} className="grid grid-cols-12 gap-6 border-b border-white/15 py-8">
                  <dt
                    className="col-span-12 md:col-span-3 text-xl md:text-2xl font-bold tracking-tight"
                    style={{ color: ACCENT }}
                  >
                    {p.k}.
                  </dt>
                  <dd className="col-span-12 md:col-span-9 text-base md:text-lg opacity-90 max-w-3xl">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* VERTICALS — ticker row */}
      <section className="border-b border-white/15 overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 py-12">
          <div className="text-[11px] uppercase tracking-[0.2em] opacity-50 mb-6">§ 04 · deployments</div>
          <div className="flex flex-wrap gap-x-12 gap-y-4 text-2xl md:text-4xl font-bold tracking-tight">
            {verticals.map((v, i) => (
              <span key={v} className={i % 2 ? 'opacity-100' : 'opacity-40'}>
                {v}<span style={{ color: ACCENT }}>.</span>
              </span>
            ))}
          </div>
          <div className="mt-6 text-sm opacity-60 max-w-2xl">
            same binary. different config. zero forks. mos already runs across these verticals in pilot.
          </div>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="max-w-[1400px] mx-auto px-6 py-24 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2 text-[11px] uppercase tracking-[0.2em] opacity-50">
            <div>§ 05</div>
            <div className="mt-1">exec</div>
          </div>

          <div className="col-span-12 md:col-span-10">
            <div className="text-xs uppercase tracking-[0.2em] opacity-60 mb-4">$ ./deploy --tenant=you</div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight leading-[0.95] max-w-4xl">
              Ready to <span style={{ color: ACCENT }}>boot</span> your<br /> AI workforce?
            </h2>

            <div className="mt-12 flex flex-wrap gap-3 items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 px-6 py-4 text-xs uppercase tracking-[0.2em] font-semibold text-black"
                style={{ background: ACCENT }}
              >
                ▶ book walkthrough
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-3 border border-white/30 hover:border-white px-6 py-4 text-xs uppercase tracking-[0.2em] transition-colors"
              >
                services →
              </Link>
            </div>

            <div className="mt-16 text-[10px] uppercase tracking-[0.2em] opacity-40">
              // end of document · mos.phase1 · humotionai.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MosProduct;
