import React from 'react';
import { motion } from 'framer-motion';
import { FaInfoCircle, FaDatabase, FaShieldAlt, FaUserShield, FaEnvelope, FaHistory } from 'react-icons/fa';

const PrivacyPolicy: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-center mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaInfoCircle className="mr-3 text-2xl text-blue-400" />1. Introduction</h2>
              <p className="mb-4">
                At Humotion Pulse, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our AI-powered services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaDatabase className="mr-3 text-2xl text-green-400" />2. Information We Collect</h2>
              <p className="mb-4">
                We may collect information about you in various ways, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal information (name, email address, phone number)</li>
                <li>Usage data and analytics for our AI services</li>
                <li>Device and browser information</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Data related to your interaction with our AI solutions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaUserShield className="mr-3 text-2xl text-purple-400" />3. How We Use Your Information</h2>
              <p className="mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and maintain our AI-powered services</li>
                <li>Improve and personalize your experience with our solutions</li>
                <li>Communicate with you about our services and updates</li>
                <li>Comply with legal obligations</li>
                <li>Enhance our AI models and algorithms</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaShieldAlt className="mr-3 text-2xl text-red-400" />4. Data Security</h2>
              <p className="mb-4">
                We implement state-of-the-art security measures to protect your personal information. Our AI security solutions ensure that your data is protected using advanced encryption and security protocols. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaUserShield className="mr-3 text-2xl text-yellow-400" />5. Your Rights</h2>
              <p className="mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to data processing</li>
                <li>Data portability</li>
                <li>Opt-out of AI model training using your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaEnvelope className="mr-3 text-2xl text-indigo-400" />6. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="text-white">
                Email: privacy@humotionpulse.com<br />
                Phone: [Your Contact Number]<br />
                Address: [Your Company Address]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaHistory className="mr-3 text-2xl text-teal-400" />7. Updates to This Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p className="text-sm text-gray-400">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy; 