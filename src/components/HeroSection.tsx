import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-blue-50 pt-16">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Logo and Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 bg-white/30 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-lg max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <motion.div
              className="w-20 h-20 md:w-28 md:h-28 rounded-2xl flex items-center justify-center shadow-2xl bg-white/10 backdrop-blur-sm p-2 md:p-3 relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  }}
                />
                <motion.img 
                  src="/img/HUMOTION.AI1-removebg-preview.png" 
                  alt="Humotion.AI Logo" 
                  className="w-full h-full object-contain relative z-10"
                  animate={{ 
                  y: [0, -5, 0],
                  rotate: [0, 1, 0],
                  }}
                  transition={{ 
                  duration: 3,
                    repeat: Infinity,
                  ease: "easeInOut",
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center md:text-left flex-1"
            >
              <motion.h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy-900"
                animate={{ 
                  textShadow: [
                  "0 0 20px rgba(59, 130, 246, 0.3)",
                  "0 0 30px rgba(59, 130, 246, 0.5)",
                    "0 0 20px rgba(59, 130, 246, 0.3)",
                ],
                }}
                transition={{ 
                duration: 3,
                  repeat: Infinity,
                ease: "easeInOut",
                }}
              >
                Welcome to{" "}
              <span className="gradient-text text-4xl sm:text-5xl md:text-7xl inline-block">
                HumotionAI
              </span>
              </motion.h2>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.h1 
            className="text-3xl md:text-5xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="text-navy-900">Where</span>{" "}
            <span className="gradient-text">Emotion</span>{" "}
            <span className="text-navy-900">Meets</span>{" "}
            <span className="gradient-text">Intelligence</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            className="text-base md:text-lg text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Transforming businesses through AI-powered solutions that understand both technology and human nature. 
            Experience the future of intelligent automation.
          </motion.p>

          {/* Feature Tags */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-gray-700">AI-Powered</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-red-500" />
              <span className="text-sm font-medium text-gray-700">Human-Centric</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-lg">
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-gray-700">Enterprise Ready</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link to="/contact">
              <Button 
                size="lg" 
                className="bg-gradient-brand hover:shadow-2xl transition-all duration-300 text-white font-semibold px-8 py-4 text-lg group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Button>
            </Link>
            <Link to="/services">
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-navy-200 text-navy-900 hover:bg-navy-50 font-semibold px-8 py-4 text-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-gradient-brand rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
