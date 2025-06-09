import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, 
  Brain, 
  Eye, 
  Globe, 
  X,
  ExternalLink,
  Shield,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Star,
  Users
} from "lucide-react";

const Home = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);
  const [adsBlocked] = useState(32118397);
  const [todaysAdsBlocked] = useState(1219487);

  const chromeStoreUrl = "https://chrome.google.com/webstore/detail/ceiidfadobgbkfaclpjopldnbpihhcdg";

  const handleAcceptAndContinue = () => {
    if (isPrivacyAccepted) {
      window.open(chromeStoreUrl, '_blank');
    }
  };

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Detection",
      description: "Advanced AI identifies and blocks hidden native ads that traditional blockers miss.",
      image: "https://images.unsplash.com/photo-1636955840493-f43a02bfa064"
    },
    {
      icon: Eye,
      title: "Stealth Mode",
      description: "Completely invisible to detection systems. No more nag screens or blocked access.",
      image: "https://images.unsplash.com/photo-1614064643392-8dd713152ae9"
    },
    {
      icon: Zap,
      title: "Paywall Bypass",
      description: "Access premium content without paywalls. Works on major news sites and publications.",
      image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9"
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      description: "Works on sites where others fail: Forbes, Wired, Bloomberg, Business Insider, and more.",
      image: "https://images.unsplash.com/photo-1636955903101-d6b4b926018c"
    }
  ];

  const faqs = [
    {
      question: "How is this different from other ad blockers?",
      answer: "Our AI technology detects and blocks native ads and hidden advertising that traditional blockers miss. Plus, we're completely undetectable by anti-adblock systems."
    },
    {
      question: "Will websites know I'm using an ad blocker?",
      answer: "No. Our stealth technology makes the extension completely invisible to website detection systems. You'll never see 'please disable your ad blocker' messages."
    },
    {
      question: "Does it work on paywall sites like Forbes and Wired?",
      answer: "Yes! We specifically designed it to work on sites that block traditional ad blockers, including Forbes, Wired, Bloomberg, Business Insider, and many more."
    },
    {
      question: "Is it safe and private?",
      answer: "Absolutely. All processing happens locally in your browser using on-device AI. We don't track, monitor, or collect any of your browsing data."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Desktop Only Banner */}
      {isBannerVisible && (
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative text-white py-3 px-4 z-50"
          style={{
            background: 'linear-gradient(135deg, #dc2626 0%, #991b1b 100%)'
          }}
        >
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-6"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-yellow-300 font-medium text-sm">
                💻 Desktop Only
              </div>
              <div className="text-gray-100 text-sm">
                This extension works on desktop computers only - install from Chrome Web Store
              </div>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-4"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.button
                onClick={() => {
                  if (!isPrivacyAccepted) {
                    setExpandedFaq('highlight-checkbox');
                    setTimeout(() => setExpandedFaq(null), 3000);
                  } else {
                    window.open(chromeStoreUrl, '_blank');
                  }
                }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(255, 255, 255, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="bg-white hover:bg-gray-100 text-red-600 px-5 py-1.5 rounded-md font-medium text-sm transition-all duration-300"
              >
                Install Now
              </motion.button>
              
              <button
                onClick={() => setIsBannerVisible(false)}
                className="text-gray-300 hover:text-white transition-colors duration-200 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          </div>
          
          {/* Subtle animated glow */}
          <motion.div 
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent"
          />
        </motion.div>
      )}

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
              {/* Logo with Gradient - AdsHide Branding */}
              <div className="flex items-center gap-4 xl:justify-start lg:justify-center pt-16">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-red-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                    AdsHide
                  </h1>
                  <p className="text-red-300 font-medium">AI Ad Blocker</p>
                </div>
              </div>

              <div className="space-y-5">
                <motion.h2 
                  className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      background: 'linear-gradient(90deg, #ffffff, #e2e8f0, #ffffff)',
                      backgroundSize: '200% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    The Ad Blocker
                  </motion.span>
                  <motion.span 
                    className="block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{
                      background: 'linear-gradient(90deg, #dc2626, #ea580c, #f59e0b, #dc2626)',
                      backgroundSize: '300% 100%',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent'
                    }}
                  >
                    They Can't Detect
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-gray-200 leading-relaxed max-w-2xl xl:max-w-2xl lg:mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Blocks ads. Bypasses paywalls. Stays invisible. Advanced AI technology that works on sites where others fail.
                </motion.p>
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
                  <motion.button
                    onClick={() => {
                      if (!isPrivacyAccepted) {
                        setExpandedFaq('highlight-checkbox');
                        setTimeout(() => setExpandedFaq(null), 3000);
                      } else {
                        handleAcceptAndContinue();
                      }
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                      y: -2
                    }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="group relative overflow-hidden bg-white hover:bg-gray-50 rounded-2xl px-6 py-4 shadow-2xl border border-gray-200/20 cursor-pointer"
                    style={{
                      filter: !isPrivacyAccepted ? 'none' : 'none'
                    }}
                  >
                    <motion.div 
                      className="flex items-center gap-4"
                      whileHover={{
                        x: 2
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.img 
                        src="https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png"
                        alt="Chrome Web Store"
                        className="h-12 w-auto"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      />
                      <div className="text-left">
                        <div className="text-xs font-medium text-gray-600 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-200">Get Extension</div>
                        <div className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-200">Chrome Web Store</div>
                      </div>
                      <motion.div 
                        className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.div>
                    </motion.div>
                    
                    {/* Animated background effect */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    ></motion.div>

                    {/* Shine effect on hover */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                      initial={{ x: '-100%' }}
                      whileHover={{ x: '100%' }}
                      transition={{ duration: 0.6 }}
                    ></motion.div>
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Clean Contemporary Hero Illustration */}
            <div className="relative hidden xl:block py-24 flex items-center">
              <div className="relative max-w-sm mx-auto mt-12">
                
                {/* Small Transparent Slow Circular Rotating Preloader in Center */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 0.3,
                    scale: [0.7, 1.2, 0.7],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1 },
                    scale: { 
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
                >
                  <div 
                    className="w-28 h-28 rounded-full opacity-40"
                    style={{
                      background: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fab1a0, #ff6b6b)',
                      animation: 'spin 12s linear infinite'
                    }}
                  />
                </motion.div>
                
                {/* Main Card Container - Enhanced Glass Effect */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(59,130,246,0.05))',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.15), 0 0 60px rgba(59,130,246,0.1)'
                  }}
                >
                  
                  {/* Header Status - AdsHide Branding */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex items-center gap-2 mb-4"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg">
                      <Shield className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-white text-sm font-bold">AdsHide AI</div>
                      <div className="text-emerald-400 text-xs">Actively Blocking</div>
                    </div>
                  </motion.div>

                  {/* Live Ad Block Statistics */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="grid grid-cols-1 gap-3 mb-4"
                  >
                    {/* Total Ads Blocked */}
                    <div className="bg-white backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-lg">
                      <div className="text-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                          className="text-2xl font-bold text-red-500 mb-1"
                        >
                          {adsBlocked.toLocaleString()}
                        </motion.div>
                        <div className="text-gray-700 text-xs font-medium">Total Ads Blocked</div>
                        <div className="w-full bg-red-100 rounded-full h-1.5 mt-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 2, delay: 1.4 }}
                            className="bg-gradient-to-r from-red-500 to-red-400 h-1.5 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Today's Ads Blocked */}
                    <div className="bg-white backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-lg">
                      <div className="text-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 1.3 }}
                          className="text-2xl font-bold text-orange-500 mb-1"
                        >
                          {todaysAdsBlocked.toLocaleString()}
                        </motion.div>
                        <div className="text-gray-700 text-xs font-medium">Blocked Today</div>
                        <div className="w-full bg-orange-100 rounded-full h-1.5 mt-2">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={{ width: '85%' }}
                            transition={{ duration: 1.5, delay: 1.5 }}
                            className="bg-gradient-to-r from-orange-500 to-orange-400 h-1.5 rounded-full"
                          ></motion.div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Compact Feature List - AI Features */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500/30 rounded-md flex items-center justify-center">
                        <span className="text-red-400 text-xs">🧠</span>
                      </div>
                      <span className="text-gray-200 text-xs font-medium flex-1">AI Detection</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500/30 rounded-md flex items-center justify-center">
                        <span className="text-purple-400 text-xs">👻</span>
                      </div>
                      <span className="text-gray-200 text-xs font-medium flex-1">Stealth Mode</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500/30 rounded-md flex items-center justify-center">
                        <span className="text-blue-400 text-xs">🔓</span>
                      </div>
                      <span className="text-gray-200 text-xs font-medium flex-1">Paywall Bypass</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-cyan-500/30 rounded-md flex items-center justify-center">
                        <Eye className="w-2.5 h-2.5 text-cyan-400" />
                      </div>
                      <span className="text-gray-200 text-xs font-medium flex-1">Live Stats</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
                      ></motion.div>
                    </div>
                  </motion.div>
                </motion.div>

                {/* Minimalistic Floating Icons - All Same Size */}
                <motion.div
                  animate={{
                    y: [0, -8, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute -top-6 -right-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30"
                  style={{
                    background: 'linear-gradient(135deg, #667eea, #764ba2)',
                    boxShadow: '0 8px 25px rgba(102,126,234,0.3)'
                  }}
                >
                  <span className="text-2xl">⚡</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -10, 0]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute top-1/4 -left-8 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30"
                  style={{
                    background: 'linear-gradient(135deg, #4ecdc4, #44a08d)',
                    boxShadow: '0 8px 25px rgba(78,205,196,0.3)'
                  }}
                >
                  <Shield className="w-6 h-6 text-white" />
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, -6, 0]
                  }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-6 left-1/3 w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30"
                  style={{
                    background: 'linear-gradient(135deg, #ff6b6b, #ffa726)',
                    boxShadow: '0 8px 25px rgba(255,107,107,0.3)'
                  }}
                >
                  <span className="text-2xl">👁️</span>
                </motion.div>

                {/* Animated Background Gradient */}
                <motion.div 
                  animate={{
                    background: [
                      'linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))',
                      'linear-gradient(135deg, rgba(139,92,246,0.05), rgba(16,185,129,0.05))',
                      'linear-gradient(135deg, rgba(16,185,129,0.05), rgba(59,130,246,0.05))'
                    ]
                  }}
                  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 rounded-2xl -z-10"
                ></motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Redesigned Features Section */}
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
              <span className="bg-gradient-to-r from-red-400 via-orange-400 to-red-600 bg-clip-text text-transparent animate-pulse">
                Why It's Smarter
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Advanced AI technology that outperforms traditional ad blockers
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

      {/* Sites Where Others Fail Section */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-red-400 to-orange-600 bg-clip-text text-transparent">
                Sites Where Others Fail, We Don't
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Premium sites that block traditional ad blockers can't detect our AI-powered stealth technology
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Forbes", logo: "🏢" },
              { name: "Wired", logo: "⚡" },
              { name: "Bloomberg", logo: "📈" },
              { name: "Business Insider", logo: "💼" },
              { name: "The Atlantic", logo: "🌊" },
              { name: "LA Times", logo: "🌴" },
              { name: "The Verge", logo: "🔮" },
              { name: "GQ.com", logo: "👔" },
              { name: "NewsBreak", logo: "📰" },
              { name: "The Independent", logo: "🗞️" }
            ].map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-4 border border-white/10 hover:border-red-400/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10 text-center">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {site.logo}
                  </div>
                  <h3 className="text-white text-sm font-medium group-hover:text-red-300 transition-colors duration-300">
                    {site.name}
                  </h3>
                  <div className="mt-2">
                    <div className="w-full h-1 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-red-500 to-orange-400 rounded-full"
                      ></motion.div>
                    </div>
                    <div className="text-emerald-400 text-xs mt-1 font-medium">✓ Working</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* User Testimonials Section */}
      <section className="py-20 relative bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                User Feedback
              </span>
            </h2>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              Real testimonials from users who switched to AdsHide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Finally something that actually works on Bloomberg and Forbes. No nags, no interruptions.",
                author: "Alex T.",
                rating: 5,
                verified: true
              },
              {
                quote: "I left Adblock for this. Never looking back.",
                author: "Jenny K.",
                rating: 5,
                verified: true
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-yellow-400/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  {testimonial.verified && (
                    <div className="ml-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
                <blockquote className="text-gray-200 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-400 font-medium">– {testimonial.author}</span>
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
              Common questions about AdsHide AI Ad Blocker
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
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  AdsHide
                </span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                The AI-powered ad blocker that works where others fail. Completely undetectable and highly effective on premium sites.
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
              <span>© 2025 AdsHide</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
            <div className="text-gray-500 text-sm">
              AI Ad Blocker Technology by <a href="https://www.happydesign.pro/" target="_blank" rel="noopener noreferrer" className="text-red-400 font-medium hover:text-red-300 transition-colors duration-200">Happy Agency</a>
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
              <h3 className="text-xl font-semibold text-red-400 mb-4">Privacy-First Ad Blocking</h3>
              
              <h4 className="text-lg font-semibold text-white mb-3">Data Collection and Privacy</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                This extension is built with privacy as a core principle. We do not collect or store your personal data. All ad blocking is handled locally within your browser using on-device AI models. We do not monitor, track, or log any part of your browsing history.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Local Processing</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We do not sell, share, or trade your data—because we never collect it to begin with. The only communication the extension may perform is to check for updates or bug fixes via the Chrome Web Store. We do not use remote scripts, cloud scanning, or external logging APIs.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Stealth Technology</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Our AI-powered stealth technology operates entirely locally in your browser, ensuring that websites cannot detect the presence of our ad blocker. This technology does not transmit any data about your browsing habits or the sites you visit.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                This tool was created to give users control over their web experience—without compromises to privacy or security. All ad detection and blocking happens on your device using machine learning models that run locally.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you have questions about how we handle data or security, feel free to reach out through the Chrome Web Store support contact. We are committed to maintaining the highest standards of privacy protection.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Security and Updates</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                The security of your browsing experience is important to us. While we strive to use the most advanced security measures to protect your browser experience, remember that no method of internet browsing is 100% secure from all threats.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our extension updates automatically through the Chrome Web Store to ensure you always have the latest ad blocking capabilities and security improvements, without any data collection on our part.
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