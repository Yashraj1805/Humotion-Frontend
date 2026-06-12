import React from 'react';
import SolutionTemplate from '../../components/layout/SolutionTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const CloudServices: React.FC = () => (
  <SolutionTemplate
    section="03.04"
    label="cloud services"
    eyebrow="migrate · scale · optimize · govern"
    titleTop={<>cloud, <span style={{ color: ACCENT }}>without</span></>}
    titleBottom="the surprise bill."
    subtitle="Migration strategy, scalable architecture, performance tuning, and cost management — disciplined cloud engineering, no buzzword theatre."
    metric={[
      { value: '4', label: '// workstreams' },
      { value: '-35%', label: '// avg cost cut' },
      { value: 'multi', label: '// region ready' },
    ]}
    subAreas={[
      {
        id: '01',
        tag: 'workstream',
        title: 'migration strategy',
        intro: 'Lift-and-shift vs. re-architect — pick honestly, with rollback gates and dual-run validation. No "big-bang" cut-overs on a Friday.',
        bullets: [
          'workload assessment + tco',
          'phased migration waves',
          'rollback + dual-run',
          'data migration playbooks',
          'cut-over runbooks',
          'on-prem → cloud bridges',
        ],
      },
      {
        id: '02',
        tag: 'workstream',
        title: 'scalable architecture',
        intro: 'Autoscaling, sharding, queue topology — designed for your real load curve, not the brochure load curve.',
        bullets: [
          'horizontal + vertical scaling',
          'multi-az + multi-region',
          'queue + worker patterns',
          'caching strategies · cdn',
          'database sharding',
          'load testing · k6 / gatling',
        ],
      },
      {
        id: '03',
        tag: 'workstream',
        title: 'performance optimization',
        intro: 'Profile, fix the actual bottleneck, document. Then move on. We do not rewrite when a config change wins.',
        bullets: [
          'profiling · pprof / py-spy',
          'database tuning',
          'cache hit-rate uplift',
          'cold-start mitigation',
          'cdn + edge caching',
          'p99 tail latency cuts',
        ],
      },
      {
        id: '04',
        tag: 'workstream',
        title: 'cost management',
        intro: 'Right-sizing, reserved capacity, budget alerts, monthly cost reviews — and a finops practice that survives turnover.',
        bullets: [
          'right-sizing audits',
          'reserved + savings plans',
          'spot + preemptible workloads',
          'budget alerts + anomaly detection',
          'tagging + showback reports',
          'monthly cost reviews',
        ],
      },
    ]}
    stack={[
      { k: 'cloud',       v: 'aws · gcp · azure · cloudflare' },
      { k: 'compute',     v: 'eks · cloud run · fargate · lambda' },
      { k: 'data',        v: 'rds · spanner · cloud sql' },
      { k: 'cdn / edge',  v: 'cloudflare · fastly · cloudfront' },
      { k: 'finops',      v: 'cur · billing api · vantage' },
      { k: 'iac',         v: 'terraform · pulumi · cdk' },
    ]}
    useCases={[
      { title: 'lift-and-shift to gcp',       desc: 'On-prem rails migrated to managed compute with parallel-run validation.' },
      { title: 'multi-region rollout',         desc: 'Active-active deployments with regional failover under 60s RTO.' },
      { title: 'kubernetes cost cut',          desc: 'Right-sized clusters, spot pools, and bin-packing — 35-50% off the monthly bill.' },
      { title: 'ml inference autoscaling',     desc: 'GPU autoscaling with warm pools and cost ceilings — without cold-start pain.' },
      { title: 'serverless rebuild',           desc: 'Stateful monolith decomposed into event-driven serverless — billing per request.' },
      { title: 'edge caching uplift',           desc: 'Read-heavy traffic moved to edge — p95 latency cut, origin load down 80%.' },
    ]}
    ctaTitle={<>cloud bill <span style={{ color: ACCENT }}>climbing?</span></>}
    ctaSubtitle="We profile, right-size, and document — no rip-and-replace, no buzzword sprints."
    siblings={[
      { label: 'ai solutions',       to: '/solutions/ai' },
      { label: 'it infrastructure',  to: '/solutions/it-infrastructure' },
      { label: 'data solutions',     to: '/solutions/data' },
    ]}
  />
);

export default CloudServices;
