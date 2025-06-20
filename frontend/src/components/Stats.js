import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, TrendingUp, Users } from "lucide-react";

const Stats = () => {
  const [totalAdsBlocked, setTotalAdsBlocked] = useState(5569705);
  const [userContribution, setUserContribution] = useState(324234);

  // Random growth every few seconds
  useEffect(() => {
    const interval = setInterval(() => {
      // Total ads blocked grows by 1-15 every 3 seconds
      setTotalAdsBlocked(prev => prev + Math.floor(Math.random() * 15) + 1);
      
      // User contribution grows by 0-3 every 3 seconds (slower growth)
      if (Math.random() > 0.3) { // 70% chance to grow
        setUserContribution(prev => prev + Math.floor(Math.random() * 4));
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Format numbers with commas
  const formatNumber = (num) => {
    return num.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div 
        animate={{
          background: [
            'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #e0f2fe 50%, #f1f5f9 75%, #ffffff 100%)',
            'linear-gradient(135deg, #f1f5f9 0%, #e0f2fe 25%, #ffffff 50%, #f8fafc 75%, #e0f2fe 100%)',
            'linear-gradient(135deg, #e0f2fe 0%, #f8fafc 25%, #f1f5f9 50%, #ffffff 75%, #f8fafc 100%)',
            'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #e0f2fe 50%, #f1f5f9 75%, #ffffff 100%)'
          ]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
      />

      {/* Floating Geometric Shapes Background */}
      <div className="absolute inset-0">
        {/* Large Circle */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-3xl"
        />
        
        {/* Medium Circle */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-red-200/20 to-orange-200/15 rounded-full blur-2xl"
        />
        
        {/* Small Circle */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-gradient-to-br from-emerald-200/25 to-teal-200/20 rounded-full blur-xl"
        />
      </div>

      {/* Enhanced Pattern Overlay */}
      <motion.div 
        animate={{
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3Ccircle cx="80" cy="20" r="1"/%3E%3Ccircle cx="50" cy="50" r="1.5"/%3E%3Ccircle cx="20" cy="80" r="1"/%3E%3Ccircle cx="80" cy="80" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto mb-12 px-6"
        >
          <div className="flex items-center justify-start">
            {/* Logo - Left aligned like home page */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
                  AdsHide
                </h1>
                <p className="text-red-600 font-medium">Advanced Ad Blocker</p>
              </div>
            </div>
          </div>
          
          {/* Title Section */}
          <div className="mt-12 mb-8">
            <motion.h2 
              className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-gray-900">The Ad Blocker</span>
              <span className="block bg-gradient-to-r from-red-600 via-red-700 to-orange-600 bg-clip-text text-transparent">
                They Can't Detect
              </span>
            </motion.h2>
          </div>
        </motion.div>

        {/* Main Stats Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl mx-auto px-6"
        >
          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Total Ads Blocked */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-600">Total Ads Blocked</h3>
                  <p className="text-sm text-gray-500">Across all users</p>
                </div>
              </div>
              
              <motion.div
                key={totalAdsBlocked}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-2"
              >
                {formatNumber(totalAdsBlocked)}
              </motion.div>
            </motion.div>

            {/* Your Contribution */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-gray-200/60 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-600">Your Contribution</h3>
                  <p className="text-sm text-gray-500">Ads blocked by you</p>
                </div>
              </div>
              
              <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-2">
                {formatNumber(userContribution)}
              </div>
            </motion.div>
          </div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center bg-gradient-to-br from-white/90 to-green-50/80 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/60 shadow-xl"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              💚
            </motion.div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Thank you for keeping the web cleaner and faster!
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              You can check back here for future updates, news or other developments.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 py-16 bg-gradient-to-t from-gray-100 to-gray-50 relative border-t border-gray-200">
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
                  The advanced ad blocker that works where others fail. Completely undetectable and highly effective on premium sites.
                </p>
              </div>

              {/* Statistics Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Statistics</h3>
                <div className="space-y-3">
                  <div className="text-gray-600">
                    <span className="block text-sm">Total Ads Blocked</span>
                    <span className="text-lg font-semibold text-red-600">{formatNumber(totalAdsBlocked)}+</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="block text-sm">Your Contribution</span>
                    <span className="text-lg font-semibold text-orange-600">{formatNumber(userContribution)}</span>
                  </div>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">About</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Advanced technology that outperforms traditional ad blockers. Works on sites where others fail.
                </p>
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
      </div>
    </div>
  );
};

export default Stats;