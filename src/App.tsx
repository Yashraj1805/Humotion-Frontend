import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ScrollProgress from './components/common/ScrollProgress';
import { ACCENT } from './lib/tokens';
// Landing page stays eager so the homepage paints instantly.
import Index from './pages/Index';

// All other routes are code-split — each becomes its own chunk, loaded on demand.
const Services = lazy(() => import('./pages/Services'));
const AIConsulting = lazy(() => import('./pages/services/AIConsulting'));
const CustomDevelopment = lazy(() => import('./pages/services/CustomDevelopment'));
const ProcessAutomation = lazy(() => import('./pages/services/ProcessAutomation'));
const AISecurity = lazy(() => import('./pages/services/AISecurity'));
const About = lazy(() => import('./pages/about/About'));
const Solutions = lazy(() => import('./pages/solutions/index'));
const AISolutions = lazy(() => import('./pages/solutions/AISolutions'));
const DataSolutions = lazy(() => import('./pages/solutions/DataSolutions'));
const ITInfrastructure = lazy(() => import('./pages/solutions/ITInfrastructure'));
const CloudServices = lazy(() => import('./pages/solutions/CloudServices'));
const Contact = lazy(() => import('./pages/contact/Contact'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const NeuralEmotions = lazy(() => import('./pages/blog/NeuralEmotions'));
const AIMentalHealth = lazy(() => import('./pages/blog/AIMentalHealth'));
const EmotionalAIFuture = lazy(() => import('./pages/blog/EmotionalAIFuture'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));
const CookiePolicy = lazy(() => import('./pages/CookiePolicy'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Profile = lazy(() => import('./pages/Profile'));
const Settings = lazy(() => import('./pages/Settings'));
const HumoProduct = lazy(() => import('./pages/HumoProduct'));
const MosProduct = lazy(() => import('./pages/MosProduct'));

const RouteFallback: React.FC = () => (
  <div className="min-h-[60vh] flex items-center justify-center bg-[#0a0a0a]">
    <span className="mono text-[11px] uppercase tracking-[0.22em] text-white/40 animate-pulse">
      loading<span style={{ color: ACCENT }}>_</span>
    </span>
  </div>
);

const AnimatedRoutes: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -4 }}
        transition={{ duration: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
      >
        <Suspense fallback={<RouteFallback />}>
        <Routes location={location}>
          <Route path="/" element={<Index />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/ai-consulting" element={<AIConsulting />} />
          <Route path="/services/custom-development" element={<CustomDevelopment />} />
          <Route path="/services/process-automation" element={<ProcessAutomation />} />
          <Route path="/services/ai-security" element={<AISecurity />} />
          <Route path="/about" element={<About />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/ai" element={<AISolutions />} />
          <Route path="/solutions/data" element={<DataSolutions />} />
          <Route path="/solutions/it-infrastructure" element={<ITInfrastructure />} />
          <Route path="/solutions/cloud" element={<CloudServices />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/blog/NeuralEmotions" element={<NeuralEmotions />} />
          <Route path="/blog/AIMentalHealth" element={<AIMentalHealth />} />
          <Route path="/blog/EmotionalAIFuture" element={<EmotionalAIFuture />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/humo" element={<HumoProduct />} />
          <Route path="/mos" element={<MosProduct />} />
          <Route path="/products/mos" element={<MosProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <ScrollProgress />
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <ScrollToTop />
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
