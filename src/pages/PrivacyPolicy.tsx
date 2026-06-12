import React from 'react';
import PolicyTemplate from '../components/layout/PolicyTemplate';
import { ACCENT } from '../components/layout/PageShell';

const PrivacyPolicy: React.FC = () => (
  <PolicyTemplate
    section="legal.01"
    label="privacy policy"
    lastUpdated="2026-04-01"
    title={<>privacy <span style={{ color: ACCENT }}>policy.</span></>}
    intro="Humotion AI is operated by Humos AI Pvt Ltd. We collect the minimum we need to make our products work — nothing more. Here's what, why, and how to control it."
    sections={[
      { heading: 'what we collect', paragraphs: [
        'Account data — name, email, password hash, and basic preferences.',
        'Usage data — interactions with Humo.ai (voice journals, detected emotional state, response history) and MOS workspace activity. Voice data is processed in-memory by default; you choose whether to persist it.',
        'Telemetry — anonymized performance metrics, error reports, and crash logs. No conversation content is included in telemetry.',
      ]},
      { heading: 'why we collect it', paragraphs: [
        'To provide the products. Personalization, memory graphs, and session continuity all require limited persistence.',
        'To improve the products. Aggregate, anonymized metrics inform model and UX improvements.',
        'To meet legal obligations and to respond if you contact support.',
      ]},
      { heading: 'how we protect it', paragraphs: [
        'Encryption at rest and in transit. Access controls on production systems are role-based, audited, and time-bound.',
        'We do not sell your data. We do not share content with advertisers. We do not train foundation models on your conversations unless you explicitly opt in.',
      ]},
      { heading: 'your rights', paragraphs: [
        'You can export your data, delete your account, opt out of training, and request human review of automated decisions at any time. Email founder@humotionai.com to exercise these rights — we respond within 7 days.',
      ]},
      { heading: 'contact', paragraphs: [
        'Questions, requests, or concerns: Founder@humotionai.com. Or use the contact form on this site.',
      ]},
    ]}
  />
);

export default PrivacyPolicy;
