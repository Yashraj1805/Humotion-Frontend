import HeroSection from '../components/HeroSection';
import ProductSection from '../components/ProductSection';
import ServicesSection from '../components/ServicesSection';
import SolutionsSection from '../components/SolutionsSection';
import AboutSection from '../components/AboutSection';
import BlogInsights from '../components/BlogInsights';
import ContactSection from '../components/ContactSection';
import ChatWidget from '../components/ChatWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#f2f2f2]">
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
