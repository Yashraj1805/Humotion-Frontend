import React from 'react';
import SolutionTemplate from '../../components/layout/SolutionTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const AISolutions: React.FC = () => (
  <SolutionTemplate
    section="03.01"
    label="ai solutions"
    eyebrow="ml · nlp · vision · forecasting"
    titleTop={<>ml that <span style={{ color: ACCENT }}>survives</span></>}
    titleBottom="contact with prod."
    subtitle="Production-grade ML, NLP, and computer-vision systems engineered for real data, real drift, and real latency budgets — not Jupyter notebooks."
    metric={[
      { value: '4', label: '// workstreams' },
      { value: '6+', label: '// verticals' },
      { value: 'p95', label: '// latency tracked' },
    ]}
    subAreas={[
      {
        id: '01',
        tag: 'workstream',
        title: 'machine learning models',
        intro: 'Classification, regression, ranking — trained on your data with proper holdouts, calibration, and bias audits. Versioned, replay-able, and rollback-able.',
        bullets: [
          'tabular + sequence models',
          'calibrated confidence',
          'shadow + canary deploys',
          'drift + accuracy monitoring',
          'replayable training pipelines',
          'fairness + bias audits',
        ],
      },
      {
        id: '02',
        tag: 'workstream',
        title: 'natural language processing',
        intro: 'Embedding, retrieval, classification, and structured-output pipelines. Built with typed contracts so downstream services do not break when models change.',
        bullets: [
          'rag pipelines · pgvector / qdrant',
          'structured outputs · zod / pydantic',
          'multi-language support',
          'intent + sentiment classification',
          'summarization at scale',
          'eval harnesses + replay',
        ],
      },
      {
        id: '03',
        tag: 'workstream',
        title: 'computer vision',
        intro: 'Detection, segmentation, OCR — packaged as services with versioned weights, GPU autoscaling, and observability you can actually debug from.',
        bullets: [
          'object detection · yolo / detr',
          'ocr + document parsing',
          'instance segmentation',
          'edge + on-device inference',
          'data labeling tooling',
          'gpu cost optimization',
        ],
      },
      {
        id: '04',
        tag: 'workstream',
        title: 'predictive analytics',
        intro: 'Forecasting and early-warning systems with honest confidence intervals — the kind that say "we don\'t know" when they don\'t know.',
        bullets: [
          'time-series forecasting',
          'anomaly + churn detection',
          'causal inference where it matters',
          'probabilistic outputs',
          'backtesting frameworks',
          'business-metric tracking',
        ],
      },
    ]}
    stack={[
      { k: 'training',  v: 'pytorch · jax · sklearn' },
      { k: 'serving',   v: 'fastapi · ray · triton' },
      { k: 'rag',       v: 'pgvector · qdrant · llamaindex' },
      { k: 'tracking',  v: 'mlflow · wandb · langfuse' },
      { k: 'eval',      v: 'ragas · trulens · custom' },
      { k: 'infra',     v: 'aws · gcp · modal · runpod' },
    ]}
    useCases={[
      { title: 'lead scoring engines',     desc: 'Real-time scoring of inbound leads with calibrated probabilities, feeding MOS sales agents.' },
      { title: 'rag-powered support',      desc: 'Retrieval over private knowledge bases with hallucination guards and citation surfacing.' },
      { title: 'document ocr pipelines',   desc: 'Invoice, contract, and ID extraction at scale — with confidence scoring per field.' },
      { title: 'churn forecasting',        desc: 'Probabilistic churn predictions with explainable signals — actionable, not just observable.' },
      { title: 'fraud detection',          desc: 'Streaming anomaly detection with bounded false-positive rates and analyst feedback loops.' },
      { title: 'recommendation systems',   desc: 'Hybrid retrieval + ranking with cold-start fallbacks and A/B harnesses.' },
    ]}
    ctaTitle={<>need <span style={{ color: ACCENT }}>ml</span> in production?</>}
    ctaSubtitle="From notebook to shipping service — with monitoring, rollback, and a runbook your team will actually use."
    siblings={[
      { label: 'it infrastructure', to: '/solutions/it-infrastructure' },
      { label: 'data solutions',    to: '/solutions/data' },
      { label: 'cloud services',    to: '/solutions/cloud' },
    ]}
  />
);

export default AISolutions;
