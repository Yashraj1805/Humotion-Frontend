import React from 'react';
import BlogTemplate from '../../components/layout/BlogTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const AIMentalHealth: React.FC = () => (
  <BlogTemplate
    id="003"
    date="2025.05"
    read="6 min"
    tag="opinion"
    title={<>ai-powered <span style={{ color: ACCENT }}>mental health.</span></>}
    subtitle="Empathetic AI is becoming infrastructure for emotional well-being. But the question is not how far it can go — it is where it must stop."
    next={{ label: 'emotional ai future', to: '/blog/EmotionalAIFuture' }}
    sections={[
      {
        heading: 'what AI can responsibly do',
        paragraphs: [
          'Daily check-ins. Reflection prompts. Pattern surfacing across weeks. Gentle nudges toward sleep, sunlight, conversation. Companionship at 3am when no human can be reached. These are real, measurable benefits — and AI is uniquely suited to deliver them at scale.',
          'Humo.ai is built for this layer. It listens, remembers, and reflects — without claiming to treat.',
        ],
      },
      {
        heading: 'what AI must not do',
        paragraphs: [
          'Diagnose. Prescribe. Replace clinical care. Handle crisis. Reassure during active suicidal ideation. These boundaries are not regulatory — they are moral. A system that crosses them causes harm regardless of intent.',
          'The right design is loud about the boundary. Visible escalation paths. Clear "this is not therapy" framing. Trained refusal at the right moments. Building this well is harder than building the helpful parts — but it is the price of shipping responsibly.',
        ],
        pull: 'The question is not how far AI can go — it is where it must stop.',
      },
      {
        heading: 'a working stance',
        paragraphs: [
          'Treat emotional AI like a thoughtful friend, not a clinician. Friends can listen, remember, share patterns, and tell you to get help. Friends do not write prescriptions. The systems that internalize this distinction will earn trust. The ones that blur it will lose it — fast.',
        ],
      },
    ]}
  />
);

export default AIMentalHealth;
