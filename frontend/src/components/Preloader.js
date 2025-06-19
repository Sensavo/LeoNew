import React from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="mb-6"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl mx-auto">
            <Shield className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Brand Name */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent mb-2"
        >
          AdsHide
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-red-600 font-medium mb-8"
        >
          AI Ad Blocker
        </motion.p>

        {/* Loading Animation */}
        <div className="flex items-center justify-center gap-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut"
              }}
              className="w-3 h-3 bg-red-500 rounded-full"
            />
          ))}
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-gray-600 text-sm mt-4"
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;