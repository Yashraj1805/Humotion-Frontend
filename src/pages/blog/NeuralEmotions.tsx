import React from 'react';
import BlogTemplate from '../../components/layout/BlogTemplate';
import { ACCENT } from '../../components/layout/PageShell';

const NeuralEmotions: React.FC = () => (
  <BlogTemplate
    id="002"
    date="2025.06"
    read="12 min"
    tag="deep-dive"
    title={<>neural networks &amp; <span style={{ color: ACCENT }}>human emotions.</span></>}
    subtitle="A technical look at how spectral and temporal features become an emotional state vector — and why most systems get it wrong."
    next={{ label: 'ai mental health', to: '/blog/AIMentalHealth' }}
    sections={[
      {
        heading: 'the signal stack',
        paragraphs: [
          'Voice carries three orthogonal information streams. Linguistic — what you said. Prosodic — how you said it (pitch contour, speech rate, energy). Spectral — the timbre and texture of your voice (formants, harmonics, breathiness).',
          'Most ASR systems strip everything but linguistic. Emotional AI inverts this — the discarded streams are where the signal lives.',
        ],
      },
      {
        heading: 'feature extraction',
        paragraphs: [
          'We work in three feature spaces. Fundamental frequency (F0) contours tell us about arousal and intent. Mel-frequency cepstral coefficients (MFCCs) capture vocal-tract shape — useful for tension and effort. Temporal features — pause distribution, speech rate variance, vowel duration — encode hesitation and confidence.',
          'These are stacked into a windowed feature tensor and fed to a small transformer that emits a probability distribution over emotion categories plus continuous valence/arousal scores.',
        ],
        pull: 'The discarded streams are where the signal lives.',
      },
      {
        heading: 'why most systems are bad at this',
        paragraphs: [
          'Two common failures. One, training on actors. Acted emotion is exaggerated and culturally encoded — it generalizes poorly to actual users. Two, ignoring per-speaker baselines. "Loud" for a soft talker is "normal" for a loud one. Without personal calibration, your model is forever surprised by people.',
          'The fix is unglamorous: collect spontaneous data, normalize per speaker, and validate against self-report — not the actor\'s label.',
        ],
      },
    ]}
  />
);

export default NeuralEmotions;
