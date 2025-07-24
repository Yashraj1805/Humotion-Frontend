import React, { useState } from 'react';
import Header from "@/components/Header";
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    id: 1,
    title: "AI Consulting",
    description: "Strategic AI solutions and expert guidance for your business",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </motion.div>
    ),
    features: [
      "AI Strategy Development",
      "Technology Assessment",
      "Implementation Planning",
      "ROI Analysis"
    ],
    benefits: [
      "Expert Guidance",
      "Cost Optimization",
      "Risk Mitigation",
      "Competitive Advantage"
    ]
  },
  {
    id: 2,
    title: "Custom Development",
    description: "Tailored AI solutions built for your specific needs",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      </motion.div>
    ),
    features: [
      "Custom AI Models",
      "API Development",
      "Integration Services",
      "Scalable Solutions"
    ],
    benefits: [
      "Tailored Solutions",
      "Flexible Architecture",
      "Future-Proof Design",
      "Seamless Integration"
    ]
  },
  {
    id: 3,
    title: "Process Automation",
    description: "Streamline operations with intelligent automation",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </motion.div>
    ),
    features: [
      "Workflow Automation",
      "Task Optimization",
      "Process Monitoring",
      "Performance Analytics"
    ],
    benefits: [
      "Increased Efficiency",
      "Reduced Errors",
      "Cost Savings",
      "24/7 Operation"
    ]
  },
  {
    id: 4,
    title: "AI Security",
    description: "Advanced security solutions powered by AI",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      </motion.div>
    ),
    features: [
      "Threat Detection",
      "Real-time Monitoring",
      "Vulnerability Assessment",
      "Security Analytics"
    ],
    benefits: [
      "Enhanced Protection",
      "Proactive Defense",
      "Compliance Support",
      "Risk Reduction"
    ]
  }
];

const Services = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6"
            >
              Our Services
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl"
            >
              Cutting-edge AI services for emotional intelligence and human-AI interaction
            </motion.p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Service Header */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                    <div className="absolute top-0 left-0 w-full h-full">
                      {[...Array(10)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 bg-white/20 rounded-full"
                          style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                          }}
                          animate={{
                            y: [0, -20, 0],
                            opacity: [0.2, 0.5, 0.2],
                          }}
                          transition={{
                            duration: 2 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                          }}
                        />
                      ))}
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center space-x-4 mb-4">
                        {service.icon}
                        <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                      </div>
                      <p className="text-blue-200">{service.description}</p>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-center text-gray-700"
                            whileHover={{ x: 5 }}
                            onHoverStart={() => setHoveredFeature(idx)}
                            onHoverEnd={() => setHoveredFeature(null)}
                          >
                            <motion.div
                              animate={{
                                scale: hoveredFeature === idx ? 1.2 : 1,
                                rotate: hoveredFeature === idx ? 360 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </motion.div>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-center text-gray-700"
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              animate={{
                                scale: hoveredFeature === idx + service.features.length ? 1.2 : 1,
                                rotate: hoveredFeature === idx + service.features.length ? 360 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </motion.div>
                            {benefit}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
                      onClick={() => setActiveService(activeService === service.id ? null : service.id)}
                    >
                      {activeService === service.id ? 'Hide Details' : 'Learn More'}
                    </motion.button>

                    <AnimatePresence>
                      {activeService === service.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-blue-50 rounded-lg"
                        >
                          <p className="text-blue-800">
                            Ready to implement {service.title} in your organization? Contact us for a personalized demo and consultation.
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our services can help you achieve your goals
            </motion.p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Demo
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services; 