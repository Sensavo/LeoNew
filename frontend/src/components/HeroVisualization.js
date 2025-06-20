import React, { useState } from "react";
import { motion } from "framer-motion";
import { Shield, Eye } from "lucide-react";

const HeroVisualization = () => {
  const [adsBlocked] = useState(32118397);
  const [todaysAdsBlocked] = useState(1219487);

  return (
    <div className="relative hidden xl:block py-12 xl:py-16 flex items-center">
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
              <div className="text-gray-900 text-sm font-bold">AdsHide Pro</div>
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
              <span className="text-gray-700 text-xs font-medium flex-1">Smart Detection</span>
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
  );
};

export default HeroVisualization;