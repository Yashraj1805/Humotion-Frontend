import React from 'react';
import ServiceTemplate from '../../components/layout/ServiceTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const AIConsulting: React.FC = () => (
  <ServiceTemplate
    section="02.01"
    label="ai consulting"
    eyebrow="strategy · roadmap · governance"
    titleTop={<>ai you can <span style={{ color: ACCENT }}>defend.</span></>}
    titleBottom="not demo."
    subtitle="Strategic AI roadmaps grounded in your real constraints — capability mapping, risk framing, phased rollouts, governance. No magic. Just engineering judgment, written down."
    deliverables={[
      { id: '01', title: 'capability audit',     desc: 'A landscape of where AI fits, where it shouldn\'t, and what the buy-vs-build calculus looks like.' },
      { id: '02', title: 'phased roadmap',       desc: 'Quarter-by-quarter plan with concrete artifacts, owners, success metrics, and risk gates.' },
      { id: '03', title: 'governance playbook',  desc: 'Approval gates, model card templates, escalation paths — the boring stuff that prevents disasters.' },
      { id: '04', title: 'vendor + tool review', desc: 'Honest evaluation of foundation models, MLOps tooling, and vector stores against your needs.' },
    ]}
    process={[
      { k: 'INTAKE',   d: 'Stakeholder interviews. Pain mapping.' },
      { k: 'AUDIT',    d: 'Tech, data, team, regulatory readiness.' },
      { k: 'OPTIONS',  d: '3 paths. Tradeoffs surfaced.' },
      { k: 'DECIDE',   d: 'Joint workshop. Roadmap signed.' },
      { k: 'HANDOFF',  d: 'Docs + 30-day check-in.' },
    ]}
    ctaTitle={<>need a <span style={{ color: ACCENT }}>defensible</span> AI strategy?</>}
    ctaSubtitle="Two-week sprints. Real artifacts. No 90-slide PDFs."
  />
);

export default AIConsulting;
