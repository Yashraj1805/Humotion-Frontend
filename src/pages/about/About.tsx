import React from 'react';
import Header from "@/components/Header";
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.1, scale: 1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-10"
            style={{ filter: "blur(100px)" }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              About Humotion
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-blue-100 max-w-3xl"
            >
              Pioneering the future of emotional intelligence through artificial intelligence
            </motion.p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-blue-50 opacity-70"
          />
          {/* Animated background elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [0.8, 1, 0.8],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [0.8, 1, 0.8],
              rotate: [0, -5, 0]
            }}
            transition={{ 
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
            className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 blur-3xl"
          />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="relative"
              >
                {/* Floating orbs */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 0 }}
                  animate={{ 
                    opacity: [0.2, 0.3, 0.2],
                    scale: [0.8, 1, 0.8],
                    y: [-10, 10, -10]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, y: 0 }}
                  animate={{ 
                    opacity: [0.2, 0.3, 0.2],
                    scale: [0.8, 1, 0.8],
                    y: [10, -10, 10]
                  }}
                  transition={{ 
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: 1
                  }}
                  className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-20 blur-2xl"
                />
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-100"
                >
                  <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800"
                  >
                    Our Mission
                  </motion.h2>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="space-y-6"
                  >
                    <motion.p 
                      whileHover={{ x: 5 }}
                      className="text-gray-600 text-lg leading-relaxed hover:text-gray-800 transition-colors"
                    >
                      At Humotion, we're dedicated to bridging the gap between human emotions and artificial intelligence. 
                      Our mission is to create technology that understands, responds to, and enhances human emotional well-being.
                    </motion.p>
                    <motion.p 
                      whileHover={{ x: 5 }}
                      className="text-gray-600 text-lg leading-relaxed hover:text-gray-800 transition-colors"
                    >
                      We believe that the future of AI lies in its ability to understand and work with human emotions, 
                      creating more meaningful and effective interactions between humans and machines.
                    </motion.p>
                  </motion.div>
                  {/* Decorative elements */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="absolute -bottom-2 -right-2 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 blur-xl"
                  />
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute -top-2 -left-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full opacity-10 blur-xl"
                  />
                </motion.div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                className="relative"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-20 blur-2xl"
                />
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300"
                >
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-2xl font-bold text-gray-900 mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800"
                  >
                    Our Values
                  </motion.h3>
                  <ul className="space-y-6">
                    {[
                      {
                        title: "Innovation",
                        description: "Pushing the boundaries of what's possible in emotional AI",
                        icon: "💡"
                      },
                      {
                        title: "Ethics",
                        description: "Developing AI with human well-being at its core",
                        icon: "🤝"
                      },
                      {
                        title: "Impact",
                        description: "Creating meaningful change in how humans interact with technology",
                        icon: "🚀"
                      }
                    ].map((value, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-start group"
                      >
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.2, rotate: 360 }}
                          className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg p-2 mr-4 shadow-lg group-hover:shadow-xl transition-all duration-300"
                        >
                          <span className="text-xl">{value.icon}</span>
                        </motion.div>
                        <div>
                          <motion.h4 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="font-semibold text-gray-900 text-lg mb-1 group-hover:text-blue-600 transition-colors"
                          >
                            {value.title}
                          </motion.h4>
                          <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 + index * 0.1 }}
                            className="text-gray-600 group-hover:text-gray-800 transition-colors"
                          >
                            {value.description}
                          </motion.p>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Team Section */}
      

        {/* CTA Section */}
        <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700"
            style={{ filter: "blur(100px)" }}
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200"
            >
              Join Us in Shaping the Future
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Be part of our mission to revolutionize emotional intelligence through AI
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl relative overflow-hidden group"
              >
                <motion.span
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="relative z-10"
                >
                  Get in Touch
                </motion.span>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About; 