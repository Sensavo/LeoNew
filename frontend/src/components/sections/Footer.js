/**
 * Footer Section Component
 * Website footer with brand information, links, and install CTA
 * Features responsive layout and smooth scrolling interactions
 */

import React from "react";
import { Shield, ExternalLink } from "lucide-react";
import { CHROME_STORE_URL } from "../../constants";

const Footer = ({ 
  setIsPrivacyModalOpen, 
  isPrivacyAccepted,
  setExpandedFaq 
}) => {
  /**
   * Handle footer install button click
   * Scrolls to top and handles privacy check or redirect
   */
  const handleInstallClick = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Handle privacy check or redirect
    if (!isPrivacyAccepted) {
      setTimeout(() => {
        setExpandedFaq('highlight-checkbox');
        setTimeout(() => setExpandedFaq(null), 3000);
      }, 800);
    } else {
      setTimeout(() => {
        window.open(CHROME_STORE_URL, '_blank');
      }, 800);
    }
  };

  return (
    <footer className="py-16 bg-gradient-to-t from-gray-900 to-gray-800 relative border-t border-gray-700/50">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5" />
      
      <div className="max-w-6xl mx-auto px-6 relative">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                WebOS Toolkit
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Professional browser extension designed by developers for developers. 
              Optimize your browsing experience today.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <div className="space-y-3">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Privacy Policy
              </button>
              <a 
                href="#features" 
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                Features
              </a>
              <a 
                href="#faq" 
                className="block text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                FAQ
              </a>
            </div>
          </div>

          {/* Install Section */}
          <div>
            <h3 className="text-white font-semibold mb-4">Get Started</h3>
            <button 
              onClick={handleInstallClick}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors duration-200"
            >
              <ExternalLink className="w-4 h-4" />
              Install Extension
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-700/50">
          <div className="flex items-center gap-6 text-gray-500 text-sm mb-4 md:mb-0">
            <span>© 2025 WebOS Toolkit</span>
            <span>•</span>
            <span>All rights reserved</span>
          </div>
          <div className="text-gray-500 text-sm">
            Website created by{' '}
            <a 
              href="https://www.happydesign.pro/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200"
            >
              Happy Agency
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;