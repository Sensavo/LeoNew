/**
 * Hero Section Component
 * Main landing section with title, description, privacy checkbox, and CTA button
 * Includes animated preloader visualization on the right side
 */

import React from "react";
import { motion } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";
import { CHROME_STORE_URL, ANIMATIONS, IMAGES } from "../../constants";
import Preloader from "../ui/Preloader";
import HeroVisualization from "./HeroVisualization";

const Hero = ({ 
  isPrivacyAccepted, 
  setIsPrivacyAccepted, 
  setIsPrivacyModalOpen,
  expandedFaq,
  setExpandedFaq 
}) => {
  /**
   * Handle Chrome Store button click
   * Checks privacy acceptance before redirecting
   */
  const handleChromeStoreClick = () => {
    if (!isPrivacyAccepted) {
      setExpandedFaq('highlight-checkbox');
      setTimeout(() => setExpandedFaq(null), 3000);
    } else {
      window.open(CHROME_STORE_URL, '_blank');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images and Overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-900/95" />
      
      {/* Geometric Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ 
          backgroundImage: `url('${IMAGES.pattern}')`,
          backgroundSize: '400px 400px',
          backgroundRepeat: 'repeat'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-8">
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-12 items-start min-h-screen">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: ANIMATIONS.PAGE.fadeIn.duration, ease: ANIMATIONS.PAGE.fadeIn.ease }}
            className="text-left xl:text-left lg:text-center space-y-6 xl:max-w-none lg:max-w-4xl lg:mx-auto"
          >
            {/* Logo and Brand */}
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

            {/* Main Heading */}
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
                  Supercharge Your
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
                    background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #06b6d4, #3b82f6)',
                    backgroundSize: '300% 100%',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                  }}
                >
                  Browser Experience
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-200 leading-relaxed max-w-2xl xl:max-w-2xl lg:mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Professional developer tools to speed up your browser, unlock advanced insights, and take full control of your browsing experience.
              </motion.p>
            </div>

            {/* Privacy Checkbox & CTA */}
            <div className="space-y-4">
              {/* Privacy Checkbox */}
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

              {/* Chrome Store Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="xl:flex xl:justify-start lg:flex lg:justify-center"
              >
                <motion.button
                  onClick={handleChromeStoreClick}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden bg-white hover:bg-gray-50 rounded-2xl px-6 py-4 shadow-2xl border border-gray-200/20 cursor-pointer"
                >
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{ x: 2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.img 
                      src={IMAGES.chromeStore}
                      alt="Chrome Web Store"
                      className="h-12 w-auto"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="text-left">
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-200">
                        Get Extension
                      </div>
                      <div className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-200">
                        Chrome Web Store
                      </div>
                    </div>
                    <motion.div 
                      className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Background Effects */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Hero Visualization */}
          <div className="relative hidden xl:block py-24 flex items-center">
            <HeroVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;