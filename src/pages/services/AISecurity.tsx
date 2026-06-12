import React from 'react';
import ServiceTemplate from '../../components/layout/ServiceTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const AISecurity: React.FC = () => (
  <ServiceTemplate
    section="02.04"
    label="ai security"
    eyebrow="audit · harden · monitor"
    titleTop={<>defend the <span style={{ color: ACCENT }}>surface.</span></>}
    titleBottom="protect the brand."
    subtitle="AI surfaces leak, jailbreak, and hallucinate sensitive content. We audit, harden, and instrument them — so production stays production."
    deliverables={[
      { id: '01', title: 'prompt injection audit',  desc: 'Adversarial probes against your live agents. Findings + concrete mitigations.' },
      { id: '02', title: 'output filtering',         desc: 'PII redaction, toxicity gates, policy enforcement — layered, observable.' },
      { id: '03', title: 'red-team exercises',       desc: 'Scheduled adversarial sweeps + reporting. Continuous, not one-shot.' },
      { id: '04', title: 'policy + runbooks',        desc: 'Incident response, escalation paths, disclosure templates — written.' },
    ]}
    process={[
      { k: 'MAP',      d: 'Catalog AI surfaces + data flows.' },
      { k: 'PROBE',    d: 'Adversarial test suite run.' },
      { k: 'HARDEN',   d: 'Filters, guards, prompt fixes.' },
      { k: 'INSTRUMENT', d: 'Detection + alerting wired.' },
      { k: 'CADENCE',  d: 'Monthly sweeps + updates.' },
    ]}
    ctaTitle={<>shipping AI? <span style={{ color: ACCENT }}>audit it.</span></>}
    ctaSubtitle="Before someone else does — publicly."
  />
);

export default AISecurity;
