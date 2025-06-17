/**
 * Privacy Policy Modal Component
 * Modal dialog displaying the privacy policy content
 * Features smooth animations and scrollable content
 */

import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const PrivacyModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-gray-800 rounded-3xl p-8 max-w-4xl max-h-[80vh] overflow-y-auto border border-gray-700"
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">Privacy Policy</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
            aria-label="Close privacy policy modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Privacy Policy Content */}
        <div className="prose prose-invert max-w-none">
          <PrivacyContent />
        </div>

        {/* Modal Footer */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-semibold transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </motion.div>
    </div>
  );
};

/**
 * Privacy Policy Content Component
 * Structured content for the privacy policy
 */
const PrivacyContent = () => (
  <>
    <h3 className="text-xl font-semibold text-blue-400 mb-4">
      Collecting and Using Your Personal Data
    </h3>
    
    <PolicySection
      title="Security of Your Personal Data"
      content="The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security."
    />

    <PolicySection
      title="Personal Data"
      content="While using Our Service, We may ask You for personally identifying information that can be used to contact or identify You. Usage Data is one type of personally identifiable information that may be collected."
    />

    <PolicySection
      title="Usage Data"
      content={[
        "Usage Data has collected automatically when using the Service.",
        "Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.",
        "When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.",
        "We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device."
      ]}
    />

    <PolicySection
      title="Information Collected while Using the Application"
      content={[
        "While using Our Application, in order to provide features of Our Application, We may collect, with Your prior permission: Information regarding your location.",
        "We use this information to provide features of Our Service, to improve and customize Our Service. The information may be uploaded to the Company's servers and/or a Service Provider's server or it may be simply stored on Your device.",
        "You can enable or disable access to this information at any time, through Your Device settings."
      ]}
    />
  </>
);

/**
 * Individual Policy Section Component
 * Reusable component for policy sections
 */
const PolicySection = ({ title, content }) => (
  <div className="mb-6">
    <h4 className="text-lg font-semibold text-white mb-3">{title}</h4>
    {Array.isArray(content) ? (
      content.map((paragraph, index) => (
        <p key={index} className="text-gray-300 mb-4 leading-relaxed">
          {paragraph}
        </p>
      ))
    ) : (
      <p className="text-gray-300 mb-6 leading-relaxed">{content}</p>
    )}
  </div>
);

export default PrivacyModal;