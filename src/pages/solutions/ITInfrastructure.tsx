import React from 'react';
import SolutionTemplate from '../../components/layout/SolutionTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const ITInfrastructure: React.FC = () => (
  <SolutionTemplate
    section="03.02"
    label="it infrastructure"
    eyebrow="cloud · network · devops · security"
    titleTop={<>the <span style={{ color: ACCENT }}>boring</span> bedrock.</>}
    titleBottom="done right."
    subtitle="Cloud architecture, system integration, network security, and DevOps — the unglamorous foundation that decides whether your AI ships or stalls."
    metric={[
      { value: '4', label: '// workstreams' },
      { value: 'IaC', label: '// everything' },
      { value: '24/7', label: '// observable' },
    ]}
    subAreas={[
      {
        id: '01',
        tag: 'workstream',
        title: 'cloud architecture',
        intro: 'Right-sized, multi-environment, infrastructure-as-code architectures across AWS, GCP, and Azure — designed to scale with discipline and shrink without drama.',
        bullets: [
          'terraform / pulumi everywhere',
          'multi-region · multi-env',
          'reserved capacity planning',
          'gpu workload provisioning',
          'cost guardrails + alerts',
          'disaster recovery runbooks',
        ],
      },
      {
        id: '02',
        tag: 'workstream',
        title: 'system integration',
        intro: 'Auth, identity, billing, CRM, and ERP stitched together with typed contracts, idempotency keys, and replay-able event streams — not duct tape.',
        bullets: [
          'oidc / saml · scim sync',
          'webhook + idempotency layers',
          'crm · hubspot / salesforce',
          'billing · stripe · chargebee',
          'erp · netsuite / sap bridges',
          'event-driven architectures',
        ],
      },
      {
        id: '03',
        tag: 'workstream',
        title: 'network security',
        intro: 'Zero-trust segmentation, secrets management, perimeter audits — written down, automated where possible, audited regardless.',
        bullets: [
          'zero-trust · cloudflare access',
          'vpn + private networking',
          'secrets · vault / kms',
          'waf + ddos mitigation',
          'audit logs · siem ingestion',
          'soc2 / iso27001 readiness',
        ],
      },
      {
        id: '04',
        tag: 'workstream',
        title: 'devops + ci/cd',
        intro: 'Pipelines, blue/green deploys, rollbacks, and on-call playbooks — engineered so 3 AM incidents become routine, not heroic.',
        bullets: [
          'github actions · gitlab ci',
          'blue/green + canary deploys',
          'rollback automation',
          'observability · grafana stack',
          'on-call rotation tooling',
          'sre playbooks · postmortems',
        ],
      },
    ]}
    stack={[
      { k: 'iac',         v: 'terraform · pulumi · ansible' },
      { k: 'orchestration', v: 'kubernetes · ecs · nomad' },
      { k: 'observability', v: 'grafana · prometheus · loki' },
      { k: 'tracing',     v: 'opentelemetry · honeycomb' },
      { k: 'ci/cd',       v: 'github actions · gitlab ci' },
      { k: 'security',    v: 'vault · cloudflare · 1password' },
    ]}
    useCases={[
      { title: 'multi-tenant saas backbone',  desc: 'Per-tenant isolation, billing, and observability — at scale, without per-tenant pain.' },
      { title: 'gpu workload provisioning',   desc: 'Autoscaling GPU fleets for ML inference with cost ceilings and graceful degradation.' },
      { title: 'crm + erp integration',        desc: 'Bidirectional sync with replay, dedupe, and audit trails the auditor will accept.' },
      { title: 'soc2 readiness',              desc: 'Controls, evidence collection, and audit prep — without becoming a paperwork shop.' },
      { title: 'zero-downtime migration',      desc: 'Cut over legacy systems with rollback gates and dual-run validation.' },
      { title: 'observability uplift',         desc: 'Add traces, structured logs, and SLOs to systems that grew without them.' },
    ]}
    ctaTitle={<>infra holding <span style={{ color: ACCENT }}>ai</span> back?</>}
    ctaSubtitle="We fix the foundation so the AI can ship. No rip-and-replace."
    siblings={[
      { label: 'ai solutions',    to: '/solutions/ai' },
      { label: 'data solutions',  to: '/solutions/data' },
      { label: 'cloud services',  to: '/solutions/cloud' },
    ]}
  />
);

export default ITInfrastructure;
