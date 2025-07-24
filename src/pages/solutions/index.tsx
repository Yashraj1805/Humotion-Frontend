import React from 'react';
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const solutions = [
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Transform your business with cutting-edge AI technologies',
      icon: (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </motion.div>
      ),
      color: 'from-purple-500 to-purple-600',
      link: '/solutions/ai'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Build a robust and scalable IT infrastructure for your business',
      icon: (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
          </svg>
        </motion.div>
      ),
      color: 'from-blue-500 to-blue-600',
      link: '/solutions/it-infrastructure'
    },
    {
      id: 'data-solutions',
      title: 'Data Solutions',
      description: 'Harness the power of your data with advanced analytics',
      icon: (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
          </svg>
        </motion.div>
      ),
      color: 'from-green-500 to-green-600',
      link: '/solutions/data'
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Scale your business with flexible and secure cloud solutions',
      icon: (
        <motion.div
          whileHover={{ scale: 1.1 }}
          className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center"
        >
          <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
          </svg>
        </motion.div>
      ),
      color: 'from-indigo-500 to-indigo-600',
      link: '/solutions/cloud'
    }
  ];

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
              Our <span className="gradient-text">Solutions</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 max-w-3xl"
            >
              Comprehensive technology solutions to drive your business forward
            </motion.p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      {solution.icon}
                      <h3 className="text-2xl font-bold text-gray-900 ml-4">{solution.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-6">{solution.description}</p>
                    <Link
                      to={solution.link}
                      className={`inline-block bg-gradient-to-r ${solution.color} text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-lg hover:shadow-xl`}
                    >
                      Learn More
                    </Link>
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
              Let's discuss how our solutions can help you achieve your goals
            </motion.p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </motion.a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Solutions; 