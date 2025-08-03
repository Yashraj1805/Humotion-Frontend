import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProductSection from "../components/ProductSection";
import ServicesSection from "../components/ServicesSection";
import AboutSection from "../components/AboutSection";
import SolutionsSection from "../components/SolutionsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogInsights from "../components/BlogInsights";
import ContactSection from "../components/ContactSection";
import ChatWidget from "../components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductSection />
      <ServicesSection />
      <AboutSection />
      <SolutionsSection />
      <TestimonialsSection />
      <BlogInsights />
      <ContactSection />
      <ChatWidget />
    </div>
  );
};

export default Index;
