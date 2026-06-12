import React from 'react';
import { PageRoot, PageHero } from '../../components/layout/PageShell';
import ContactSection from '../../components/ContactSection';
import Seo from '@/components/Seo';

const Contact: React.FC = () => (
  <PageRoot>
    <Seo
      title="Contact HumotionAI — Start a Conversation"
      description="Pilot scoping, hiring an AI workforce, or just curious? Contact HumotionAI (Humos AI Pvt Ltd). Engineering reads every message and responds in under 24 hours."
      path="/contact"
    />
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
