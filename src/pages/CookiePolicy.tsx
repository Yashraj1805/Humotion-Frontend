import React from 'react';
import PolicyTemplate from '../components/layout/PolicyTemplate';
import { ACCENT } from '../components/layout/PageShell';

const CookiePolicy: React.FC = () => (
  <PolicyTemplate
    section="legal.03"
    label="cookie policy"
    lastUpdated="2026-04-01"
    title={<>cookie <span style={{ color: ACCENT }}>policy.</span></>}
    intro="We use cookies sparingly — mostly to keep you logged in and to measure performance. No third-party tracking soup."
    sections={[
      { heading: 'what we set', paragraphs: [
        'Essential cookies — session identifiers required to keep you authenticated and to maintain workspace state. These cannot be disabled without breaking the product.',
        'Preference cookies — UI choices like sidebar collapse state, theme overrides, and last-visited section.',
        'Analytics cookies — first-party, anonymized usage measurement. No personally identifiable information transmitted.',
      ]},
      { heading: 'what we do not set', paragraphs: [
        'Cross-site advertising cookies. Third-party tracking pixels. Social-network fingerprinting. We do not load Facebook Pixel, Google Ads tracking, or comparable trackers on this site.',
      ]},
      { heading: 'how to control them', paragraphs: [
        'Most browsers let you block or clear cookies in settings. Blocking essential cookies will log you out and disable session-dependent features.',
        'For analytics opt-out, set the Do Not Track header in your browser — we honor it.',
      ]},
      { heading: 'updates', paragraphs: [
        'This policy will change if our cookie usage changes. We list the date of last update at the top of the page.',
      ]},
    ]}
  />
);

export default CookiePolicy;
