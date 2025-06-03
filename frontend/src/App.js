import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Zap, 
  Brain, 
  Globe, 
  FolderOpen, 
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
      icon: Zap,
      title: "Boost Performance",
      description: "Identify and shut down tab hogs, reduce load times, and clean up your memory.",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Brain,
      title: "Smart Tools for Smart Users",
      description: "Access advanced inspection tools, page profiling, network analysis, and DOM snapshots — all in one place.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85"
    },
    {
      icon: Globe,
      title: "Instant Page Insights",
      description: "Get detailed breakdowns of page structure, script loads, and performance bottlenecks.",
      image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg"
    },
    {
      icon: FolderOpen,
      title: "Tab Manager & Resource Monitor",
      description: "Stay organized, stay fast. See what's slowing you down and fix it in real time.",
      image: "https://images.unsplash.com/photo-1477013743164-ffc3a5e556da?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzB8MHwxfHNlYXJjaHwzfHxjaHJvbWUlMjB3ZWIlMjBzdG9yZXxlbnwwfHx8Ymx1ZXwxNzQ4OTY0MTIxfDA&ixlib=rb-4.1.0&q=85"
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
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url('https://images.pexels.com/photos/16053029/pexels-photo-16053029.jpeg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-purple-900/60 to-gray-900/90" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
              WebOS Toolkit
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
              A Developer Tool to upgrade your browser created by developers
            </p>
            <p className="text-2xl md:text-3xl font-semibold mb-12 text-blue-300">
              🚀 Speed up your browser. Supercharge your browsing. Unlock full control.
            </p>
          </motion.div>

          {/* Chrome Store Banner */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-blue-600 px-8 py-4 rounded-2xl border border-green-400/30 shadow-2xl backdrop-blur-sm">
              <Download className="w-6 h-6" />
              <span className="text-lg font-semibold">Available in Chrome Store</span>
            </div>
          </motion.div>

          {/* Privacy Checkbox */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <input
                type="checkbox"
                id="privacy-agreement"
                checked={isPrivacyAccepted}
                onChange={(e) => setIsPrivacyAccepted(e.target.checked)}
                className="w-5 h-5 text-blue-600 bg-gray-800 border-gray-600 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="privacy-agreement" className="text-gray-300">
                By installing the extension you agree to our{' '}
                <button
                  onClick={() => setIsPrivacyModalOpen(true)}
                  className="text-blue-400 hover:text-blue-300 underline font-medium"
                >
                  Privacy Policy
                </button>
              </label>
            </div>
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <button
              onClick={handleAcceptAndContinue}
              disabled={!isPrivacyAccepted}
              className={`px-12 py-4 text-xl font-bold rounded-2xl transition-all duration-300 flex items-center gap-3 mx-auto ${
                isPrivacyAccepted
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 shadow-2xl hover:shadow-blue-500/25 transform hover:scale-105'
                  : 'bg-gray-700 cursor-not-allowed opacity-50'
              }`}
            >
              Accept and Continue
              <ExternalLink className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              🛠️ Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to optimize, analyze, and control your browsing experience
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  <div className="w-full h-48 rounded-2xl overflow-hidden">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-800/30">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700/50"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-700/30 transition-colors duration-200 rounded-2xl"
                >
                  <span className="text-lg font-semibold text-white">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-blue-400" />
                  )}
                </button>
                {expandedFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6"
                  >
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="w-8 h-8 text-blue-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              WebOS Toolkit
            </span>
          </div>
          <p className="text-gray-400 mb-4">
            Created by developers, for developers. Upgrade your browser experience today.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
            <button
              onClick={() => setIsPrivacyModalOpen(true)}
              className="hover:text-blue-400 transition-colors duration-200"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <span>© 2024 WebOS Toolkit</span>
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