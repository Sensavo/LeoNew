import React from "react";
import { motion } from "framer-motion";
import { X, ExternalLink } from "lucide-react";

const Banner = ({ 
  isBannerVisible, 
  setIsBannerVisible, 
  isPrivacyAccepted, 
  setExpandedFaq, 
  chromeStoreUrl 
}) => {
  if (!isBannerVisible) return null;

  return (
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
  );
};

export default Banner;