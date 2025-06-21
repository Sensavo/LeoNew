import React from "react";
import { motion } from "framer-motion";
import { Shield, Gift, CheckCircle, Clock, AlertTriangle } from "lucide-react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      {/* Dynamic Gradient Background - Seamless */}
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
        {/* Large Circle */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/20 rounded-full blur-3xl"
        />
        
        {/* Medium Circle */}
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 100, 0],
            scale: [1, 0.8, 1],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute top-1/2 right-1/3 w-48 h-48 bg-gradient-to-br from-red-200/20 to-orange-200/15 rounded-full blur-2xl"
        />
        
        {/* Small Circle */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
          className="absolute bottom-1/4 left-1/2 w-32 h-32 bg-gradient-to-br from-emerald-200/25 to-teal-200/20 rounded-full blur-xl"
        />
      </div>

      {/* Enhanced Pattern Overlay */}
      <motion.div 
        animate={{
          opacity: [0.02, 0.05, 0.02]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0"
        style={{ 
          backgroundImage: `url('data:image/svg+xml,%3Csvg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23059669" fill-opacity="0.1"%3E%3Ccircle cx="20" cy="20" r="2"/%3E%3Ccircle cx="80" cy="20" r="1"/%3E%3Ccircle cx="50" cy="50" r="1.5"/%3E%3Ccircle cx="20" cy="80" r="1"/%3E%3Ccircle cx="80" cy="80" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')`,
          backgroundSize: '50px 50px'
        }}
      />

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

        {/* Main Thank You Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-4xl mx-auto px-6 text-center"
        >
          {/* Main Thank You Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 border border-gray-200/60 shadow-xl mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-6xl mb-6"
            >
              🎉
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Thank You for Installing<br />
              AI Ad Blocker!
            </h2>
            
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              You're now protected with faster, cleaner, ad-free browsing.
            </p>

            {/* Gift Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8 mb-8"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block mb-4"
              >
                <Gift className="w-16 h-16 text-amber-600" />
              </motion.div>
              
              <h3 className="text-2xl font-bold text-amber-800 mb-4">
                Your Amazon Gift is almost ready...
              </h3>
              
              <p className="text-lg text-amber-700 mb-6">
                Click the gift icon in the top right corner to claim it.
              </p>

              {/* Timer Note */}
              <motion.div
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex items-center justify-center gap-2 text-orange-600 font-semibold"
              >
                <Clock className="w-5 h-5" />
                Timer running — don't miss out
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Bonus Access Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 backdrop-blur-xl rounded-3xl p-8 border border-green-200 shadow-xl mb-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center justify-center gap-3">
              🔓 Bonus Access:
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 rounded-xl p-6 border border-green-200 shadow-md"
              >
                <Gift className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">More giveaways</h4>
                <p className="text-gray-600 text-sm">Access to exclusive prize draws and special offers</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 rounded-xl p-6 border border-green-200 shadow-md"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Exclusive discounts</h4>
                <p className="text-gray-600 text-sm">Special pricing on premium features and services</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 rounded-xl p-6 border border-green-200 shadow-md"
              >
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-900 mb-2">Cash rewards for browsing</h4>
                <p className="text-gray-600 text-sm">Earn rewards while enjoying ad-free browsing</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Eligibility Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="bg-red-50 border border-red-200 rounded-xl p-6 flex items-start gap-4"
          >
            <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
            <div className="text-left">
              <p className="text-red-800 font-semibold mb-2">
                ⛔ One gift per user. Suspicious activity will void eligibility.
              </p>
              <p className="text-red-700 text-sm">
                Please ensure you follow all terms and conditions to maintain your eligibility for rewards and giveaways.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <footer className="mt-20 py-16 bg-gradient-to-t from-gray-100 to-gray-50 relative border-t border-gray-200 w-full">
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

              {/* Thank You Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Thank You</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Your support helps us continue developing the most advanced ad blocking technology available.
                </p>
              </div>

              {/* Support Section */}
              <div>
                <h3 className="text-gray-900 font-semibold mb-4">Support</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If you have any questions about your installation or rewards, please check back here for updates.
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

export default ThankYou;