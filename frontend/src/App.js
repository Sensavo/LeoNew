/**
 * Main Application Component
 * Entry point for the WebOS Toolkit landing page
 * Orchestrates all sections and manages global state
 */

import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Banner from "./components/sections/Banner";
import Hero from "./components/sections/Hero";
import Features from "./components/sections/Features";
import FAQ from "./components/sections/FAQ";
import Footer from "./components/sections/Footer";
import PrivacyModal from "./components/ui/PrivacyModal";

// Hooks
import useAppState from "./hooks/useAppState";

/**
 * Home Page Component
 * Contains all sections of the landing page
 */
const Home = () => {
  // Global application state
  const {
    isPrivacyModalOpen,
    isPrivacyAccepted,
    expandedFaq,
    isBannerVisible,
    setIsPrivacyModalOpen,
    setIsPrivacyAccepted,
    setExpandedFaq,
    dismissBanner,
    closePrivacyModal
  } = useAppState();

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Promotional Banner */}
      <Banner
        isVisible={isBannerVisible}
        onDismiss={dismissBanner}
        isPrivacyAccepted={isPrivacyAccepted}
        setExpandedFaq={setExpandedFaq}
      />

      {/* Hero Section */}
      <Hero
        isPrivacyAccepted={isPrivacyAccepted}
        setIsPrivacyAccepted={setIsPrivacyAccepted}
        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
      />

      {/* Features Section */}
      <Features />

      {/* FAQ Section */}
      <FAQ 
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
      />

      {/* Footer Section */}
      <Footer
        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
        isPrivacyAccepted={isPrivacyAccepted}
        setExpandedFaq={setExpandedFaq}
      />

      {/* Privacy Policy Modal */}
      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={closePrivacyModal}
      />
    </div>
  );
};

/**
 * Main App Component
 * Handles routing configuration
 */
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;