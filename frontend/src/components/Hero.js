import React from "react";
import { motion } from "framer-motion";
import { Shield, ExternalLink } from "lucide-react";
import HeroVisualization from "./HeroVisualization";

const Hero = ({ 
  isPrivacyAccepted, 
  setIsPrivacyAccepted, 
  setIsPrivacyModalOpen, 
  expandedFaq, 
  setExpandedFaq, 
  handleAcceptAndContinue 
}) => {
  return (
    <section className="relative min-h-screen lg:min-h-[80vh] xl:min-h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Dynamic Gradient Background */}
      <motion.div 
        animate={{
          background: [
            'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #e0f2fe 50%, #f1f5f9 75%, #ffffff 100%)',
            'linear-gradient(135deg, #f1f5f9 0%, #e0f2fe 25%, #ffffff 50%, #f8fafc 75%, #e0f2fe 100%)',
            'linear-gradient(135deg, #e0f2fe 0%, #f8fafc 25%, #f1f5f9 50%, #ffffff 75%, #f8fafc 100%)',
            'linear-gradient(135deg, #f8fafc 0%, #ffffff 25%, #e0f2fe 50%, #f1f5f9 75%, #ffffff 100%)'
          ]
        }}
        transition={{
          duration: 15,
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
        
        {/* Additional Floating Elements */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.05, 1],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-10 right-10 w-20 h-20 bg-gradient-to-br from-yellow-200/30 to-amber-200/20 rounded-lg blur-xl"
        />
        
        <motion.div
          animate={{
            rotate: [360, 0],
            x: [0, 40, 0],
            opacity: [0.04, 0.08, 0.04]
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-10 right-1/4 w-16 h-16 bg-gradient-to-br from-pink-200/25 to-rose-200/20 rounded-full blur-lg"
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
      
      {/* Subtle Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `linear-gradient(90deg, #64748b 1px, transparent 1px), linear-gradient(#64748b 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-12 py-8">
        <div className="grid xl:grid-cols-2 gap-16 xl:gap-12 items-start min-h-screen">
          
          {/* Left Column - Double Padding */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-left xl:text-left lg:text-center space-y-6 xl:max-w-none lg:max-w-4xl lg:mx-auto"
          >
            {/* Logo with Gradient - AdsHide Branding - Light Theme */}
            <div className="flex items-center gap-4 xl:justify-start lg:justify-center pt-16">
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

            <div className="space-y-5">
              <motion.h2 
                className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.span
                  className="block text-gray-900"
                  animate={{
                    opacity: [0.9, 1, 0.9]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  The Ad Blocker
                </motion.span>
                <motion.span 
                  className="block bg-gradient-to-r from-red-600 via-red-700 to-orange-600 bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  style={{
                    backgroundSize: '300% 100%'
                  }}
                >
                  They Can't Detect
                </motion.span>
              </motion.h2>
              
              <motion.p 
                className="text-xl text-gray-800 leading-relaxed max-w-2xl xl:max-w-2xl lg:mx-auto font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Blocks ads. Bypasses paywalls. Stays invisible. Advanced technology that works on sites where others fail.
              </motion.p>
            </div>

            {/* Privacy Checkbox & Chrome Store Button */}
            <div className="space-y-4">
              {/* Privacy Checkbox - Simple & Clean */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="xl:flex xl:justify-start lg:flex lg:justify-center"
              >
                <div 
                  className={`flex items-center gap-3 text-sm p-4 rounded-xl transition-all duration-500 border-2 ${
                    !isPrivacyAccepted && expandedFaq === 'highlight-checkbox' 
                      ? 'bg-red-50 border-red-300 shadow-lg shadow-red-500/25 animate-pulse' 
                      : 'bg-white/80 border-gray-300 shadow-sm'
                  }`}
                >
                  <input
                    type="checkbox"
                    id="privacy-agreement"
                    checked={isPrivacyAccepted}
                    onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                    className="w-5 h-5 text-red-600 bg-white border-gray-400 rounded focus:ring-red-500 focus:ring-2"
                  />
                  <label htmlFor="privacy-agreement" className="text-gray-800 text-sm font-medium">
                    I agree to the{' '}
                    <button
                      onClick={() => setIsPrivacyModalOpen(true)}
                      className="text-red-600 hover:text-red-700 underline font-semibold"
                    >
                      Privacy Policy
                    </button>
                  </label>
                </div>
              </motion.div>

              {/* Redesigned Chrome Store Button */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="xl:flex xl:justify-start lg:flex lg:justify-center"
              >
                <motion.button
                  onClick={() => {
                    if (!isPrivacyAccepted) {
                      setExpandedFaq('highlight-checkbox');
                      setTimeout(() => setExpandedFaq(null), 3000);
                    } else {
                      handleAcceptAndContinue();
                    }
                  }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                    y: -2
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="group relative overflow-hidden bg-white hover:bg-gray-50 rounded-2xl px-8 py-5 shadow-xl border-2 border-gray-200 hover:border-gray-300 cursor-pointer"
                >
                  <motion.div 
                    className="flex items-center gap-4"
                    whileHover={{
                      x: 2
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.img 
                      src="https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png"
                      alt="Chrome Web Store"
                      className="h-12 w-auto"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    />
                    <div className="text-left">
                      <div className="text-xs font-medium text-gray-600 uppercase tracking-wider group-hover:text-gray-700 transition-colors duration-200">Get Extension</div>
                      <div className="text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-200">Chrome Web Store</div>
                    </div>
                    <motion.div 
                      className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors duration-300"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Animated background effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  ></motion.div>

                  {/* Shine effect on hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  ></motion.div>
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Clean Contemporary Hero Illustration */}
          <HeroVisualization />
        </div>
      </div>
    </section>
  );
};

export default Hero;