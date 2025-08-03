import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBrain, FaHeart, FaEye, FaUsers, FaPlay } from 'react-icons/fa';
import { useAuth } from '../contexts/AuthContext';

const ProductSection: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const [showFullContent, setShowFullContent] = useState(false);

  const handleReadMore = () => {
    if (isLoggedIn) {
      setShowFullContent(true);
    } else {
      // Redirect to login page
      window.location.href = '/login';
    }
  };

  const features = [
    {
      icon: <FaBrain className="text-2xl" />,
      title: "Smart Detection",
      description: "Understands your emotions through voice tone and patterns."
    },
    {
      icon: <FaHeart className="text-2xl" />,
      title: "Voice Journal",
      description: "Personal journaling that adapts to your mood."
    },
    {
      icon: <FaEye className="text-2xl" />,
      title: "Memory AI",
      description: "Learns your patterns for better conversations."
    },
    {
      icon: <FaUsers className="text-2xl" />,
      title: "Voice Clone",
      description: "Chat with familiar voices you trust."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Humo.ai</span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your AI companion that gets how you feel, not just what you say.
            </p>
          </motion.div>

          {/* Product Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-lg p-8 border border-white/20 shadow-2xl">
                {/* Product Showcase */}
                <div className="relative w-full h-96 flex items-center justify-center">
                  <img 
                    src="/744e7deb-d00d-4d22-ad20-ab78a7f904ac.jpeg" 
                    alt="Humo.ai AI Companion" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl"></div>
                  
                  {/* Product Badge */}
                  <div className="absolute top-4 left-4 z-20">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      NEW
                    </div>
                  </div>
                </div>
                
                {/* Product Info */}
                <div className="mt-6 text-center">
                  <h4 className="text-white font-bold text-lg mb-2">Humo.ai Companion</h4>
                  <p className="text-white/70 text-sm">Your emotional AI friend</p>
                  <div className="flex justify-center mt-4 space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>
             
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-2xl -z-10"></div>
            </motion.div>

           {/* Product Description */}
           <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="space-y-6"
           >
             <div className="space-y-4">
               <h3 className="text-3xl font-bold text-white mb-4">
                 Your Emotional Companion
               </h3>
               
               <div className="space-y-6">
                 <p className="text-white/80 text-lg">
                   Finally, an AI that actually gets you. Humo.ai understands your emotions and responds with real empathy.
                 </p>
                 
                 <div className="flex flex-col sm:flex-row gap-4">
                   {isLoggedIn ? (
                     <motion.div
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                     >
                       <Link 
                         to="/humo"
                         className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                       >
                         Try Humo.ai
                         <FaArrowRight className="ml-2" />
                       </Link>
                     </motion.div>
                   ) : (
                     <motion.button
                       whileHover={{ scale: 1.05 }}
                       whileTap={{ scale: 0.95 }}
                       onClick={handleReadMore}
                       className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                     >
                       Login to Try
                       <FaArrowRight className="ml-2" />
                     </motion.button>
                   )}
                   
                   <motion.div
                     whileHover={{ scale: 1.05 }}
                     whileTap={{ scale: 0.95 }}
                   >
                     <Link 
                       to="/register"
                       className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                     >
                       Start Free
                     </Link>
                   </motion.div>
                 </div>
               </div>
             </div>
           </motion.div>
         </div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 cursor-pointer group"
              >
                <motion.div 
                  className="text-blue-400 mb-4 group-hover:text-blue-300 transition-colors duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">{feature.title}</h3>
                <p className="text-white/80 group-hover:text-white/90 transition-colors duration-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for Real Connection?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Join users who found their perfect AI companion. Experience conversations that actually understand you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/register" 
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    Start Free
                    <FaArrowRight className="ml-2" />
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
                  >
                    See Demo
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;