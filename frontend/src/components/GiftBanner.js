import React from "react";
import { motion } from "framer-motion";
import { Gift, Clock } from "lucide-react";

const GiftBanner = ({ 
  title = "Your Amazon Gift is almost ready...",
  description = "Click the gift icon in the top right corner to claim it.",
  timerText = "Timer running — don't miss out",
  className = ""
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      className={`bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 ${className}`}
    >
      <motion.div
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="inline-block mb-4"
      >
        <Gift className="w-16 h-16 text-amber-600" />
      </motion.div>
      
      <h3 className="text-2xl font-bold text-amber-800 mb-4">
        {title}
      </h3>
      
      <p className="text-lg text-amber-700 mb-6">
        {description}
      </p>

      {/* Timer Note */}
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="flex items-center justify-center gap-2 text-orange-600 font-semibold"
      >
        <Clock className="w-5 h-5" />
        {timerText}
      </motion.div>
    </motion.div>
  );
};

export default GiftBanner;