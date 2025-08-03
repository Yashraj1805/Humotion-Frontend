import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBrain, FaHeart, FaEye, FaUsers, FaMicrophone, FaChartLine, FaShieldAlt, FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const HumoProduct = () => {
  const { isLoggedIn } = useAuth();
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <FaBrain className="text-3xl" />,
      title: "Emotion Engine",
      description: "Real-time emotional detection from voice tone, capturing prosodic, spectral, and temporal features.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaMicrophone className="text-3xl" />,
      title: "Voice Journaling",
      description: "Emotion-aware voice journaling that adapts to your emotional patterns and provides empathetic responses.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Adaptive Memory",
      description: "Memory graph that learns your emotional patterns over time, making every interaction more meaningful.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      title: "Voice Cloning",
      description: "Interact with responses in the voices of people you trust, creating genuine emotional connection.",
      color: "from-orange-500 to-red-500"
    }
  ];



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Humo.ai</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8">
                Your emotionally intelligent AI companion that understands not just what you say, but how you feel when you say it.
              </p>
                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Link 
                     to="/register" 
                     className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg"
                   >
                     Get Started Free
                     <FaArrowRight className="ml-2" />
                   </Link>
                 </motion.div>
                 <motion.div
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                 >
                   <Link 
                     to="/contact" 
                     className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg"
                   >
                     Schedule Demo
                   </Link>
                 </motion.div>
               </div>
            </motion.div>

            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Revolutionary Features
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Experience the future of emotional AI with cutting-edge technology designed for genuine human connection.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-gradient-to-br ${feature.color} rounded-2xl p-8 hover:scale-105 transition-all duration-300 cursor-pointer`}
                  onClick={() => setActiveFeature(index)}
                >
                  <div className="text-white mb-6">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/90 text-lg">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                How Humo.ai Works
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Voice Input",
                  description: "Speak naturally to Humo.ai. Our Emotion Engine analyzes your voice tone in real-time."
                },
                {
                  step: "02",
                  title: "Emotion Detection",
                  description: "Advanced AI detects emotional states from prosodic, spectral, and temporal features."
                },
                {
                  step: "03",
                  title: "Empathetic Response",
                  description: "Humo.ai responds with genuine understanding and emotional intelligence."
                }
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/80 text-lg">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Experience Genuine Connection?
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of users who've found emotional companionship and understanding with Humo.ai. Experience what it feels like to be truly heard and understood.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/register" 
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg text-lg"
                  >
                    Get Started Free
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20 text-lg"
                  >
                    Schedule Demo
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HumoProduct; 