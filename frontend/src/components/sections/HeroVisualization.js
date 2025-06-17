/**
 * Hero Visualization Component
 * Interactive dashboard visualization showing WebOS Toolkit in action
 * Features: Glass effect, animated stats, floating icons, and preloader
 */

import React from "react";
import { motion } from "framer-motion";
import { Shield, Search } from "lucide-react";
import Preloader from "../ui/Preloader";
import { COLORS } from "../../constants";

const HeroVisualization = () => {
  return (
    <div className="relative max-w-sm mx-auto mt-12">
      {/* Preloader Component */}
      <Preloader />
      
      {/* Main Dashboard Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10 z-10"
        style={{
          background: COLORS.gradients.hero,
          backdropFilter: 'blur(20px)',
          boxShadow: '0 25px 50px rgba(0,0,0,0.15), 0 0 60px rgba(59,130,246,0.1)'
        }}
      >
        
        {/* Header Status */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex items-center gap-2 mb-4"
        >
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <Shield className="w-4 h-4 text-white" />
          </div>
          <div>
            <div className="text-white text-sm font-bold">WebOS Toolkit</div>
            <div className="text-emerald-400 text-xs">Active & Protecting</div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="grid grid-cols-2 gap-3 mb-4"
        >
          {/* Ads Blocked Stat */}
          <div className="bg-white backdrop-blur-md rounded-xl p-3 border border-gray-200 shadow-lg">
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-2xl font-bold text-red-500 mb-1"
              >
                247
              </motion.div>
              <div className="text-gray-700 text-xs font-medium">Ads Blocked</div>
              <div className="w-full bg-red-100 rounded-full h-1.5 mt-1">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '85%' }}
                  transition={{ duration: 1.5, delay: 1.4 }}
                  className="bg-gradient-to-r from-red-500 to-red-400 h-1.5 rounded-full"
                />
              </div>
            </div>
          </div>
          
          {/* Speed Boost Stat */}
          <div className="bg-white backdrop-blur-md rounded-xl p-3 border border-gray-200 shadow-lg">
            <div className="text-center">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="text-2xl font-bold text-emerald-500 mb-1"
              >
                +73%
              </motion.div>
              <div className="text-gray-700 text-xs font-medium">Speed Boost</div>
              <div className="w-full bg-emerald-100 rounded-full h-1.5 mt-1">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: '73%' }}
                  transition={{ duration: 1.5, delay: 1.5 }}
                  className="bg-gradient-to-r from-emerald-500 to-emerald-400 h-1.5 rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Status List */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="space-y-1.5"
        >
          {[
            { icon: "🔧", label: "Headers", delay: 0 },
            { icon: "🚫", label: "Ad Block", delay: 0.5 },
            { icon: "⚡", label: "HTML Sim", delay: 1 },
            { label: "Images", delay: 1.5, customIcon: Search }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500/30 rounded-md flex items-center justify-center">
                {item.customIcon ? (
                  <item.customIcon className="w-2.5 h-2.5 text-cyan-400" />
                ) : (
                  <span className="text-blue-400 text-xs">{item.icon}</span>
                )}
              </div>
              <span className="text-gray-200 text-xs font-medium flex-1">{item.label}</span>
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: item.delay }}
                className="w-1.5 h-1.5 bg-emerald-400 rounded-full"
              />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating Action Icons */}
      <FloatingIcon
        position="-top-6 -right-8"
        gradient="linear-gradient(135deg, #667eea, #764ba2)"
        shadow="rgba(102,126,234,0.3)"
        duration={4}
        delay={0}
      >
        ⚡
      </FloatingIcon>

      <FloatingIcon
        position="top-1/4 -left-8"
        gradient="linear-gradient(135deg, #4ecdc4, #44a08d)"
        shadow="rgba(78,205,196,0.3)"
        duration={5}
        delay={1}
        icon={Shield}
      />

      <FloatingIcon
        position="-bottom-6 left-1/3"
        gradient="linear-gradient(135deg, #ff6b6b, #ffa726)"
        shadow="rgba(255,107,107,0.3)"
        duration={4.5}
        delay={2}
      >
        👁️
      </FloatingIcon>

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
      />
    </div>
  );
};

/**
 * Floating Icon Component
 * Reusable floating animation wrapper for icons
 */
const FloatingIcon = ({ 
  position, 
  gradient, 
  shadow, 
  duration, 
  delay, 
  children, 
  icon: Icon 
}) => (
  <motion.div
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration,
      repeat: Infinity,
      ease: "easeInOut",
      delay
    }}
    className={`absolute ${position} w-12 h-12 rounded-full flex items-center justify-center shadow-lg z-30`}
    style={{
      background: gradient,
      boxShadow: `0 8px 25px ${shadow}`
    }}
  >
    {Icon ? (
      <Icon className="w-6 h-6 text-white" />
    ) : (
      <span className="text-2xl">{children}</span>
    )}
  </motion.div>
);

export default HeroVisualization;