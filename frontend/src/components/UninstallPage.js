import React from "react";
import { motion } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";

const UninstallPage = () => {
  const chromeStoreUrl = "https://chromewebstore.google.com/detail/ai-ad-blocker/ceiidfadobgbkfaclpjopldnbpihhcdg";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900">
      {/* Dynamic Gradient Background - Same as ThankYou page */}
      <div className="fixed inset-0 -z-10">
        <motion.div 
          animate={{
            background: [
              'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e0f2fe 40%, #f1f5f9 60%, #f8fafc 80%, #ffffff 100%)',
              'linear-gradient(135deg, #f1f5f9 0%, #e0f2fe 20%, #f8fafc 40%, #ffffff 60%, #f1f5f9 80%, #e0f2fe 100%)',
              'linear-gradient(135deg, #e0f2fe 0%, #f8fafc 20%, #f1f5f9 40%, #f8fafc 60%, #e0f2fe 80%, #f1f5f9 100%)',
              'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 20%, #e0f2fe 40%, #f1f5f9 60%, #f8fafc 80%, #ffffff 100%)'
            ]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />

        {/* Floating Geometric Shapes Background */}
        <div className="absolute inset-0">
          {/* Large Circle - Softer Blue */}
          <motion.div
            animate={{
              x: [0, 60, 0],
              y: [0, -40, 0],
              scale: [1, 1.05, 1],
              opacity: [0.06, 0.08, 0.06]
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-blue-100/40 to-sky-100/30 rounded-full blur-3xl"
          />
          
          {/* Medium Circle - Softer Red/Orange */}
          <motion.div
            animate={{
              x: [0, -80, 0],
              y: [0, 60, 0],
              scale: [1, 0.9, 1],
              opacity: [0.05, 0.07, 0.05]
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 8
            }}
            className="absolute top-1/2 right-1/3 w-64 h-64 bg-gradient-to-br from-red-100/30 to-orange-100/25 rounded-full blur-3xl"
          />
          
          {/* Small Circle - Softer Green */}
          <motion.div
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
              scale: [1, 1.1, 1],
              opacity: [0.04, 0.06, 0.04]
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 15
            }}
            className="absolute bottom-1/4 left-1/2 w-48 h-48 bg-gradient-to-br from-emerald-100/35 to-teal-100/25 rounded-full blur-2xl"
          />
          
          {/* Additional Subtle Elements */}
          <motion.div
            animate={{
              rotate: [0, 180, 360],
              scale: [1, 1.02, 1],
              opacity: [0.03, 0.05, 0.03]
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-purple-100/30 to-pink-100/20 rounded-full blur-2xl"
          />
          
          <motion.div
            animate={{
              rotate: [360, 180, 0],
              x: [0, 20, 0],
              opacity: [0.02, 0.04, 0.02]
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 20
            }}
            className="absolute bottom-10 right-1/4 w-24 h-24 bg-gradient-to-br from-indigo-100/25 to-blue-100/20 rounded-full blur-xl"
          />
        </div>

        {/* Pattern Overlay */}
        <motion.div 
          animate={{
            opacity: [0.01, 0.02, 0.01]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
          style={{ 
            backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.05"%3E%3Ccircle cx="20" cy="20" r="1"/%3E%3Ccircle cx="80" cy="20" r="0.5"/%3E%3Ccircle cx="50" cy="50" r="1"/%3E%3Ccircle cx="20" cy="80" r="0.5"/%3E%3Ccircle cx="80" cy="80" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-12">
        {/* Header with Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-6xl mx-auto mb-12 px-6"
        >
          <div className="flex items-center justify-center">
            {/* Logo - Centered */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-red-500 via-red-600 to-orange-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-red-500 via-red-600 to-orange-500 bg-clip-text text-transparent">
                  AdsHide
                </h1>
                <p className="text-red-600 font-medium">Advanced Ad Blocker</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Uninstall Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto px-6 text-center"
        >
          {/* Main Uninstall Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/60 shadow-xl mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              😢
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Sorry to See You Go
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              We are sorry to see you go, but if you change your mind and decide to speed up your browsing you can always come back and install it again.
            </p>

            {/* Chrome Store Link */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 mb-8"
            >
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Reinstall Anytime
              </h3>
              
              <p className="text-lg text-blue-700 mb-6">
                Click the link below to reinstall AI Ad Blocker from the Chrome Web Store:
              </p>

              <motion.a
                href={chromeStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg"
              >
                Reinstall AI Ad Blocker
                <ExternalLink className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-xl rounded-3xl p-8 border border-green-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Thank You for Trying AdsHide
            </h3>
            
            <p className="text-gray-700 leading-relaxed">
              We appreciate the time you spent with our ad blocker. Your feedback helps us improve and create better browsing experiences for everyone.
            </p>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 py-16 relative w-full">
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

              {/* Support Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you experienced any issues, we're always working to improve. Feel free to reinstall anytime.
                </p>
              </div>

              {/* Feedback Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Feedback</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your experience matters to us. Thank you for giving AdsHide a try.
                </p>
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
      </div>
    </div>
  );
};

export default UninstallPage;