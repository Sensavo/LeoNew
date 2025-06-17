/**
 * Features Section Component
 * Displays the key features of WebOS Toolkit in a responsive grid
 * Each feature includes an icon, title, description, and animated progress bar
 */

import React from "react";
import { motion } from "framer-motion";
import { FEATURES, ANIMATIONS } from "../../constants";

const Features = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATIONS.PAGE.fadeIn.duration }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
              Key Features
            </span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Professional tools designed to optimize your browser performance
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Individual Feature Card Component
 * Displays a single feature with icon, content, and performance indicator
 */
const FeatureCard = ({ feature, index }) => {
  const IconComponent = feature.icon;
  
  // Calculate performance percentage based on index
  const performancePercentage = 75 + index * 5;
  
  // Color mapping for progress bars
  const progressColors = [
    'bg-blue-400',
    'bg-purple-400', 
    'bg-cyan-400',
    'bg-green-400'
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * ANIMATIONS.PAGE.stagger.duration 
      }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
        
        {/* Feature Icon */}
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
        </div>
        
        {/* Feature Content */}
        <div className="flex-grow mb-4">
          <h3 className="text-lg font-bold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
        
        {/* Performance Indicator */}
        <div className="mt-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-400 text-xs">Performance</span>
            <span className="text-green-400 text-xs font-medium">
              {feature.performanceLabel}
            </span>
          </div>
          <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${performancePercentage}%` }}
              transition={{ 
                duration: 1.5, 
                delay: 0.5 + index * ANIMATIONS.PAGE.stagger.duration 
              }}
              viewport={{ once: true }}
              className={`h-full rounded-full ${progressColors[index % progressColors.length]}`}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Features;