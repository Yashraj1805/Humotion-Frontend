import React from 'react';
import BlogTemplate from '../../components/layout/BlogTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const EmotionalAIFuture: React.FC = () => (
  <BlogTemplate
    id="001"
    date="2025.07"
    read="8 min"
    tag="essay"
    title={<>the <span style={{ color: ACCENT }}>future</span> of emotional ai.</>}
    subtitle="Most AI listens to your words. The next decade belongs to AI that hears how you say them — and adjusts."
    next={{ label: 'neural emotions', to: '/blog/NeuralEmotions' }}
    sections={[
      {
        heading: 'what we got wrong',
        paragraphs: [
          'For a decade, "AI" meant intent classification. Pipelines that mapped utterances to slots, slots to responses, and called it done. The user said "I am fine." The system replied with the script for "fine."',
          'But you already know — "I am fine" is rarely fine. It is fine when said calmly. It is something else when said clipped, when the silence after carries weight, when the sigh comes before the period. Words are 7% of communication. AI built on words alone is AI built on 7%.',
        ],
        pull: 'Words are 7% of communication. AI built on words alone is AI built on 7%.',
      },
      {
        heading: 'what changes in the next decade',
        paragraphs: [
          'Three shifts are already underway. First, real-time prosody — pitch, tempo, energy — becomes a first-class input alongside transcription. Second, models learn personal baselines, so "your stressed" is distinguished from "their stressed". Third, response generation conditions on emotional state, not just intent.',
          'The systems that take this seriously will feel qualitatively different. Less like a search box that talks. More like a colleague who notices you have not slept.',
        ],
      },
      {
        heading: 'where it must stay out',
        paragraphs: [
          'Emotional AI is not therapy. It is not crisis response. The systems that get this right will know where their boundary is — and route to a human, fast, when the boundary is reached.',
          'Building empathy without that discipline is building a product that will hurt people. We have seen the failure mode. The future of emotional AI depends on engineers willing to refuse to ship parts of it.',
        ],
      },
    ]}
  />
);

export default EmotionalAIFuture;
