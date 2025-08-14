import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import axios from 'axios';

const emotions = [
  { emoji: '😊', label: 'Happy' },
  { emoji: '😔', label: 'Sad' },
  { emoji: '😡', label: 'Angry' },
  { emoji: '😌', label: 'Calm' },
  { emoji: '🤔', label: 'Curious' },
];

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    content: "Founder@humotionai.com",
    action: "mailto:Founder@humotionai.com"
  },
  {
    icon: Phone,
    title: "Call Us",
    content: "+91 8700829517",
    action: "tel:+918700829517"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    content: "B2 704, SCC Heights, Raj Nagar Extension, Ghaziabad, India",
    action: "#"
  }
];

const ContactSection: React.FC = () => {
  const [selectedEmotion, setSelectedEmotion] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({
        type: 'error',
        message: 'Please fill in all fields'
      });
      return;
    }

    if (!selectedEmotion) {
      setStatus({
        type: 'error',
        message: 'Please select how you\'re feeling today'
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Replace with your actual backend endpoint
      console.log('Submitting feedback:')
      const response = await axios.post('https://backend-server-5mwr.onrender.com/api/createFeedback', {
        ...formData,
        // emotion: selectedEmotion,
        mood: emotions.find(e => e.emoji === selectedEmotion)?.label,
        timestamp: new Date().toISOString()
      });

      if (response.status === 200 || response.status === 201) {
        setStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.'
        });
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          message: ''
        });
        setSelectedEmotion(null);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      
      if (axios.isAxiosError(error)) {
        setStatus({
          type: 'error',
          message: error.response?.data?.message || 'Failed to send message. Please try again.'
        });
      } else {
        setStatus({
          type: 'error',
          message: 'An unexpected error occurred. Please try again.'
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Brand Message */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
              Connect with Emotion AI
            </h2>
            <p className="text-gray-300 text-lg">
              Experience the future of emotional intelligence. Our AI-powered platform
              understands and responds to human emotions, creating meaningful connections
              in the digital world.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                <svg
                  className="w-6 h-6 text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <p className="text-gray-300">
                Join us in shaping the future of emotional AI technology
              </p>
            </div>
          </div>

          {/* Right side - Contact Form */}
          <div className="bg-gray-800 rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">How are you feeling today?</h3>
              <div className="flex flex-wrap gap-4">
                {emotions.map((emotion) => (
                  <motion.button
                    key={emotion.label}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedEmotion(emotion.emoji)}
                    className={`p-3 rounded-xl flex flex-col items-center space-y-1 transition-all ${
                      selectedEmotion === emotion.emoji
                        ? 'bg-blue-500/20 border-2 border-blue-500'
                        : 'bg-gray-700/50 hover:bg-gray-700'
                    }`}
                    type="button"
                  >
                    <span className="text-2xl">{emotion.emoji}</span>
                    <span className="text-sm text-gray-300">{emotion.label}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder="Your name"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-white"
                  placeholder="your@email.com"
                  disabled={loading}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all h-32 text-white"
                  placeholder="Your message..."
                  disabled={loading}
                />
              </div>

              {/* Status Messages */}
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg text-sm ${
                    status.type === 'success'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-red-500/20 text-red-300 border border-red-500/30'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
                className="w-full py-3 px-6 bg-gradient-to-r from-red-500 to-blue-500 text-white rounded-lg font-medium hover:from-red-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
