/**
 * FAQ Section Component
 * Interactive FAQ section with expandable questions and answers
 * Features smooth animations and color-coded states
 */

import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FAQS, ANIMATIONS } from "../../constants";

const FAQ = ({ expandedFaq, setExpandedFaq }) => {
  /**
   * Toggle FAQ item expansion
   * @param {number} index - Index of the FAQ item to toggle
   */
  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: ANIMATIONS.PAGE.fadeIn.duration }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-600 bg-clip-text text-transparent animate-pulse">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto">
            Common questions about WebOS Toolkit
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isExpanded={expandedFaq === index}
              onToggle={() => toggleFaq(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Individual FAQ Item Component
 * Handles the expand/collapse functionality and styling for each FAQ
 */
const FAQItem = ({ faq, index, isExpanded, onToggle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * ANIMATIONS.PAGE.stagger.duration 
      }}
      viewport={{ once: true }}
      className="group"
    >
      {/* Question Button */}
      <button
        onClick={onToggle}
        className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-200 rounded-xl ${
          isExpanded 
            ? 'bg-blue-500/10 border border-blue-400/30' 
            : 'bg-gray-800/30 border border-gray-700/30 hover:bg-gray-700/30'
        }`}
        aria-expanded={isExpanded}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="text-lg font-medium text-white pr-4">
          {faq.question}
        </span>
        <div className="flex-shrink-0">
          {isExpanded ? (
            <ChevronUp className="w-5 h-5 text-blue-400" />
          ) : (
            <ChevronDown className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-200" />
          )}
        </div>
      </button>
      
      {/* Answer Content */}
      {isExpanded && (
        <motion.div
          id={`faq-answer-${index}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="px-6 pb-4"
        >
          <p className="text-gray-300 leading-relaxed pt-2 border-t border-blue-400/20">
            {faq.answer}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FAQ;