import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Gauge, 
  ChartLine, 
  Search, 
  LayoutGrid, 
  X,
  ExternalLink,
  Shield,
  Download,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Home = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const chromeStoreUrl = "https://chromewebstore.google.com/detail/webos-toolkit-edit-block/opheegnbkjibpfbceamgbfmodbledagi?tid=45dab7cd-d139-4bf6-871d-1dad13de4baf&click_id=%7Bexternal_id%7D&campaign=6812754b6ab34700125b9829";

  const handleAcceptAndContinue = () => {
    if (isPrivacyAccepted) {
      window.open(chromeStoreUrl, '_blank');
    }
  };

  const features = [
    {
      icon: Gauge,
      title: "Boost Performance",
      description: "Identify and shut down tab hogs, reduce load times, and clean up your memory.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: ChartLine,
      title: "Smart Tools for Smart Users",
      description: "Access advanced inspection tools, page profiling, network analysis, and DOM snapshots — all in one place.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Search,
      title: "Instant Page Insights",
      description: "Get detailed breakdowns of page structure, script loads, and performance bottlenecks.",
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
    },
    {
      icon: LayoutGrid,
      title: "Tab Manager & Resource Monitor",
      description: "Stay organized, stay fast. See what's slowing you down and fix it in real time.",
      image: "https://images.unsplash.com/photo-1529071242804-840f9a164b8b"
    }
  ];

  const faqs = [
    {
      question: "Is WebOS Toolkit free to use?",
      answer: "Yes, WebOS Toolkit is completely free to install and use from the Chrome Web Store."
    },
    {
      question: "Does it work with other browsers?",
      answer: "Currently, WebOS Toolkit is optimized for Chrome-based browsers. Support for other browsers may be added in future updates."
    },
    {
      question: "Will it slow down my browser?",
      answer: "No, WebOS Toolkit is designed to improve browser performance by identifying and managing resource-heavy tabs and processes."
    },
    {
      question: "How does it protect my privacy?",
      answer: "We collect minimal data only to provide the service functionality. All data processing follows our privacy policy guidelines."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Modern Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1658998765622-962cb51e7888')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-900/95" />
        
        {/* Geometric Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1496167117681-944f702be1f4')`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-12 py-8">
          <div className="grid xl:grid-cols-2 gap-16 xl:gap-12 items-start min-h-screen">
            
            {/* Left Column - Double Padding */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-left xl:text-left lg:text-center space-y-6 xl:max-w-none lg:max-w-4xl lg:mx-auto"
            >
              {/* Logo with Gradient - Double Top Padding */}
              <div className="flex items-center gap-4 xl:justify-start lg:justify-center pt-16">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                    WebOS Toolkit
                  </h1>
                  <p className="text-blue-300 font-medium">Developer Extension</p>
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Supercharge Your
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Browser Experience
                  </span>
                </h2>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl xl:max-w-2xl lg:mx-auto">
                  Professional developer tools to speed up your browser, unlock advanced insights, and take full control of your browsing experience.
                </p>
              </div>

              {/* Privacy Checkbox & Chrome Store Button */}
              <div className="space-y-4">
                {/* Privacy Checkbox - Simple & Clean */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="xl:flex xl:justify-start lg:flex lg:justify-center"
                >
                  <div 
                    className={`flex items-center gap-3 text-sm p-3 rounded-lg transition-all duration-500 ${
                      !isPrivacyAccepted && expandedFaq === 'highlight-checkbox' 
                        ? 'bg-red-500/20 border-2 border-red-400 shadow-lg shadow-red-500/25 animate-pulse' 
                        : 'bg-gray-800/40 border border-gray-600/30'
                    }`}
                  >
                    <input
                      type="checkbox"
                      id="privacy-agreement"
                      checked={isPrivacyAccepted}
                      onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                      className="w-5 h-5 text-blue-600 bg-transparent border-gray-400 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="privacy-agreement" className="text-gray-200 text-sm">
                      I agree to the{' '}
                      <button
                        onClick={() => setIsPrivacyModalOpen(true)}
                        className="text-blue-400 hover:text-blue-300 underline font-medium"
                      >
                        Privacy Policy
                      </button>
                    </label>
                  </div>
                </motion.div>

                {/* Redesigned Chrome Store Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="xl:flex xl:justify-start lg:flex lg:justify-center"
                >
                  <button
                    onClick={() => {
                      if (!isPrivacyAccepted) {
                        setExpandedFaq('highlight-checkbox');
                        setTimeout(() => setExpandedFaq(null), 3000);
                      } else {
                        handleAcceptAndContinue();
                      }
                    }}
                    className="group relative overflow-hidden bg-white hover:bg-gray-50 rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 border border-gray-200/20"
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png"
                        alt="Chrome Web Store"
                        className="h-12 w-auto"
                      />
                      <div className="text-left">
                        <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Get Extension</div>
                        <div className="text-lg font-bold text-gray-900">Chrome Web Store</div>
                      </div>
                      <div className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Contemporary Professional & Friendly Animated Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative hidden xl:block py-16 flex items-center"
            >
              <div className="relative max-w-lg mx-auto">
                
                {/* Modern Glassmorphism Dashboard Container */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                    backdropFilter: 'blur(20px)',
                  }}
                >
                  
                  {/* Animated Header with Friendly Status */}
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="flex items-center justify-between mb-8"
                  >
                    <div className="flex items-center gap-3">
                      <motion.div
                        animate={{ 
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg"
                      >
                        <Shield className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <motion.h3 
                          animate={{ color: ["#ffffff", "#34d399", "#ffffff"] }}
                          transition={{ duration: 3, repeat: Infinity }}
                          className="text-lg font-bold"
                        >
                          WebOS Active
                        </motion.h3>
                        <motion.p 
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-sm text-emerald-300"
                        >
                          All systems optimized
                        </motion.p>
                      </div>
                    </div>
                    
                    {/* Live Status Indicator */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <motion.div
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 1, repeat: Infinity }}
                        className="w-3 h-3 bg-emerald-400 rounded-full shadow-lg shadow-emerald-400/50"
                      />
                      <span className="text-emerald-300 text-sm font-medium">LIVE</span>
                    </motion.div>
                  </motion.div>

                  {/* Contemporary Performance Metrics Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    
                    {/* Speed Boost Card */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative overflow-hidden bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-4 border border-blue-400/30 shadow-xl"
                    >
                      <motion.div
                        animate={{ 
                          background: [
                            "linear-gradient(45deg, rgba(59,130,246,0.1), rgba(147,51,234,0.1))",
                            "linear-gradient(45deg, rgba(147,51,234,0.1), rgba(59,130,246,0.1))"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute inset-0"
                      />
                      
                      <div className="relative z-10">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center mb-3 shadow-lg"
                        >
                          <Gauge className="w-4 h-4 text-white" />
                        </motion.div>
                        
                        <motion.div
                          animate={{ 
                            scale: [1, 1.1, 1],
                            color: ["#60a5fa", "#a855f7", "#60a5fa"]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="text-2xl font-bold mb-1"
                        >
                          +73%
                        </motion.div>
                        <p className="text-blue-200 text-sm">Speed Boost</p>
                        
                        {/* Animated Progress Bar */}
                        <div className="mt-3 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                          <motion.div
                            animate={{ width: ["0%", "73%", "73%"] }}
                            transition={{ duration: 2, delay: 1.5, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>

                    {/* Memory Saved Card */}
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1.2, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative overflow-hidden bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 backdrop-blur-sm rounded-2xl p-4 border border-emerald-400/30 shadow-xl"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-xl flex items-center justify-center mb-3 shadow-lg"
                      >
                        <ChartLine className="w-4 h-4 text-white" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ["#34d399", "#22d3ee", "#34d399"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-bold mb-1"
                      >
                        2.3GB
                      </motion.div>
                      <p className="text-emerald-200 text-sm">Memory Saved</p>
                      
                      <div className="mt-3 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: ["0%", "85%", "85%"] }}
                          transition={{ duration: 2, delay: 1.7, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"
                        />
                      </div>
                    </motion.div>

                    {/* Blocked Trackers Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.4, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative overflow-hidden bg-gradient-to-br from-orange-500/20 to-red-500/20 backdrop-blur-sm rounded-2xl p-4 border border-orange-400/30 shadow-xl"
                    >
                      <motion.div
                        animate={{ 
                          scale: [1, 1.3, 1],
                          rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center mb-3 shadow-lg"
                      >
                        <Search className="w-4 h-4 text-white" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ["#fb923c", "#ef4444", "#fb923c"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-bold mb-1"
                      >
                        127
                      </motion.div>
                      <p className="text-orange-200 text-sm">Trackers Blocked</p>
                      
                      <div className="mt-3 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: ["0%", "95%", "95%"] }}
                          transition={{ duration: 2, delay: 1.9, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-orange-400 to-red-500 rounded-full"
                        />
                      </div>
                    </motion.div>

                    {/* Active Protection Card */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.6, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="relative overflow-hidden bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-2xl p-4 border border-purple-400/30 shadow-xl"
                    >
                      <motion.div
                        animate={{ 
                          y: [0, -3, 0],
                          rotate: [0, 10, -10, 0]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl flex items-center justify-center mb-3 shadow-lg"
                      >
                        <LayoutGrid className="w-4 h-4 text-white" />
                      </motion.div>
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          color: ["#a855f7", "#ec4899", "#a855f7"]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl font-bold mb-1"
                      >
                        12
                      </motion.div>
                      <p className="text-purple-200 text-sm">Active Tabs</p>
                      
                      <div className="mt-3 w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          animate={{ width: ["0%", "60%", "60%"] }}
                          transition={{ duration: 2, delay: 2.1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Real-time Activity Feed */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                      <span className="text-white text-sm font-medium">Real-time Activity</span>
                    </div>
                    
                    <div className="space-y-2">
                      {[
                        { text: "Optimized 3 heavy tabs", color: "emerald", delay: 0 },
                        { text: "Blocked 8 trackers", color: "orange", delay: 1 },
                        { text: "Saved 450MB memory", color: "blue", delay: 2 }
                      ].map((activity, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 2.5 + activity.delay * 0.3, duration: 0.5 }}
                          className="flex items-center gap-3 text-sm"
                        >
                          <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity, delay: activity.delay }}
                            className={`w-2 h-2 bg-${activity.color}-400 rounded-full shadow-lg shadow-${activity.color}-400/50`}
                          />
                          <span className="text-gray-300">{activity.text}</span>
                          <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1, repeat: Infinity, delay: activity.delay }}
                            className="text-emerald-400 text-xs"
                          >
                            just now
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>

                {/* Contemporary Floating Achievement Badges */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3, duration: 0.8, type: "spring" }}
                  className="absolute -top-6 -right-6"
                >
                  <motion.div
                    animate={{ 
                      y: [-10, 10, -10],
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-gradient-to-r from-emerald-400 via-cyan-500 to-blue-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl shadow-emerald-500/30 border border-white/20"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      className="flex items-center gap-2"
                    >
                      <span>⚡</span>
                      <span>TURBO MODE</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 3.5, duration: 0.8, type: "spring" }}
                  className="absolute -bottom-4 -left-6"
                >
                  <motion.div
                    animate={{ 
                      x: [-8, 8, -8],
                      y: [0, -8, 0],
                      scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-4 py-2 rounded-2xl text-sm font-bold shadow-2xl shadow-purple-500/30 border border-white/20"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.2, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="flex items-center gap-2"
                    >
                      <span>🛡️</span>
                      <span>PROTECTED</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 4, duration: 0.8, type: "spring" }}
                  className="absolute top-1/4 -left-8"
                >
                  <motion.div
                    animate={{ 
                      y: [5, -15, 5],
                      x: [0, 8, 0],
                      rotate: [0, -8, 8, 0]
                    }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 text-white px-3 py-2 rounded-2xl text-sm font-bold shadow-2xl shadow-cyan-500/30 border border-white/20"
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex items-center gap-1"
                    >
                      <span>✨</span>
                      <span>OPTIMIZED</span>
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Modern Ambient Particle System */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ 
                      y: [0, -30, 0],
                      x: [0, Math.sin(i) * 20, 0],
                      opacity: [0, 0.6, 0],
                      scale: [0.5, 1.5, 0.5]
                    }}
                    transition={{ 
                      duration: 4 + i * 0.3, 
                      repeat: Infinity, 
                      delay: i * 0.4,
                      ease: "easeInOut"
                    }}
                    className={`absolute w-1.5 h-1.5 rounded-full ${
                      i % 4 === 0 ? 'bg-emerald-400' :
                      i % 4 === 1 ? 'bg-blue-400' :
                      i % 4 === 2 ? 'bg-purple-400' : 'bg-cyan-400'
                    } shadow-lg`}
                    style={{
                      left: `${15 + (i * 8) % 70}%`,
                      top: `${25 + (i * 6) % 50}%`,
                      filter: 'blur(0.5px)'
                    }}
                  />
                ))}

                {/* Breathing Glow Effect */}
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-xl -z-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Features Section - Bottom-Aligned Progress Bars */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                Key Features
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional tools designed to optimize your browser performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content - Flexible grow */}
                  <div className="flex-grow mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Performance Bar - Aligned to bottom */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs">Performance</span>
                      <span className="text-green-400 text-xs font-medium">
                        {index === 0 ? '+47%' : index === 1 ? 'Real-time' : index === 2 ? 'Active' : 'Optimized'}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${75 + index * 5}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-blue-400' :
                          index === 1 ? 'bg-purple-400' :
                          index === 2 ? 'bg-cyan-400' : 'bg-green-400'
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Minimalistic FAQ Section with Colors */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Common questions about WebOS Toolkit
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-200 rounded-xl ${
                    expandedFaq === index 
                      ? 'bg-blue-500/10 border border-blue-400/30' 
                      : 'bg-gray-800/30 border border-gray-700/30 hover:bg-gray-700/30'
                  }`}
                >
                  <span className="text-lg font-medium text-white pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-300 leading-relaxed pt-2 border-t border-blue-400/20">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Footer */}
      <footer className="py-16 bg-gradient-to-t from-gray-900 to-gray-800 relative border-t border-gray-700/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  WebOS Toolkit
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Professional browser extension designed by developers for developers. Optimize your browsing experience today.
              </p>
            </div>

            {/* Quick Links Section - Left Aligned */}
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <a href="#features" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  Features
                </a>
                <a href="#faq" className="block text-gray-400 hover:text-blue-400 transition-colors duration-200">
                  FAQ
                </a>
              </div>
            </div>

            {/* Install Section */}
            <div>
              <h3 className="text-white font-semibold mb-4">Get Started</h3>
              <button 
                onClick={() => {
                  // Scroll to top
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  // If privacy not accepted, highlight checkbox
                  if (!isPrivacyAccepted) {
                    setTimeout(() => {
                      setExpandedFaq('highlight-checkbox');
                      setTimeout(() => setExpandedFaq(null), 3000);
                    }, 800);
                  } else {
                    // If accepted, redirect to Chrome Store
                    setTimeout(() => {
                      window.open(chromeStoreUrl, '_blank');
                    }, 800);
                  }
                }}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Install Extension
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/50">
            <div className="flex items-center gap-6 text-gray-500 text-sm mb-4 md:mb-0">
              <span>© 2025 WebOS Toolkit</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
            <div className="text-gray-500 text-sm">
              Website created by <a href="https://www.happydesign.pro/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200">Happy Agency</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-3xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto border border-gray-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Collecting and Using Your Personal Data</h3>
              
              <h4 className="text-lg font-semibold text-white mb-3">Security of Your Personal Data</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Personal Data</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                While using Our Service, We may ask You for personally identifying information that can be used to contact or identify You. Usage Data is one type of personally identifiable information that may be collected.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Usage Data</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Usage Data has collected automatically when using the Service.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Information Collected while Using the Application</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission: Information regarding your location.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You can enable or disable access to this information at any time, through Your Device settings.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;