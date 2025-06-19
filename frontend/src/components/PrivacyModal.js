import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const PrivacyModal = ({ isPrivacyModalOpen, setIsPrivacyModalOpen }) => {
  if (!isPrivacyModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-3xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto border border-gray-200 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Privacy Policy</h2>
          <button
            onClick={() => setIsPrivacyModalOpen(false)}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors duration-200"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        <div className="prose prose-gray max-w-none">
          <h3 className="text-xl font-semibold text-red-600 mb-4">Privacy-First Ad Blocking</h3>
          
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Data Collection and Privacy</h4>
          <p className="text-gray-700 mb-6 leading-relaxed">
            This extension is built with privacy as a core principle. We do not collect or store your personal data. All ad blocking is handled locally within your browser using advanced algorithms. We do not monitor, track, or log any part of your browsing history.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">Local Processing</h4>
          <p className="text-gray-700 mb-6 leading-relaxed">
            We do not sell, share, or trade your data—because we never collect it to begin with. The only communication the extension may perform is to check for updates or bug fixes via the Chrome Web Store. We do not use remote scripts, cloud scanning, or external logging APIs.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">Stealth Technology</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Our advanced stealth technology operates entirely locally in your browser, ensuring that websites cannot detect the presence of our ad blocker. This technology does not transmit any data about your browsing habits or the sites you visit.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            This tool was created to give users control over their web experience—without compromises to privacy or security. All ad detection and blocking happens on your device using machine learning models that run locally.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            If you have questions about how we handle data or security, feel free to reach out through the Chrome Web Store support contact. We are committed to maintaining the highest standards of privacy protection.
          </p>

          <h4 className="text-lg font-semibold text-gray-900 mb-3">Security and Updates</h4>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The security of your browsing experience is important to us. While we strive to use the most advanced security measures to protect your browser experience, remember that no method of internet browsing is 100% secure from all threats.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our extension updates automatically through the Chrome Web Store to ensure you always have the latest ad blocking capabilities and security improvements, without any data collection on our part.
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <button
            onClick={() => setIsPrivacyModalOpen(false)}
            className="px-6 py-3 bg-red-600 hover:bg-red-500 text-white rounded-xl font-semibold transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PrivacyModal;