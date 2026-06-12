import React from 'react';
import SolutionTemplate from '../../components/layout/SolutionTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const DataSolutions: React.FC = () => (
  <SolutionTemplate
    section="03.03"
    label="data solutions"
    eyebrow="ingest · model · serve · govern"
    titleTop={<>raw events to <span style={{ color: ACCENT }}>decisions.</span></>}
    titleBottom="end to end."
    subtitle="Data engineering, BI, real-time analytics, and governance — built so the numbers in your dashboard match the numbers in your database."
    metric={[
      { value: '4', label: '// workstreams' },
      { value: 'sub-s', label: '// freshness' },
      { value: 'sox', label: '// auditable' },
    ]}
    subAreas={[
      {
        id: '01',
        tag: 'workstream',
        title: 'data engineering',
        intro: 'Ingestion, modeling, and transformation — dbt or hand-rolled, with column lineage you can read and tests that catch regressions before dashboards lie.',
        bullets: [
          'dbt · sqlmesh · airflow',
          'cdc · debezium · fivetran',
          'column-level lineage',
          'incremental + idempotent jobs',
          'data quality tests',
          'cost-aware modeling',
        ],
      },
      {
        id: '02',
        tag: 'workstream',
        title: 'business intelligence',
        intro: 'Dashboards designed for decisions — not vanity vibes. Every metric defined once, surfaced everywhere, owned by someone.',
        bullets: [
          'metabase · superset · looker',
          'metrics layer · cube / dbt-metrics',
          'self-serve with guardrails',
          'embedded analytics',
          'metric ownership + sla',
          'executive cockpits',
        ],
      },
      {
        id: '03',
        tag: 'workstream',
        title: 'real-time analytics',
        intro: 'Stream processing, low-latency serving, and event-driven aggregates — for the dashboards that cannot wait for the nightly ETL.',
        bullets: [
          'kafka · redpanda · pubsub',
          'flink · materialize · risingwave',
          'event-driven aggregates',
          'cdc → real-time olap',
          'serving layer · clickhouse',
          'sub-second freshness',
        ],
      },
      {
        id: '04',
        tag: 'workstream',
        title: 'data governance',
        intro: 'Access controls, PII handling, retention policies, and audit trails — defensible, automated where possible, documented where not.',
        bullets: [
          'rbac + row-level security',
          'pii classification + masking',
          'retention + deletion automation',
          'audit logs + lineage',
          'data contracts · schema registry',
          'gdpr + ccpa workflows',
        ],
      },
    ]}
    stack={[
      { k: 'warehouse',   v: 'snowflake · bigquery · postgres' },
      { k: 'lake',        v: 's3 · iceberg · delta lake' },
      { k: 'transform',   v: 'dbt · sqlmesh · spark' },
      { k: 'streaming',   v: 'kafka · flink · materialize' },
      { k: 'bi',          v: 'metabase · superset · looker' },
      { k: 'governance',  v: 'atlan · datahub · open-metadata' },
    ]}
    useCases={[
      { title: 'single source of truth',     desc: 'Reconcile finance, product, and ops data — one metric, one definition, everywhere.' },
      { title: 'real-time ops dashboards',   desc: 'Sub-second freshness for ops teams making intra-day decisions.' },
      { title: 'embedded customer analytics', desc: 'White-label dashboards inside your product, with multi-tenant isolation.' },
      { title: 'pii classification pipeline', desc: 'Automatic detection + masking of PII across warehouse + lake.' },
      { title: 'data contracts rollout',      desc: 'Schema-as-code with breaking-change gates between producer + consumer teams.' },
      { title: 'cost-optimized warehouse',     desc: 'Cut warehouse spend without losing freshness — partitioning, materialization, caching.' },
    ]}
    ctaTitle={<>your dashboards <span style={{ color: ACCENT }}>lying?</span></>}
    ctaSubtitle="We rebuild the foundation. Then the visuals. Then the trust."
    siblings={[
      { label: 'ai solutions',       to: '/solutions/ai' },
      { label: 'it infrastructure',  to: '/solutions/it-infrastructure' },
      { label: 'cloud services',     to: '/solutions/cloud' },
    ]}
  />
);

export default DataSolutions;
