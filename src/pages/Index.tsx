import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import AboutSection from '../components/AboutSection';
import BlogInsights from '../components/BlogInsights';
import ContactSection from '../components/ContactSection';
import ChatWidget from '../components/ChatWidget';
import Seo, { SITE_URL } from '../components/Seo';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f2f2]">
      <Seo
        title="HumotionAI — Configurable AI Workforces for Real Businesses"
        description="HumotionAI ships configurable AI agents and MOS, an AI workforce operating system, for real businesses. Modular, contract-first agents — same code, every vertical."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'HumotionAI',
          url: `${SITE_URL}/`,
          publisher: { '@type': 'Organization', name: 'HumotionAI', legalName: 'Humos AI Pvt Ltd' },
        }}
      />
      <HeroSection />
      <ProductSection />
      <ServicesSection />
      <SolutionsSection />
      <AboutSection />
      <BlogInsights />
      <ContactSection />
      <ChatWidget />
    </div>
  );
};

export default Index;
