import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaFileContract, FaLaptopCode, FaUserCheck, FaRegLightbulb, FaBalanceScale, FaGavel, FaSyncAlt, FaEnvelope } from 'react-icons/fa';

const TermsOfService: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-center mb-8">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaHandshake className="mr-3 text-2xl text-blue-400" />1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using Humotion Pulse's AI-powered services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaFileContract className="mr-3 text-2xl text-green-400" />2. Use License</h2>
              <p className="mb-4">
                Permission is granted to temporarily access our AI services for personal or business use. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify or copy our AI solutions or materials</li>
                <li>Use our services for any unauthorized commercial purpose</li>
                <li>Attempt to reverse engineer our AI models or algorithms</li>
                <li>Remove any copyright or other proprietary notations</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaLaptopCode className="mr-3 text-2xl text-purple-400" />3. Service Description</h2>
              <p className="mb-4">
                Humotion Pulse provides cutting-edge AI consulting, custom development, process automation, and AI security services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time to ensure optimal performance and security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaUserCheck className="mr-3 text-2xl text-red-400" />4. User Responsibilities</h2>
              <p className="mb-4">
                As a user of our AI services, you agree to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of your account and API keys</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Not use our AI services for any illegal or unauthorized purpose</li>
                <li>Not interfere with or disrupt the services or servers</li>
                <li>Use our AI solutions responsibly and ethically</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaRegLightbulb className="mr-3 text-2xl text-yellow-400" />5. Intellectual Property</h2>
              <p className="mb-4">
                All content, features, and functionality of our services, including but not limited to AI models, algorithms, text, graphics, logos, icons, images, and software, are the exclusive property of Humotion Pulse and are protected by international copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaBalanceScale className="mr-3 text-2xl text-orange-400" />6. Limitation of Liability</h2>
              <p className="mb-4">
                In no event shall Humotion Pulse be liable for any damages arising out of the use or inability to use our AI services, even if we have been notified of the possibility of such damages. This includes, but is not limited to, damages for loss of data, business interruption, or any other commercial damages or losses.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaGavel className="mr-3 text-2xl text-indigo-400" />7. Governing Law</h2>
              <p className="mb-4">
                These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaSyncAlt className="mr-3 text-2xl text-teal-400" />8. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time to reflect changes in our services or for other operational, legal, or regulatory reasons. We will notify users of any material changes by posting the new Terms of Service on this page.
              </p>
              <p className="text-sm text-gray-400">
                Last Updated: {new Date().toLocaleDateString()}
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-white mb-4 flex items-center"><FaEnvelope className="mr-3 text-2xl text-pink-400" />9. Contact Information</h2>
              <p className="mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <p className="text-white">
                Email: legal@humotionpulse.com<br />
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

export default TermsOfService; 