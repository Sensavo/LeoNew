/**
 * Banner Component
 * Displays the promotional $5 Amazon Gift Card banner at the top of the page
 * Features: Dismissible, animated, responsive design
 */

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { CHROME_STORE_URL, ANIMATIONS } from "../constants";

const Banner = ({ 
  isVisible, 
  onDismiss, 
  onClaimClick, 
  isPrivacyAccepted,
  setExpandedFaq 
}) => {
  /**
   * Handle claim button click
   * Checks privacy acceptance and either redirects or highlights checkbox
   */
  const handleClaim = () => {
    if (!isPrivacyAccepted) {
      setExpandedFaq('highlight-checkbox');
      setTimeout(() => setExpandedFaq(null), 3000);
    } else {
      window.open(CHROME_STORE_URL, '_blank');
    }
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -50, opacity: 0 }}
      transition={{ duration: ANIMATIONS.BANNER.slideIn.duration, ease: ANIMATIONS.BANNER.slideIn.ease }}
      className="relative text-white py-3 px-4 z-50"
      style={{
        background: 'linear-gradient(135deg, #131A22 0%, #232F3E 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Left Content */}
        <motion.div 
          className="flex items-center gap-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: ANIMATIONS.BANNER.contentDelay.left }}
        >
          <div className="text-orange-400 font-medium text-sm">
            🎁 $5 Amazon Gift Card
          </div>
          <div className="text-gray-300 text-sm">
            Install WebOS Toolkit to claim your reward
          </div>
        </motion.div>
        
        {/* Right Content */}
        <motion.div 
          className="flex items-center gap-4"
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: ANIMATIONS.BANNER.contentDelay.right }}
        >
          {/* Claim Button */}
          <motion.button
            onClick={handleClaim}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 20px rgba(255, 153, 0, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-1.5 rounded-md font-medium text-sm transition-all duration-300"
          >
            Claim
          </motion.button>
          
          {/* Dismiss Button */}
          <button
            onClick={onDismiss}
            className="text-gray-500 hover:text-gray-300 transition-colors duration-200 p-1"
            aria-label="Dismiss banner"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
      
      {/* Animated Glow Effect */}
      <motion.div 
        animate={{
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: ANIMATIONS.BANNER.glow.duration,
          repeat: ANIMATIONS.BANNER.glow.repeat,
          ease: ANIMATIONS.BANNER.glow.ease
        }}
        className="absolute bottom-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent"
      />
    </motion.div>
  );
};

export default Banner;