import React from 'react';
import { PageRoot, PageHero } from '../../components/layout/PageShell';
import ContactSection from '../../components/ContactSection';

const Contact: React.FC = () => (
  <PageRoot>
    <PageHero
      section="05"
      label="contact"
      eyebrow="engineering reads every message"
      titleTop={<>start a</>}
      titleBottom="conversation."
      subtitle="Pilot scoping, hiring an AI workforce, or just curious — drop a line. We respond fast."
      meta={
        <div className="space-y-1">
          <div className="opacity-50">// response</div>
          <div className="text-white">{'< 24h'}</div>
          <div className="opacity-50 mt-2">// engagement</div>
          <div className="text-white">contract</div>
        </div>
      }
    />
    <ContactSection />
  </PageRoot>
);

export default Contact;
