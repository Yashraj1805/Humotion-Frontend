import React, { useState } from 'react';
import Header from "@/components/Header";
import { motion, AnimatePresence } from 'framer-motion';

const dataSolutions = [
  {
    id: 1,
    title: "Data Analytics",
    description: "Advanced analytics solutions for data-driven insights",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      </motion.div>
    ),
    features: [
      "Predictive Analytics",
      "Business Intelligence",
      "Data Visualization",
      "Real-time Analytics"
    ],
    benefits: [
      "Data-Driven Decisions",
      "Improved Efficiency",
      "Better Insights",
      "Competitive Advantage"
    ]
  },
  {
    id: 2,
    title: "Data Management",
    description: "Comprehensive data management and governance",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      </motion.div>
    ),
    features: [
      "Data Governance",
      "Data Quality",
      "Data Security",
      "Compliance Management"
    ],
    benefits: [
      "Data Integrity",
      "Regulatory Compliance",
      "Risk Mitigation",
      "Trusted Data"
    ]
  },
  {
    id: 3,
    title: "Data Integration",
    description: "Seamless integration of data across systems",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </motion.div>
    ),
    features: [
      "ETL Processes",
      "API Integration",
      "Data Migration",
      "Real-time Sync"
    ],
    benefits: [
      "Unified Data",
      "Improved Access",
      "Reduced Complexity",
      "Better Collaboration"
    ]
  },
  {
    id: 4,
    title: "Data Warehousing",
    description: "Scalable and efficient data warehousing solutions",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      </motion.div>
    ),
    features: [
      "Data Storage",
      "Query Optimization",
      "Data Modeling",
      "Performance Tuning"
    ],
    benefits: [
      "Fast Access",
      "Cost Efficiency",
      "Scalable Storage",
      "High Performance"
    ]
  }
];

const DataSolutions = () => {
  const [activeSolution, setActiveSolution] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl p-2 shadow-lg"
                  >
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                    </svg>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold"
                  >
                    Data Solutions
                  </motion.h1>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-green-100 max-w-3xl"
                >
                  Harness the power of your data with advanced analytics and insights
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {dataSolutions.map((solution) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Solution Header */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-900 to-gray-800 p-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
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
                        {solution.icon}
                        <h2 className="text-2xl font-bold text-white">{solution.title}</h2>
                      </div>
                      <p className="text-purple-200">{solution.description}</p>
                    </div>
                  </div>

                  {/* Solution Content */}
                  <div className="p-6">
                    {/* Features */}
                    <div className="mb-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Features
                      </h3>
                      <ul className="space-y-2">
                        {solution.features.map((feature, idx) => (
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
                              <svg className="w-5 h-5 text-purple-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                        <svg className="w-5 h-5 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        Benefits
                      </h3>
                      <ul className="space-y-2">
                        {solution.benefits.map((benefit, idx) => (
                          <motion.li 
                            key={idx}
                            className="flex items-center text-gray-700"
                            whileHover={{ x: 5 }}
                          >
                            <motion.div
                              animate={{
                                scale: hoveredFeature === idx + solution.features.length ? 1.2 : 1,
                                rotate: hoveredFeature === idx + solution.features.length ? 360 : 0
                              }}
                              transition={{ duration: 0.3 }}
                            >
                              <svg className="w-5 h-5 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                      className="mt-6 w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                      onClick={() => setActiveSolution(activeSolution === solution.id ? null : solution.id)}
                    >
                      {activeSolution === solution.id ? 'Hide Details' : 'Learn More'}
                    </motion.button>

                    <AnimatePresence>
                      {activeSolution === solution.id && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-4 p-4 bg-purple-50 rounded-lg"
                        >
                          <p className="text-purple-800">
                            Ready to implement {solution.title} in your organization? Contact us for a personalized consultation.
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
              Ready to Transform Your Data Strategy?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our data solutions can help you achieve your goals
            </motion.p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DataSolutions; 