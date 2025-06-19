import React from "react";
import { motion } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";

const Footer = ({ 
  setIsPrivacyModalOpen, 
  isPrivacyAccepted, 
  setExpandedFaq, 
  chromeStoreUrl 
}) => {
  return (
    <footer className="py-16 bg-gradient-to-t from-gray-100 to-gray-50 relative border-t border-gray-200">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-purple-50/30"></div>
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                AdsHide
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">
              The advanced ad blocker that works where others fail. Completely undetectable and highly effective on premium sites.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="block text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <a href="#features" className="block text-gray-600 hover:text-red-600 transition-colors duration-200">
                Features
              </a>
              <a href="#faq" className="block text-gray-600 hover:text-red-600 transition-colors duration-200">
                FAQ
              </a>
            </div>
          </div>

          {/* Install Section */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Get Started</h3>
            <button 
              onClick={() => {
                // Scroll to top
                window.scrollTo({ top: 0, behavior: 'smooth' });
                // If privacy not accepted, highlight checkbox
                if (!isPrivacyAccepted) {
                  setTimeout(() => {
                    setExpandedFaq('highlight-checkbox');
                    setTimeout(() => setExpandedFaq(null), 3000);
                  }, 800);
                } else {
                  // If accepted, redirect to Chrome Store
                  setTimeout(() => {
                    window.open(chromeStoreUrl, '_blank');
                  }, 800);
                }
              }}
              className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Install Extension
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200">
          <div className="flex items-center gap-6 text-gray-500 text-sm mb-4 md:mb-0">
            <span>© 2025 AdsHide</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
          <div className="text-gray-500 text-sm">
            Website created at <a href="https://www.happydesign.pro/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-700 transition-colors duration-200">Happy Agency</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;