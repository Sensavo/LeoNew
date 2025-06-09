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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
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

      {/* Hero Section - Improved Light Theme */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Clean Light Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50" />
        
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{ 
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            backgroundSize: '30px 30px'
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
              {/* Logo with Gradient - AdsHide Branding - Light Theme */}
              <div className="flex items-center gap-4 xl:justify-start lg:justify-center pt-16">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
                    AdsHide
                  </h1>
                  <p className="text-red-600 font-medium">AI Ad Blocker</p>
                </div>
              </div>

              <div className="space-y-5">
                <motion.h2 
                  className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <motion.span
                    className="block text-gray-900"
                    animate={{
                      opacity: [0.9, 1, 0.9]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    The Ad Blocker
                  </motion.span>
                  <motion.span 
                    className="block bg-gradient-to-r from-red-600 via-red-700 to-orange-600 bg-clip-text text-transparent"
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
                      backgroundSize: '300% 100%'
                    }}
                  >
                    They Can't Detect
                  </motion.span>
                </motion.h2>
                
                <motion.p 
                  className="text-xl text-gray-800 leading-relaxed max-w-2xl xl:max-w-2xl lg:mx-auto font-medium"
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
                    className={`flex items-center gap-3 text-sm p-4 rounded-xl transition-all duration-500 border-2 ${
                      !isPrivacyAccepted && expandedFaq === 'highlight-checkbox' 
                        ? 'bg-red-50 border-red-300 shadow-lg shadow-red-500/25 animate-pulse' 
                        : 'bg-white/80 border-gray-300 shadow-sm'
                    }`}
                  >
                    <input
                      type="checkbox"
                      id="privacy-agreement"
                      checked={isPrivacyAccepted}
                      onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                      className="w-5 h-5 text-red-600 bg-white border-gray-400 rounded focus:ring-red-500 focus:ring-2"
                    />
                    <label htmlFor="privacy-agreement" className="text-gray-800 text-sm font-medium">
                      I agree to the{' '}
                      <button
                        onClick={() => setIsPrivacyModalOpen(true)}
                        className="text-red-600 hover:text-red-700 underline font-semibold"
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
                
                {/* Small Subtle Working Indicator in Center */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 0.7,
                    scale: [0.9, 1.05, 0.9],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 1 },
                    scale: { 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5"
                >
                  <div className="flex items-center gap-2 bg-emerald-500/10 backdrop-blur-sm rounded-full px-4 py-2 border border-emerald-500/20">
                    <motion.div 
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-2 h-2 bg-emerald-400 rounded-full"
                    />
                    <span className="text-emerald-600 text-xs font-medium">Working</span>
                  </div>
                </motion.div>
                
                {/* Main Card Container - Light Glass Effect */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="relative bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200/50 z-10"
                  style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.8), rgba(59,130,246,0.05))',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.1), 0 0 60px rgba(59,130,246,0.05)'
                  }}
                >
                  
                  {/* Header Status - AdsHide Branding - Light Theme */}
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
                      <div className="text-gray-900 text-sm font-bold">AdsHide AI</div>
                      <div className="text-emerald-600 text-xs">Actively Blocking</div>
                    </div>
                  </motion.div>

                  {/* Live Ad Block Statistics - Light Theme */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="grid grid-cols-1 gap-3 mb-4"
                  >
                    {/* Total Ads Blocked */}
                    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-lg">
                      <div className="text-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 1.2 }}
                          className="text-2xl font-bold text-red-600 mb-1"
                        >
                          {adsBlocked.toLocaleString()}
                        </motion.div>
                        <div className="text-gray-600 text-xs font-medium">Total Ads Blocked</div>
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
                    <div className="bg-white/90 backdrop-blur-md rounded-xl p-4 border border-gray-200 shadow-lg">
                      <div className="text-center">
                        <motion.div 
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.6, delay: 1.3 }}
                          className="text-2xl font-bold text-orange-600 mb-1"
                        >
                          {todaysAdsBlocked.toLocaleString()}
                        </motion.div>
                        <div className="text-gray-600 text-xs font-medium">Blocked Today</div>
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

                  {/* Compact Feature List - Light Theme */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.1 }}
                    className="space-y-1.5"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500/20 rounded-md flex items-center justify-center">
                        <span className="text-red-600 text-xs">🧠</span>
                      </div>
                      <span className="text-gray-700 text-xs font-medium flex-1">AI Detection</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-purple-500/20 rounded-md flex items-center justify-center">
                        <span className="text-purple-600 text-xs">👻</span>
                      </div>
                      <span className="text-gray-700 text-xs font-medium flex-1">Stealth Mode</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                        className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-500/20 rounded-md flex items-center justify-center">
                        <span className="text-blue-600 text-xs">🔓</span>
                      </div>
                      <span className="text-gray-700 text-xs font-medium flex-1">Paywall Bypass</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                      ></motion.div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-cyan-500/20 rounded-md flex items-center justify-center">
                        <Eye className="w-2.5 h-2.5 text-cyan-600" />
                      </div>
                      <span className="text-gray-700 text-xs font-medium flex-1">Live Stats</span>
                      <motion.div 
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                        className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
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

      {/* Redesigned Features Section - Light Theme */}
      <section className="py-20 relative bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 via-orange-600 to-red-700 bg-clip-text text-transparent">
                Why It's Smarter
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
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
                <div className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/60 hover:border-red-300/50 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content - Flexible grow */}
                  <div className="flex-grow mb-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Performance Bar - Aligned to bottom */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-500 text-xs">Performance</span>
                      <span className="text-green-600 text-xs font-medium">
                        {index === 0 ? 'AI-Powered' : index === 1 ? 'Invisible' : index === 2 ? 'Unlimited' : 'Universal'}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 + index * 3}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-red-500' :
                          index === 1 ? 'bg-purple-500' :
                          index === 2 ? 'bg-blue-500' : 'bg-orange-500'
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

      {/* Sites Where Others Fail Section - Completely Redesigned */}
      <section className="py-20 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Works on Premium Sites That Block Others
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Major publications can't detect our AI-powered stealth technology. Access your favorite content without interruptions.
            </p>
          </motion.div>

          {/* Modern Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                name: "Forbes", 
                description: "Business & Finance News",
                status: "Fully Compatible",
                color: "from-blue-500 to-blue-600"
              },
              { 
                name: "Wired", 
                description: "Technology & Innovation",
                status: "Fully Compatible",
                color: "from-purple-500 to-purple-600"
              },
              { 
                name: "Bloomberg", 
                description: "Financial Markets & News",
                status: "Fully Compatible",
                color: "from-green-500 to-green-600"
              },
              { 
                name: "Business Insider", 
                description: "Business & Tech News",
                status: "Fully Compatible",
                color: "from-red-500 to-red-600"
              },
              { 
                name: "The Atlantic", 
                description: "Politics & Culture",
                status: "Fully Compatible",
                color: "from-indigo-500 to-indigo-600"
              },
              { 
                name: "The Verge", 
                description: "Technology & Science",
                status: "Fully Compatible",
                color: "from-orange-500 to-orange-600"
              }
            ].map((site, index) => (
              <motion.div
                key={site.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-xl group-hover:scale-105">
                  {/* Site Icon */}
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${site.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <div className="w-6 h-6 bg-white rounded opacity-90"></div>
                  </div>
                  
                  {/* Site Info */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{site.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{site.description}</p>
                  
                  {/* Status */}
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-600 text-sm font-medium">{site.status}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Sites Banner */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              And Many More Premium Sites
            </h3>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["LA Times", "GQ.com", "NewsBreak", "The Independent", "Wall Street Journal", "Financial Times"].map((site, index) => (
                <motion.span
                  key={site}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 bg-white rounded-full text-gray-700 font-medium shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300"
                >
                  {site}
                </motion.span>
              ))}
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our AI technology works on hundreds of premium sites that traditionally block ad blockers. 
              No more "please disable your ad blocker" messages.
            </p>
          </motion.div>
        </div>
      </section>

      {/* User Testimonials Section - Light Theme */}
      <section className="py-20 relative bg-gradient-to-b from-gray-50 via-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
                User Feedback
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
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
                className="bg-white/70 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/60 hover:border-yellow-400/40 transition-all duration-300 shadow-lg"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                  {testimonial.verified && (
                    <div className="ml-2 flex items-center gap-1">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-green-600 text-xs font-medium">Verified</span>
                    </div>
                  )}
                </div>
                <blockquote className="text-gray-700 leading-relaxed mb-4 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-600 font-medium">– {testimonial.author}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section - Light Theme */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-4xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
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
                      ? 'bg-blue-50 border border-blue-300' 
                      : 'bg-white/70 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
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
                    <p className="text-gray-600 leading-relaxed pt-2 border-t border-blue-200">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer - Light Theme */}
      <footer className="py-16 bg-gradient-to-t from-gray-100 to-gray-50 relative border-t border-gray-200">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
        <div className="max-w-6xl mx-auto px-6 relative">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                  AdsHide
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                The AI-powered ad blocker that works where others fail. Completely undetectable and highly effective on premium sites.
              </p>
            </div>

            {/* Quick Links Section */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
              <div className="space-y-3">
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="block text-gray-600 hover:text-red-600 transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <a href="#features" className="block text-gray-600 hover:text-red-600 transition-colors duration-200">
                  Features
                </a>
                <a href="#faq" className="block text-gray-600 hover:text-red-600 transition-colors duration-200">
                  FAQ
                </a>
              </div>
            </div>

            {/* Install Section */}
            <div>
              <h3 className="text-gray-900 font-semibold mb-4">Get Started</h3>
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
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
              >
                <ExternalLink className="w-4 h-4" />
                Install Extension
              </button>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
            <div className="flex items-center gap-6 text-gray-500 text-sm mb-4 md:mb-0">
              <span>© 2025 AdsHide</span>
              <span>•</span>
              <span>All rights reserved</span>
            </div>
            <div className="text-gray-500 text-sm">
              Website created at <a href="https://www.happydesign.pro/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors duration-200">Happy Agency</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal - Light Theme */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto border border-gray-200 shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            <div className="prose prose-gray max-w-none">
              <h3 className="text-xl font-semibold text-red-600 mb-4">Privacy-First Ad Blocking</h3>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Collection and Privacy</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                This extension is built with privacy as a core principle. We do not collect or store your personal data. All ad blocking is handled locally within your browser using on-device AI models. We do not monitor, track, or log any part of your browsing history.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Local Processing</h4>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We do not sell, share, or trade your data—because we never collect it to begin with. The only communication the extension may perform is to check for updates or bug fixes via the Chrome Web Store. We do not use remote scripts, cloud scanning, or external logging APIs.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Stealth Technology</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our AI-powered stealth technology operates entirely locally in your browser, ensuring that websites cannot detect the presence of our ad blocker. This technology does not transmit any data about your browsing habits or the sites you visit.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                This tool was created to give users control over their web experience—without compromises to privacy or security. All ad detection and blocking happens on your device using machine learning models that run locally.
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                If you have questions about how we handle data or security, feel free to reach out through the Chrome Web Store support contact. We are committed to maintaining the highest standards of privacy protection.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-3">Security and Updates</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The security of your browsing experience is important to us. While we strive to use the most advanced security measures to protect your browser experience, remember that no method of internet browsing is 100% secure from all threats.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our extension updates automatically through the Chrome Web Store to ensure you always have the latest ad blocking capabilities and security improvements, without any data collection on our part.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold transition-colors duration-200"
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