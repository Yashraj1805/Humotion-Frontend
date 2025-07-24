import React from 'react';
import { motion } from 'framer-motion';
import Header from "@/components/Header";
import { Link } from "react-router-dom";
import { Brain, Code, Cpu, Shield } from 'lucide-react';

const services = [
  {
    title: "AI Consulting",
    description: "Expert guidance on implementing AI solutions in your business",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-600",
    link: "/services/ai-consulting"
  },
  {
    title: "Custom Development",
    description: "Tailored software solutions to meet your specific needs",
    icon: <Code className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-600",
    link: "/services/custom-development"
  },
  {
    title: "Process Automation",
    description: "Streamline your operations with intelligent automation",
    icon: <Cpu className="w-8 h-8" />,
    color: "from-green-500 to-emerald-600",
    link: "/services/process-automation"
  },
  {
    title: "AI Security",
    description: "Protect your AI systems with advanced security measures",
    icon: <Shield className="w-8 h-8" />,
    color: "from-red-500 to-orange-600",
    link: "/services/ai-security"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Our <span className="gradient-text">Services</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl"
            >
              Discover how our AI-powered solutions can transform your business and drive innovation.
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all"
                >
                  <div className={`w-16 h-16 mb-6 rounded-2xl bg-gradient-to-r ${service.color} p-4 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    to={service.link}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-gray-900 mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our services can help you achieve your goals
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
              >
                Get Started
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services; 