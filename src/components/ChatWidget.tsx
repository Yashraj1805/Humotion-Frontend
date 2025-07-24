import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes, FaPaperPlane, FaRobot } from 'react-icons/fa';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'grok';
  timestamp: Date;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! I\'m Gemini AI, your AI assistant. I have full access to this website and can help you with any questions about Humotion\'s services, solutions, or general inquiries. How can I assist you today?',
      sender: 'grok',
      timestamp: new Date()
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Use environment variable for Gemini API key. Set VITE_GEMINI_API_KEY in your .env file.
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const callGeminiAPI = async (userMessage: string): Promise<string> => {
    try {
      console.log('Making Gemini API call with key:', GEMINI_API_KEY.substring(0, 10) + '...');
      
      const requestBody = {
        contents: [
          {
            parts: [
              {
                text: `You are Gemini AI, an AI assistant for Humotion, a technology company. You have full access to this website and can help users with information about:
                - AI Consulting services
                - AI Security solutions
                - Custom Development
                - Process Automation
                - Cloud Services
                - Data Solutions
                - IT Infrastructure
                - Company contact information (info@humotion.ai, support@humotion.ai, +91 7827075810, +91 6387805151)
                - Office location (Sector 2C, Ghaziabad, Uttar Pradesh, India)
                
                Provide helpful, accurate information about Humotion's services and capabilities. Keep responses concise and professional.
                
                User question: ${userMessage}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      };

      console.log('Request body:', JSON.stringify(requestBody, null, 2));

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Response status:', response.status);
      console.log('Response headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API Error Response:', errorText);
        throw new Error(`API call failed: ${response.status} - ${errorText}`);
      }

      const data = await response.json();
      console.log('API Response data:', data);
      
      return data.candidates[0]?.content?.parts[0]?.text || 'Sorry, I couldn\'t process your request at the moment.';
    } catch (error) {
      console.error('Gemini API Error:', error);
      
      // Fallback to local AI system
      console.log('Using fallback local AI system');
      return generateLocalResponse(userMessage);
    }
  };

  const generateLocalResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // AI Consulting
    if (lowerMessage.includes('ai consulting') || lowerMessage.includes('consulting')) {
      return "Our AI Consulting services help businesses identify opportunities for AI implementation, develop AI strategies, and optimize existing AI systems. We provide expert guidance on AI adoption, digital transformation, and help you leverage AI to gain competitive advantages. Our consultants work closely with your team to understand your business needs and create tailored AI solutions.";
    }
    
    // AI Security
    if (lowerMessage.includes('security') || lowerMessage.includes('ai security')) {
      return "Our AI Security solutions protect your systems and data using advanced AI algorithms. We offer comprehensive threat detection, vulnerability assessment, security automation, and real-time monitoring. Our security solutions help prevent cyber attacks, detect anomalies, and ensure compliance with industry standards. We also provide security consulting and training for your team.";
    }
    
    // Custom Development
    if (lowerMessage.includes('development') || lowerMessage.includes('custom') || lowerMessage.includes('software')) {
      return "Our Custom Development team creates tailored software solutions using cutting-edge technologies. We build scalable applications, APIs, web platforms, mobile apps, and enterprise systems that meet your specific business requirements. Our development process includes thorough planning, agile development, testing, and ongoing support to ensure your solution delivers maximum value.";
    }
    
    // Process Automation
    if (lowerMessage.includes('automation') || lowerMessage.includes('process') || lowerMessage.includes('rpa')) {
      return "Process Automation helps streamline your business operations using AI and RPA technologies. We automate repetitive tasks, improve efficiency, reduce operational costs, and minimize human errors. Our automation solutions include workflow automation, document processing, data entry automation, and intelligent process optimization. We help you identify automation opportunities and implement solutions that deliver quick ROI.";
    }
    
    // Cloud Services
    if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('azure') || lowerMessage.includes('gcp')) {
      return "Our Cloud Services provide scalable, secure, and reliable technology foundations. We help with cloud migration, infrastructure optimization, cloud-native development, and digital transformation. Our expertise covers AWS, Azure, Google Cloud, and hybrid cloud solutions. We ensure your cloud infrastructure is optimized for performance, cost, and security while providing 24/7 monitoring and support.";
    }
    
    // Data Solutions
    if (lowerMessage.includes('data') || lowerMessage.includes('analytics') || lowerMessage.includes('bi') || lowerMessage.includes('machine learning')) {
      return "Our Data Solutions help you harness the power of your data through advanced analytics, machine learning, and business intelligence. We turn data into actionable insights for better decision-making. Our services include data warehousing, ETL processes, predictive analytics, data visualization, and custom ML models. We help you build data-driven organizations that can make informed decisions based on real-time insights.";
    }
    
    // IT Infrastructure
    if (lowerMessage.includes('infrastructure') || lowerMessage.includes('it') || lowerMessage.includes('network')) {
      return "Our IT Infrastructure solutions provide robust, scalable, and secure technology foundations for your business. We design, implement, and manage enterprise-grade infrastructure including networks, servers, storage, and security systems. Our infrastructure services ensure high availability, disaster recovery, and optimal performance while reducing costs and complexity.";
    }
    
    // Contact Information
    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
      return "You can reach us through multiple channels:\n\n📧 Email: info@humotion.ai or support@humotion.ai\n📞 Phone: +91 7827075810 or +91 6387805151\n📍 Office: Sector 2C, Ghaziabad, Uttar Pradesh, India 201001\n\nWe're available Monday to Friday, 9 AM to 6 PM IST. For urgent matters, you can also use our contact form on the website.";
    }
    
    // Location/Address
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('office') || lowerMessage.includes('where')) {
      return "Our office is located at Sector 2C, Ghaziabad, Uttar Pradesh, India 201001. We're strategically positioned in the National Capital Region (NCR) with easy access to Delhi and other major cities. You can find our exact location on the map on our contact page. We also offer virtual meetings and remote consultations for clients worldwide.";
    }
    
    // Pricing/Cost
    if (lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('price') || lowerMessage.includes('quote')) {
      return "Our pricing varies based on the specific solution and requirements. We offer flexible pricing models including project-based, retainer, and subscription options. For a personalized quote, I'd recommend contacting our sales team at info@humotion.ai or calling +91 7827075810. We'll schedule a consultation to understand your needs and provide a detailed proposal.";
    }
    
    // About Company
    if (lowerMessage.includes('about') || lowerMessage.includes('company') || lowerMessage.includes('who') || lowerMessage.includes('what')) {
      return "Humotion is a leading AI technology company specializing in innovative solutions for businesses. We help organizations transform their operations through cutting-edge AI, automation, and digital technologies. Our team of experts combines deep technical knowledge with industry experience to deliver solutions that drive real business value. We're committed to helping our clients stay ahead in the digital age.";
    }
    
    // Services Overview
    if (lowerMessage.includes('service') || lowerMessage.includes('solution') || lowerMessage.includes('offer') || lowerMessage.includes('help')) {
      return "Humotion offers comprehensive technology solutions including:\n\n🤖 AI Consulting & Strategy\n🔒 AI Security & Compliance\n💻 Custom Software Development\n⚡ Process Automation & RPA\n☁️ Cloud Services & Migration\n📊 Data Analytics & BI\n🏗️ IT Infrastructure & DevOps\n\nEach service is tailored to your specific business needs. How can we help you today?";
    }
    
    // Greeting/General
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! I'm here to help you learn about Humotion's services and solutions. We specialize in AI consulting, custom development, process automation, cloud services, data solutions, and IT infrastructure. What would you like to know more about?";
    }
    
    // Default response
    return "Thank you for your question! I'm here to help you with information about Humotion's services and solutions. We offer AI consulting, security solutions, custom development, process automation, cloud services, data analytics, and IT infrastructure. Feel free to ask about any specific service or contact us directly at info@humotion.ai for personalized assistance.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: message,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsLoading(true);

    // Get Gemini AI response
    const geminiResponse = await callGeminiAPI(message);
    
    const geminiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: geminiResponse,
      sender: 'grok',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, geminiMessage]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-16 md:bottom-20 right-0 w-[calc(100vw-2rem)] max-w-sm md:w-96 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 overflow-hidden"
          >
            <div className="p-3 md:p-4 bg-gradient-to-r from-blue-500 to-purple-600">
              <div className="flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <FaRobot className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  <h3 className="text-white font-semibold text-base md:text-lg">Gemini AI Assistant</h3>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleChat}
                  className="text-white hover:text-white/80 transition-colors p-1"
                >
                  <FaTimes className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>
            </div>
            <div className="h-80 md:h-96 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-2 max-w-[85%] md:max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    {msg.sender === 'grok' && (
                      <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaRobot className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                      </div>
                    )}
                    <div className={`rounded-2xl px-3 py-2 md:px-4 md:py-2 ${
                      msg.sender === 'user' 
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-tr-none' 
                        : 'bg-white/20 text-black rounded-tl-none'
                    }`}>
                      <p className="text-xs md:text-sm whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-start space-x-2 max-w-[85%] md:max-w-[80%]">
                    <div className="w-5 h-5 md:w-6 md:h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <FaRobot className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                    </div>
                    <div className="bg-white/20 text-black rounded-2xl rounded-tl-none px-3 py-2 md:px-4 md:py-2">
                      <div className="flex space-x-1">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full animate-bounce"></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                </div>
              </div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <form onSubmit={handleSubmit} className="p-3 md:p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask Gemini AI anything..."
                  disabled={isLoading}
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2 md:px-4 md:py-2 text-sm md:text-base text-black placeholder-black/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 disabled:opacity-50"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isLoading || !message.trim()}
                  className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl px-3 py-2 md:px-4 md:py-2 hover:from-blue-600 hover:to-purple-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
                >
                  <FaPaperPlane className="w-4 h-4 md:w-5 md:h-5" />
                </motion.button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleChat}
        className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full p-3 md:p-4 shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <div className="relative">
          <FaComments className="w-5 h-5 md:w-6 md:h-6" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 w-2.5 h-2.5 md:w-3 md:h-3 bg-green-400 rounded-full"
          />
        </div>
      </motion.button>
    </div>
  );
};

export default ChatWidget; 