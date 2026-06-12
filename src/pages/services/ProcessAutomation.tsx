import React from 'react';
import ServiceTemplate from '../../components/layout/ServiceTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const ProcessAutomation: React.FC = () => (
  <ServiceTemplate
    section="02.03"
    label="process automation"
    eyebrow="n8n · agents · humans-in-loop"
    titleTop={<>flows that <span style={{ color: ACCENT }}>adapt.</span></>}
    titleBottom="not break."
    subtitle="We design automations that survive contact with reality — backed by agent intelligence, escalation paths, and observability. Not just connectors."
    deliverables={[
      { id: '01', title: 'n8n workflows',          desc: 'Production-grade flows for WhatsApp, Sheets, CRM, email, and scheduling — versioned and tested.' },
      { id: '02', title: 'agent-routed triggers',  desc: 'Decisions made by AI agents, not brittle if/else rules. Configurable per tenant.' },
      { id: '03', title: 'human-in-the-loop',      desc: 'Escalation handoffs with full context. No more "what was this customer asking?" tickets.' },
      { id: '04', title: 'sla dashboards',         desc: 'Track latency, failure modes, fallback rates. Operate, don\'t pray.' },
    ]}
    process={[
      { k: 'MAP',      d: 'Trace current workflow. Find leaks.' },
      { k: 'DESIGN',   d: 'Agent + automation split.' },
      { k: 'BUILD',    d: 'Wire n8n + backend triggers.' },
      { k: 'PILOT',    d: 'Live traffic. Monitor edges.' },
      { k: 'OPERATE',  d: 'Tune thresholds. Document.' },
    ]}
    ctaTitle={<>tired of <span style={{ color: ACCENT }}>brittle</span> automations?</>}
    ctaSubtitle="We replace duct tape with engineering."
  />
);

export default ProcessAutomation;
