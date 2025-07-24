import React from 'react';
import Header from "@/components/Header";
import { motion } from 'framer-motion';

const AIConsulting = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-10"
            style={{ filter: "blur(100px)" }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-2/3">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 360,
                      transition: { duration: 0.5 }
                    }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl p-2 shadow-lg"
                  >
                    <svg className="w-full h-full text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </motion.div>
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
                  >
                    AI Consulting
                  </motion.h1>
                </div>
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="text-xl text-purple-100 max-w-3xl"
                >
                  Expert guidance to help you navigate the complex world of AI and make informed decisions
                </motion.p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-b from-purple-50 to-white opacity-50"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Services */}
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-3xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800"
                >
                  Our Services
                </motion.h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "AI Strategy Development",
                      description: "Create a comprehensive roadmap for AI implementation",
                      icon: "🎯"
                    },
                    {
                      title: "Technology Assessment",
                      description: "Evaluate and select the right AI technologies for your needs",
                      icon: "🔍"
                    },
                    {
                      title: "ROI Analysis",
                      description: "Calculate potential returns on AI investments",
                      icon: "📊"
                    },
                    {
                      title: "Implementation Planning",
                      description: "Detailed planning for successful AI deployment",
                      icon: "📝"
                    }
                  ].map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-50 group"
                    >
                      <div className="flex items-start gap-4">
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="text-2xl group-hover:scale-110 transition-transform"
                        >
                          {service.icon}
                        </motion.span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{service.title}</h3>
                          <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{service.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div>
                <motion.h2 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="text-3xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-800"
                >
                  Why Choose Us
                </motion.h2>
                <div className="space-y-6">
                  {[
                    {
                      title: "Expert Guidance",
                      description: "Access to experienced AI consultants and specialists",
                      icon: "👨‍💼"
                    },
                    {
                      title: "Customized Solutions",
                      description: "Tailored strategies for your specific business needs",
                      icon: "🎨"
                    },
                    {
                      title: "Proven Methodology",
                      description: "Time-tested approach to AI implementation",
                      icon: "✅"
                    },
                    {
                      title: "Ongoing Support",
                      description: "Continuous assistance throughout your AI journey",
                      icon: "🤝"
                    }
                  ].map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ 
                        scale: 1.02,
                        y: -5,
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                      }}
                      transition={{ 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 300
                      }}
                      className="bg-white p-6 rounded-xl shadow-lg transition-all duration-300 hover:bg-purple-50 group"
                    >
                      <div className="flex items-start gap-4">
                        <motion.span 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: index * 0.1 + 0.2 }}
                          className="text-2xl group-hover:scale-110 transition-transform"
                        >
                          {benefit.icon}
                        </motion.span>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">{benefit.title}</h3>
                          <p className="text-gray-600 group-hover:text-gray-800 transition-colors">{benefit.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-700"
            style={{ filter: "blur(100px)" }}
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200"
            >
              Ready to Start Your AI Journey?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Let's discuss how our AI consulting services can help you achieve your goals
            </motion.p>
            <motion.a
              href="/contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(168, 85, 247, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
            >
              <motion.span
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="relative z-10"
              >
                Schedule a Consultation
              </motion.span>
              <motion.div
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              />
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AIConsulting; 