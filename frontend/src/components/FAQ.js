import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQ = ({ expandedFaq, setExpandedFaq }) => {
  const faqs = [
    {
      question: "How is this different from other ad blockers?",
      answer: "Our advanced technology detects and blocks native ads and hidden advertising that traditional blockers miss. Plus, we're completely undetectable by anti-adblock systems."
    },
    {
      question: "Will websites know I'm using an ad blocker?",
      answer: "No. Our stealth technology makes the extension completely invisible to website detection systems. You'll never see 'please disable your ad blocker' messages."
    },
    {
      question: "Does it work on paywall sites like Forbes and Wired?",
      answer: "Yes! We specifically designed it to work on sites that block traditional ad blockers, including Forbes, Wired, Bloomberg, Business Insider, and many more."
    },
    {
      question: "Is it safe and private?",
      answer: "Absolutely. All processing happens locally in your browser using on-device AI. We don't track, monitor, or collect any of your browsing data."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="max-w-4xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 bg-clip-text text-transparent">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Common questions about AdsHide AI Ad Blocker
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className={`w-full px-6 py-4 text-left flex items-center justify-between transition-all duration-200 rounded-xl ${
                  expandedFaq === index 
                    ? 'bg-blue-50 border border-blue-300' 
                    : 'bg-white/70 border border-gray-200 hover:bg-gray-50'
                }`}
              >
                <span className="text-lg font-medium text-gray-900 pr-4">{faq.question}</span>
                <div className="flex-shrink-0">
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-600" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-blue-600 transition-colors duration-200" />
                  )}
                </div>
              </button>
              {expandedFaq === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600 leading-relaxed pt-2 border-t border-blue-200">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;