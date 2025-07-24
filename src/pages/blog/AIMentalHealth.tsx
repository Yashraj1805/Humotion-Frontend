import React from 'react';
import Header from "@/components/Header";
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaShare, FaHeart, FaTwitter, FaLinkedin, FaFacebook, FaWhatsapp } from 'react-icons/fa';

const AIMentalHealth = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const shareUrl = window.location.href;
  const shareTitle = "AI-Powered Mental Health Support";

  const shareOptions = [
    { icon: FaTwitter, url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, color: "hover:text-blue-400" },
    { icon: FaLinkedin, url: `https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, color: "hover:text-blue-600" },
    { icon: FaFacebook, url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, color: "hover:text-blue-700" },
    { icon: FaWhatsapp, url: `https://wa.me/?text=${shareTitle}%20${shareUrl}`, color: "hover:text-green-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Header />
      <motion.div 
        style={{ opacity, scale }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-teal-600 z-50"
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
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                AI-Powered Mental Health Support
              </h1>
              <div className="flex items-center text-gray-600 mb-8 space-x-4">
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  <span>March 5, 2024</span>
                </div>
                <div className="flex items-center">
                  <FaClock className="mr-2" />
                  <span>7 min read</span>
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
                src="https://trendsresearch.org/wp-content/uploads/2025/05/Cognitive-Enhancement-through-AI.jpg"
                alt="AI-Powered Mental Health Support"
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
                Artificial Intelligence is revolutionizing mental health care, offering new ways to 
                provide support, monitor well-being, and deliver personalized interventions. This 
                technology is making mental health support more accessible and effective than ever before.
              </p>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                  Current Applications
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  AI is currently being used in various mental health applications:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  {[
                    "24/7 mental health chatbots and virtual therapists",
                    "Mood tracking and emotional analysis",
                    "Early detection of mental health issues",
                    "Personalized treatment recommendations"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3" />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                  Benefits and Advantages
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  AI-powered mental health solutions offer several key advantages:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  {[
                    "Increased accessibility to mental health support",
                    "Reduced stigma through anonymous interactions",
                    "Continuous monitoring and support",
                    "Data-driven insights for better care"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3" />
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
                <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                  Future Developments
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The future of AI in mental health looks promising with several developments on the horizon:
                </p>
                <ul className="list-none space-y-3 mb-6">
                  {[
                    "More sophisticated emotional understanding",
                    "Integration with wearable devices",
                    "Enhanced personalization of care",
                    "Improved crisis intervention capabilities"
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center text-gray-700"
                    >
                      <span className="w-2 h-2 bg-gradient-to-r from-green-500 to-teal-600 rounded-full mr-3" />
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
                className="bg-gradient-to-br from-green-50 to-teal-50 p-8 rounded-2xl mt-12 shadow-lg"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-teal-600">
                  Conclusion
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  AI-powered mental health support represents a significant step forward in making 
                  mental health care more accessible and effective. While these technologies are 
                  not meant to replace human therapists, they provide valuable support and 
                  complement traditional mental health services. As the technology continues to 
                  evolve, we can expect even more sophisticated and helpful AI mental health 
                  solutions in the future.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </article>
      </main>
    </div>
  );
};

export default AIMentalHealth; 