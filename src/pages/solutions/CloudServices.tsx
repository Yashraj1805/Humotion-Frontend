import React, { useState } from 'react';
import Header from "@/components/Header";
import { motion, AnimatePresence } from 'framer-motion';

const cloudServices = [
  {
    id: 1,
    title: "Cloud Migration",
    description: "Seamless migration of your infrastructure to the cloud",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      </motion.div>
    ),
    features: [
      "Infrastructure Assessment",
      "Migration Planning",
      "Data Transfer",
      "Post-Migration Support"
    ],
    benefits: [
      "Reduced Costs",
      "Improved Scalability",
      "Enhanced Security",
      "Better Performance"
    ]
  },
  {
    id: 2,
    title: "Cloud Security",
    description: "Comprehensive security solutions for cloud environments",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      </motion.div>
    ),
    features: [
      "Threat Detection",
      "Access Control",
      "Data Encryption",
      "Security Monitoring"
    ],
    benefits: [
      "Enhanced Protection",
      "Compliance Ready",
      "Risk Mitigation",
      "24/7 Monitoring"
    ]
  },
  {
    id: 3,
    title: "Cloud Optimization",
    description: "Optimize your cloud resources for maximum efficiency",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </motion.div>
    ),
    features: [
      "Resource Optimization",
      "Cost Management",
      "Performance Tuning",
      "Auto-scaling"
    ],
    benefits: [
      "Cost Reduction",
      "Better Performance",
      "Resource Efficiency",
      "Scalable Solutions"
    ]
  },
  {
    id: 4,
    title: "Cloud Management",
    description: "Comprehensive management of your cloud infrastructure",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.div>
    ),
    features: [
      "Infrastructure Management",
      "Monitoring & Alerting",
      "Backup & Recovery",
      "Service Management"
    ],
    benefits: [
      "Simplified Management",
      "Proactive Monitoring",
      "Disaster Recovery",
      "Service Reliability"
    ]
  }
];

const CloudServices = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl p-2 shadow-lg"
                  >
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold"
                  >
                    Cloud Services
                  </motion.h1>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-blue-100 max-w-3xl"
                >
                  Comprehensive cloud solutions to transform your business infrastructure
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cloudServices.map((service) => (
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
                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                              <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                            Ready to implement {service.title} in your organization? Contact us for a personalized consultation.
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
              Ready to Transform Your Cloud Infrastructure?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our cloud services can help you achieve your goals
            </motion.p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CloudServices; 