import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMicrophone, FaPlay, FaPause, FaVolumeUp, FaHeart, FaBrain } from 'react-icons/fa';

const VoiceDemo = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentEmotion, setCurrentEmotion] = useState('neutral');

  const emotions = [
    { name: 'Happy', color: 'from-yellow-400 to-orange-400', icon: '😊' },
    { name: 'Sad', color: 'from-blue-400 to-indigo-400', icon: '😢' },
    { name: 'Stressed', color: 'from-red-400 to-pink-400', icon: '😰' },
    { name: 'Excited', color: 'from-green-400 to-emerald-400', icon: '🤩' }
  ];

  const handleRecord = () => {
    setIsRecording(!isRecording);
    // Simulate emotion detection
    setTimeout(() => {
      const randomEmotion = emotions[Math.floor(Math.random() * emotions.length)];
      setCurrentEmotion(randomEmotion.name.toLowerCase());
    }, 2000);
  };

  const responses = {
    happy: "I can hear the joy in your voice! Your energy is contagious. What's making you feel so wonderful today?",
    sad: "I sense some sadness in your tone. It's okay to feel this way. Would you like to talk about what's on your mind?",
    stressed: "I can hear the tension in your voice. Let's take a moment to breathe together. What's weighing on your mind?",
    excited: "Your excitement is palpable! I love hearing this energy from you. What's got you so thrilled?"
  };

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-4">Try Humo.ai Voice Demo</h3>
        <p className="text-white/80">Experience real-time emotion detection and empathetic responses</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recording Section */}
        <div className="space-y-6">
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRecord}
              className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 ${
                isRecording 
                  ? 'bg-gradient-to-r from-red-500 to-pink-500 animate-pulse' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600'
              }`}
            >
              <FaMicrophone className="text-2xl text-white" />
            </motion.button>
            <p className="text-white/80">
              {isRecording ? 'Recording... Speak now!' : 'Click to start recording'}
            </p>
          </div>

          {/* Emotion Detection */}
          {isRecording && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-4"
            >
              <div className="flex items-center justify-center space-x-4 mb-4">
                <FaBrain className="text-blue-400 text-xl" />
                <span className="text-white font-semibold">Analyzing emotion...</span>
              </div>
              <div className="flex justify-center space-x-2">
                {emotions.map((emotion, index) => (
                  <motion.div
                    key={index}
                    animate={{ 
                      scale: currentEmotion === emotion.name.toLowerCase() ? 1.2 : 1,
                      opacity: currentEmotion === emotion.name.toLowerCase() ? 1 : 0.5
                    }}
                    className={`p-2 rounded-lg ${emotion.color} bg-gradient-to-r`}
                  >
                    <span className="text-2xl">{emotion.icon}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        {/* Response Section */}
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                <FaHeart className="text-white" />
              </div>
              <div>
                <h4 className="text-white font-semibold">Humo.ai Response</h4>
                <p className="text-white/60 text-sm">Emotionally intelligent reply</p>
              </div>
            </div>
            
            {currentEmotion !== 'neutral' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white/10 rounded-lg p-4"
              >
                <p className="text-white/90 italic">"{responses[currentEmotion as keyof typeof responses]}"</p>
              </motion.div>
            )}
          </div>

          {/* Features Highlight */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <FaMicrophone className="text-blue-400 text-xl mx-auto mb-2" />
              <p className="text-white/80 text-sm">Voice Analysis</p>
            </div>
            <div className="bg-white/5 rounded-lg p-4 text-center">
              <FaHeart className="text-purple-400 text-xl mx-auto mb-2" />
              <p className="text-white/80 text-sm">Empathetic Response</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo Controls */}
      <div className="mt-8 flex justify-center space-x-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300"
        >
          {isPlaying ? <FaPause className="mr-2" /> : <FaPlay className="mr-2" />}
          {isPlaying ? 'Pause Demo' : 'Play Demo'}
        </motion.button>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-lg text-white rounded-xl hover:bg-white/20 transition-all duration-300 border border-white/20"
        >
          <FaVolumeUp className="mr-2" />
          Listen to Sample
        </motion.button>
      </div>
    </div>
  );
};

export default VoiceDemo; 