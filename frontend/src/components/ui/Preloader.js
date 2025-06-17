/**
 * Preloader Component
 * Circular rotating preloader with gradient colors and scaling animation
 * Used in the hero section for visual appeal
 */

import React from "react";
import { motion } from "framer-motion";
import { ANIMATIONS, COLORS } from "../constants";

const Preloader = ({ className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: ANIMATIONS.PRELOADER.opacity.finalOpacity,
        scale: ANIMATIONS.PRELOADER.scaling.scale,
      }}
      transition={{
        opacity: { 
          duration: ANIMATIONS.PRELOADER.opacity.duration, 
          delay: ANIMATIONS.PRELOADER.opacity.delay 
        },
        scale: { 
          duration: ANIMATIONS.PRELOADER.scaling.duration,
          repeat: ANIMATIONS.PRELOADER.scaling.repeat,
          ease: ANIMATIONS.PRELOADER.scaling.ease
        }
      }}
      className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-5 ${className}`}
    >
      <div 
        className="w-28 h-28 rounded-full opacity-40"
        style={{
          background: COLORS.gradients.preloader,
          animation: `spin ${ANIMATIONS.PRELOADER.rotation.duration}s linear infinite`
        }}
      />
    </motion.div>
  );
};

export default Preloader;