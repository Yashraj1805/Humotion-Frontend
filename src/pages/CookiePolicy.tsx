import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaCookieBite, FaThList, FaCogs, FaHandshake, FaGlobe, FaHistory, FaEnvelope } from 'react-icons/fa';

const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen bg-navy-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-navy-900 shadow-lg rounded-lg p-8">
          <div className="flex items-center justify-center mb-8">
            <motion.div 
              className="w-24 h-24 flex items-center justify-center bg-white/5 rounded-xl p-2"
              whileHover={{ scale: 1.1 }}
              animate={{ 
                y: [0, -5, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                },
                rotate: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              <motion.img 
                src="/img/HUMOTION.AI1-removebg-preview.png" 
                alt="Humotion.AI Logo" 
                className="w-full h-full object-contain"
                animate={{ 
                  filter: [
                    "brightness(1)",
                    "brightness(1.2)",
                    "brightness(1)"
                  ]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </div>
          <h1 className="text-3xl font-bold text-center mb-8">Cookie Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaInfoCircle className="mr-3 text-2xl text-blue-400" />1. Introduction</h2>
              <p className="mb-4">
                This Cookie Policy explains how Humotion Pulse uses cookies and similar technologies to enhance your experience with our AI-powered services. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaCookieBite className="mr-3 text-2xl text-yellow-400" />2. What are Cookies?</h2>
              <p className="mb-4">
                Cookies are small data files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by enabling our AI services to remember your preferences and understand how you interact with our platform.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaThList className="mr-3 text-2xl text-green-400" />3. Types of Cookies We Use</h2>
              <p className="mb-4">
                We use the following types of cookies to enhance your experience with our AI services:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Essential Cookies:</strong> These cookies are necessary for our AI-powered website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
                </li>
                <li>
                  <strong>Analytics Cookies:</strong> These cookies help us understand how visitors interact with our AI services by collecting and reporting information anonymously. This helps us improve our algorithms and user experience.
                </li>
                <li>
                  <strong>Functionality Cookies:</strong> These cookies enable enhanced AI functionality and personalization, such as remembering your preferences and settings for our services.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> These cookies help us optimize our AI services by collecting information about how you use our website, which pages you visit most often, and any error messages you receive.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaCogs className="mr-3 text-2xl text-purple-400" />4. How We Use Cookies</h2>
              <p className="mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>To provide you with a better user experience with our AI services</li>
                <li>To analyze how our website and AI solutions are used</li>
                <li>To remember your preferences and settings</li>
                <li>To improve our website's performance and AI algorithms</li>
                <li>To personalize your experience with our AI services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaHandshake className="mr-3 text-2xl text-red-400" />5. Third-Party Cookies</h2>
              <p className="mb-4">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the website, deliver advertisements on and through the website, and enhance our AI services with additional functionality.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaGlobe className="mr-3 text-2xl text-orange-400" />6. Managing Cookies</h2>
              <p className="mb-4">
                Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies may impact your experience using our AI services. To learn more about cookies and how to manage them, visit:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Google Chrome: <a href="https://support.google.com/chrome/answer/95647" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Cookie Settings</a></li>
                <li>Mozilla Firefox: <a href="https://support.mozilla.org/en-US/kb/cookies-information-websites-store-on-your-computer" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Cookie Settings</a></li>
                <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Cookie Settings</a></li>
                <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-blue-400 hover:text-blue-300 transition-colors duration-200" target="_blank" rel="noopener noreferrer">Cookie Settings</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaHistory className="mr-3 text-2xl text-teal-400" />7. Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. Please visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
              </p>
              <p className="text-sm text-gray-400">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaEnvelope className="mr-3 text-2xl text-pink-400" />8. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies or other technologies, please contact us at:
              </p>
              <p className="text-white">
                Email: privacy@humotionpulse.com<br />
                Phone: [Your Contact Number]<br />
                Address: [Your Company Address]
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy; 