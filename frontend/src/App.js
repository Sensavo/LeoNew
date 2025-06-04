import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Gauge, 
  ChartLine, 
  Search, 
  LayoutGrid, 
  X,
  ExternalLink,
  Shield,
  Download,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Home = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);

  const chromeStoreUrl = "https://chromewebstore.google.com/detail/webos-toolkit-edit-block/opheegnbkjibpfbceamgbfmodbledagi?tid=45dab7cd-d139-4bf6-871d-1dad13de4baf&click_id=%7Bexternal_id%7D&campaign=6812754b6ab34700125b9829";

  const handleAcceptAndContinue = () => {
    if (isPrivacyAccepted) {
      window.open(chromeStoreUrl, '_blank');
    }
  };

  const features = [
    {
      icon: Gauge,
      title: "Boost Performance",
      description: "Identify and shut down tab hogs, reduce load times, and clean up your memory.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: ChartLine,
      title: "Smart Tools for Smart Users",
      description: "Access advanced inspection tools, page profiling, network analysis, and DOM snapshots — all in one place.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Search,
      title: "Instant Page Insights",
      description: "Get detailed breakdowns of page structure, script loads, and performance bottlenecks.",
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
    },
    {
      icon: LayoutGrid,
      title: "Tab Manager & Resource Monitor",
      description: "Stay organized, stay fast. See what's slowing you down and fix it in real time.",
      image: "https://images.unsplash.com/photo-1529071242804-840f9a164b8b"
    }
  ];

  const faqs = [
    {
      question: "Is WebOS Toolkit free to use?",
      answer: "Yes, WebOS Toolkit is completely free to install and use from the Chrome Web Store."
    },
    {
      question: "Does it work with other browsers?",
      answer: "Currently, WebOS Toolkit is optimized for Chrome-based browsers. Support for other browsers may be added in future updates."
    },
    {
      question: "Will it slow down my browser?",
      answer: "No, WebOS Toolkit is designed to improve browser performance by identifying and managing resource-heavy tabs and processes."
    },
    {
      question: "How does it protect my privacy?",
      answer: "We collect minimal data only to provide the service functionality. All data processing follows our privacy policy guidelines."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Redesigned Hero Section - Focused Layout */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Modern Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1658998765622-962cb51e7888')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-gray-900/95" />
        
        {/* Geometric Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1496167117681-944f702be1f4')`,
            backgroundSize: '400px 400px',
            backgroundRepeat: 'repeat'
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
              {/* Logo with Gradient - Double Top Padding */}
              <div className="flex items-center gap-4 xl:justify-start lg:justify-center pt-16">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl xl:text-4xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-400 bg-clip-text text-transparent">
                    WebOS Toolkit
                  </h1>
                  <p className="text-blue-300 font-medium">Developer Extension</p>
                </div>
              </div>

              <div className="space-y-5">
                <h2 className="text-4xl md:text-5xl xl:text-6xl font-bold text-white leading-tight">
                  Supercharge Your
                  <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Browser Experience
                  </span>
                </h2>
                
                <p className="text-xl text-gray-200 leading-relaxed max-w-2xl xl:max-w-2xl lg:mx-auto">
                  Professional developer tools to speed up your browser, unlock advanced insights, and take full control of your browsing experience.
                </p>
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
                    className={`flex items-center gap-3 text-sm p-3 rounded-lg transition-all duration-500 ${
                      !isPrivacyAccepted && expandedFaq === 'highlight-checkbox' 
                        ? 'bg-red-500/20 border-2 border-red-400 shadow-lg shadow-red-500/25 animate-pulse' 
                        : 'bg-gray-800/40 border border-gray-600/30'
                    }`}
                  >
                    <input
                      type="checkbox"
                      id="privacy-agreement"
                      checked={isPrivacyAccepted}
                      onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                      className="w-5 h-5 text-blue-600 bg-transparent border-gray-400 rounded focus:ring-blue-500 focus:ring-2"
                    />
                    <label htmlFor="privacy-agreement" className="text-gray-200 text-sm">
                      I agree to the{' '}
                      <button
                        onClick={() => setIsPrivacyModalOpen(true)}
                        className="text-blue-400 hover:text-blue-300 underline font-medium"
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
                  <button
                    onClick={() => {
                      if (!isPrivacyAccepted) {
                        setExpandedFaq('highlight-checkbox');
                        setTimeout(() => setExpandedFaq(null), 3000);
                      } else {
                        handleAcceptAndContinue();
                      }
                    }}
                    className="group relative overflow-hidden bg-white hover:bg-gray-50 rounded-2xl px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-white/20 border border-gray-200/20"
                  >
                    <div className="flex items-center gap-4">
                      <img 
                        src="https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png"
                        alt="Chrome Web Store"
                        className="h-12 w-auto"
                      />
                      <div className="text-left">
                        <div className="text-xs font-medium text-gray-600 uppercase tracking-wider">Get Extension</div>
                        <div className="text-lg font-bold text-gray-900">Chrome Web Store</div>
                      </div>
                      <div className="bg-blue-600 text-white p-2 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Animated background effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Column - Alternative Illustration */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative hidden xl:block py-8"
            >
              <div className="relative max-w-sm mx-auto">
                {/* Browser Performance Monitor */}
                <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                  {/* Monitor Header */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl flex items-center justify-center">
                        <Gauge className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-lg">System Monitor</h3>
                        <p className="text-blue-300 text-sm">Browser Performance</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-sm font-medium">Online</span>
                    </div>
                  </div>
                  
                  {/* Large Performance Circle */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="relative w-32 h-32">
                      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#374151"
                          strokeWidth="2"
                        />
                        <motion.path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="url(#gradient)"
                          strokeWidth="2"
                          strokeDasharray="85, 100"
                          initial={{ strokeDasharray: "0, 100" }}
                          animate={{ strokeDasharray: "85, 100" }}
                          transition={{ duration: 2, delay: 1 }}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#10b981" />
                            <stop offset="100%" stopColor="#3b82f6" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-white">85%</div>
                          <div className="text-xs text-gray-300">Optimized</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 }}
                      className="text-center p-3 bg-blue-500/20 rounded-xl border border-blue-400/30"
                    >
                      <ChartLine className="w-5 h-5 text-blue-400 mx-auto mb-2" />
                      <div className="text-white font-bold">Real-time</div>
                      <div className="text-blue-300 text-xs">Analytics</div>
                    </motion.div>
                    
                    <motion.div 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.7 }}
                      className="text-center p-3 bg-purple-500/20 rounded-xl border border-purple-400/30"
                    >
                      <LayoutGrid className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                      <div className="text-white font-bold">12</div>
                      <div className="text-purple-300 text-xs">Active Tabs</div>
                    </motion.div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -top-4 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl"
                >
                  <Search className="w-3 h-3 inline mr-1" />
                  SCANNING
                </motion.div>

                <motion.div
                  animate={{ x: [-6, 6, -6] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
                  className="absolute -bottom-3 -left-5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-2 rounded-full text-xs font-bold shadow-xl"
                >
                  ⚡ BOOST
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Redesigned Features Section - Bottom-Aligned Progress Bars */}
      <section className="py-20 relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              <Download className="w-12 h-12 inline-block mr-4 text-blue-400" />
              Key Features
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Professional tools designed to optimize your browser performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  
                  {/* Content - Flexible grow */}
                  <div className="flex-grow mb-4">
                    <h3 className="text-lg font-bold text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                  
                  {/* Performance Bar - Aligned to bottom */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400 text-xs">Performance</span>
                      <span className="text-green-400 text-xs font-medium">
                        {index === 0 ? '+47%' : index === 1 ? 'Real-time' : index === 2 ? 'Active' : 'Optimized'}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-gray-700/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${75 + index * 5}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full ${
                          index === 0 ? 'bg-blue-400' :
                          index === 1 ? 'bg-purple-400' :
                          index === 2 ? 'bg-cyan-400' : 'bg-green-400'
                        }`}
                      ></motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern FAQ Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5"></div>
        <div className="max-w-5xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get answers to common questions about WebOS Toolkit
            </p>
          </motion.div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/40 backdrop-blur-xl rounded-2xl border border-gray-700/50 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-white pr-4">{faq.question}</span>
                  <div className="flex-shrink-0">
                    {expandedFaq === index ? (
                      <ChevronUp className="w-6 h-6 text-blue-400" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-blue-400" />
                    )}
                  </div>
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6 border-t border-gray-700/30"
                  >
                    <p className="text-gray-300 leading-relaxed pt-4">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="py-16 border-t border-gray-800/50 bg-gradient-to-b from-gray-800 to-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 to-purple-900/5"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-2xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                WebOS Toolkit
              </span>
            </div>
            <p className="text-gray-300 mb-8 text-lg max-w-2xl mx-auto">
              Created by developers, for developers. Upgrade your browser experience with professional-grade tools.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-8 border-t border-gray-700/50">
            <div className="flex items-center gap-8 text-gray-400">
              <button
                onClick={() => setIsPrivacyModalOpen(true)}
                className="hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                Privacy Policy
              </button>
              <span>•</span>
              <span>© 2025 WebOS Toolkit</span>
            </div>
            <div className="text-gray-500 text-sm">
              Created by <a href="https://www.happydesign.pro/" target="_blank" rel="noopener noreferrer" className="text-blue-400 font-medium hover:text-blue-300 transition-colors duration-200">Happy Agency</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {isPrivacyModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 rounded-3xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto border border-gray-700"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="prose prose-invert max-w-none">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">Collecting and Using Your Personal Data</h3>
              
              <h4 className="text-lg font-semibold text-white mb-3">Security of Your Personal Data</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Personal Data</h4>
              <p className="text-gray-300 mb-6 leading-relaxed">
                While using Our Service, We may ask You for personally identifying information that can be used to contact or identify You. Usage Data is one type of personally identifiable information that may be collected.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Usage Data</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Usage Data has collected automatically when using the Service.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.
              </p>

              <h4 className="text-lg font-semibold text-white mb-3">Information Collected while Using the Application</h4>
              <p className="text-gray-300 mb-4 leading-relaxed">
                While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission: Information regarding your location.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.
              </p>
              <p className="text-gray-300 leading-relaxed">
                You can enable or disable access to this information at any time, through Your Device settings.
              </p>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={() => setIsPrivacyModalOpen(false)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-colors duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;