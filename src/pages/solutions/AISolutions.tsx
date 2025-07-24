import React, { useState } from 'react';
import Header from "@/components/Header";
import { motion, AnimatePresence } from 'framer-motion';

const aiSolutions = [
  {
    id: 1,
    title: "Machine Learning Models",
    description: "Custom ML models tailored to your specific business needs",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      </motion.div>
    ),
    features: [
      "Custom Model Development",
      "Model Training & Tuning",
      "Performance Optimization",
      "Continuous Learning"
    ],
    benefits: [
      "Improved Accuracy",
      "Better Predictions",
      "Cost Efficiency",
      "Scalable Solutions"
    ]
  },
  {
    id: 2,
    title: "Natural Language Processing",
    description: "Advanced text analysis and language understanding capabilities",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
        </svg>
      </motion.div>
    ),
    features: [
      "Text Analysis",
      "Sentiment Analysis",
      "Language Translation",
      "Chatbot Development"
    ],
    benefits: [
      "Better Communication",
      "Automated Support",
      "Global Reach",
      "Enhanced User Experience"
    ]
  },
  {
    id: 3,
    title: "Computer Vision",
    description: "Image and video analysis for enhanced decision making",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </motion.div>
    ),
    features: [
      "Object Detection",
      "Image Classification",
      "Video Analytics",
      "Quality Control"
    ],
    benefits: [
      "Automated Inspection",
      "Enhanced Security",
      "Process Optimization",
      "Quality Assurance"
    ]
  },
  {
    id: 4,
    title: "AI Integration",
    description: "Seamless integration of AI with your existing systems",
    icon: (
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        className="w-20 h-20 bg-gradient-to-br from-red-400 to-red-600 rounded-2xl p-4 shadow-lg"
      >
        <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      </motion.div>
    ),
    features: [
      "System Integration",
      "API Development",
      "Workflow Automation",
      "Legacy System Support"
    ],
    benefits: [
      "Seamless Operations",
      "Improved Efficiency",
      "Reduced Complexity",
      "Better Collaboration"
    ]
  }
];

const AISolutions = () => {
  const [activeSolution, setActiveSolution] = useState<number | null>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-2 shadow-lg"
                  >
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold"
                  >
                    AI Solutions
                  </motion.h1>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-purple-100 max-w-3xl"
                >
                  Transform your business with cutting-edge AI technology and intelligent automation
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {aiSolutions.map((solution) => (
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
                    <div className="relative">
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
                    <div className="mb-6">
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
              Ready to Transform Your Business with AI?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our AI solutions can help you achieve your goals
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

export default AISolutions; 