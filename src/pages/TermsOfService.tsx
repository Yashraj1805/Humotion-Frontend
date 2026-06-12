import React from 'react';
import PolicyTemplate from '../components/layout/PolicyTemplate';
import { ACCENT } from '../components/layout/PageShell';

const TermsOfService: React.FC = () => (
  <PolicyTemplate
    section="legal.02"
    label="terms of service"
    lastUpdated="2026-04-01"
    title={<>terms of <span style={{ color: ACCENT }}>service.</span></>}
    intro="By using Humotionai products you agree to these terms. They're meant to be plain — read them."
    sections={[
      { heading: 'the agreement', paragraphs: [
        'Humotion AI, operated by Humos AI Pvt Ltd ("we", "us"), provides software products including Humo.ai and MOS. By creating an account or using these products you accept these terms.',
        'These terms may be updated. Material changes get a notice — minor edits do not.',
      ]},
      { heading: 'your account', paragraphs: [
        'You are responsible for the security of your credentials and for everything that happens on your account.',
        'One person per account. Sharing logins violates these terms and risks suspension.',
      ]},
      { heading: 'acceptable use', paragraphs: [
        'Do not use Humotionai products to harass, defraud, generate illegal content, or attempt to circumvent safety mechanisms. Do not reverse engineer our systems or scrape our APIs at scale without written consent.',
        'Emotional AI surfaces are not therapy, crisis intervention, or medical advice. Do not deploy them as such.',
      ]},
      { heading: 'intellectual property', paragraphs: [
        'You retain ownership of your inputs. We retain ownership of our products. Outputs you generate via our products are yours, subject to applicable law.',
      ]},
      { heading: 'liability', paragraphs: [
        'We provide our products on an "as is" basis. To the extent permitted by law, our liability is limited to fees paid in the prior twelve months.',
        'We are not liable for indirect, incidental, or consequential damages — including from emotional or business outcomes informed by our outputs.',
      ]},
      { heading: 'termination', paragraphs: [
        'You can delete your account at any time. We may suspend or terminate accounts for violations of these terms with reasonable notice except in cases of urgent security risk.',
      ]},
    ]}
  />
);

export default TermsOfService;
