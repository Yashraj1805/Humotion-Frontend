import React from 'react';
import ServiceTemplate from '../../components/layout/ServiceTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const CustomDevelopment: React.FC = () => (
  <ServiceTemplate
    section="02.02"
    label="custom development"
    eyebrow="systems · apis · agents"
    titleTop={<>bespoke <span style={{ color: ACCENT }}>systems.</span></>}
    titleBottom="built to last."
    subtitle="From FastAPI services to typed contracts to multi-agent backends — we build the software your business actually needs, with observability and docs baked in."
    deliverables={[
      { id: '01', title: 'typed backend services',  desc: 'FastAPI / Node. Pydantic / Zod contracts. OpenAPI-documented. Tested.' },
      { id: '02', title: 'agent integrations',      desc: 'LLM-powered agents wired into your stack with structured outputs and replayable logs.' },
      { id: '03', title: 'ingestion + storage',     desc: 'Postgres / pgvector / Redis pipelines designed for the data you actually have.' },
      { id: '04', title: 'observability + runbooks', desc: 'Logs, metrics, traces, alerts. Plus the runbook your on-call will actually read.' },
    ]}
    process={[
      { k: 'SCOPE',    d: 'User stories → API contracts.' },
      { k: 'SLICE',    d: 'Cut into shippable vertical slices.' },
      { k: 'BUILD',    d: 'Demo weekly. Iterate.' },
      { k: 'HARDEN',   d: 'Tests, observability, runbooks.' },
      { k: 'SHIP',     d: 'Handoff with docs + on-call.' },
    ]}
    ctaTitle={<>got something to <span style={{ color: ACCENT }}>build?</span></>}
    ctaSubtitle="Bring the constraint. We bring the engineering."
  />
);

export default CustomDevelopment;
