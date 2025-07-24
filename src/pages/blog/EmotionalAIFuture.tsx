import React from 'react';
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaShare, FaHeart, FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const EmotionalAIFuture = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const shareUrl = window.location.href;
  const shareTitle = "The Future of Emotional AI";

  const shareOptions = [
    { icon: FaTwitter, url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, color: "hover:text-blue-400" },
    { icon: FaLinkedin, url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, color: "hover:text-blue-600" },
    { icon: FaFacebook, url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, color: "hover:text-blue-700" },
    { icon: FaWhatsapp, url: `https://wa.me/?text=${shareTitle}%20${shareUrl}`, color: "hover:text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Header />
      <motion.div 
        style={{ opacity, scale }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50"
      />
      <main className="pt-20 relative z-10">
        <article className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-8"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                The Future of Emotional AI
              </h1>
              <div className="flex items-center text-gray-600 mb-8 space-x-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  <span>March 15, 2024</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center space-x-4 ml-auto">
                  <div className="flex space-x-3">
                    {shareOptions.map((option, index) => (
                      <motion.a
                        key={index}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-600 ${option.color} transition-colors`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <option.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                  <button className="hover:text-red-600 transition-colors">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative h-[400px] md:h-[500px] mb-12 rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src="https://specials-images.forbesimg.com/imageserve/65a5cef44a7f1efc194e5907/Human-Vs-Robot/960x0.jpg?fit=scale"
                alt="The Future of Emotional AI"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                Artificial Intelligence is rapidly evolving beyond just processing data and performing tasks. 
                The next frontier is emotional intelligence - the ability to understand, interpret, and respond 
                to human emotions in a meaningful way.
              </p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Understanding Emotional AI
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Emotional AI, also known as affective computing, combines artificial intelligence with 
                  emotional intelligence to create systems that can recognize, understand, and respond to 
                  human emotions. This technology uses various inputs such as facial expressions, voice 
                  patterns, and physiological signals to interpret emotional states.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Current Applications
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Today, emotional AI is being used in various fields:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  {[
                    "Mental health support and therapy",
                    "Customer service and experience",
                    "Education and personalized learning",
                    "Healthcare and patient care",
                    "Human resources and employee well-being"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700 group"
                    >
                      <motion.span 
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3 group-hover:scale-150 transition-all duration-300 group-hover:bg-white/80 group-hover:backdrop-blur-sm group-hover:shadow-lg"
                        whileHover={{ scale: 1.5 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  The Road Ahead
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The future of emotional AI holds immense potential. We're moving towards systems that can:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  {[
                    "Enhanced emotional intelligence in AI systems",
                    "More natural and empathetic interactions",
                    "Better understanding of human emotions",
                    "Improved mental health support"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700 group"
                    >
                      <motion.span 
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3 group-hover:scale-150 transition-all duration-300 group-hover:bg-white/80 group-hover:backdrop-blur-sm group-hover:shadow-lg"
                        whileHover={{ scale: 1.5 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Advanced Applications
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The future of emotional AI also includes:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  {[
                    "Advanced emotion recognition algorithms",
                    "Real-time emotional analysis",
                    "Personalized emotional responses",
                    "Multi-modal emotional understanding"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700 group"
                    >
                      <motion.span 
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3 group-hover:scale-150 transition-all duration-300 group-hover:bg-white/80 group-hover:backdrop-blur-sm group-hover:shadow-lg"
                        whileHover={{ scale: 1.5 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Improved Applications
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The future of emotional AI also includes:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  {[
                    "Improved mental health monitoring",
                    "Enhanced educational experiences",
                    "Better customer service",
                    "More effective therapy support"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700 group"
                    >
                      <motion.span 
                        className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mr-3 group-hover:scale-150 transition-all duration-300 group-hover:bg-white/80 group-hover:backdrop-blur-sm group-hover:shadow-lg"
                        whileHover={{ scale: 1.5 }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl mt-12 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Conclusion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The future of emotional AI is not just about creating more intelligent machines, 
                  but about developing technology that can better understand and serve human needs. 
                  As we continue to advance in this field, we must ensure that these developments 
                  benefit humanity while maintaining ethical standards and human dignity.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </article>
      </main>
    </div>
  );
};

export default EmotionalAIFuture; 