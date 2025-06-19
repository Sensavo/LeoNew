import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import modular components
import Banner from "./components/Banner";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import PrivacyModal from "./components/PrivacyModal";
import Stats from "./components/Stats";

const Home = () => {
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  const chromeStoreUrl = "https://chrome.google.com/webstore/detail/ceiidfadobgbkfaclpjopldnbpihhcdg";

  const handleAcceptAndContinue = () => {
    if (isPrivacyAccepted) {
      window.open(chromeStoreUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-900 overflow-hidden">
      <Banner 
        isBannerVisible={isBannerVisible}
        setIsBannerVisible={setIsBannerVisible}
        isPrivacyAccepted={isPrivacyAccepted}
        setExpandedFaq={setExpandedFaq}
        chromeStoreUrl={chromeStoreUrl}
      />

      <Hero 
        isPrivacyAccepted={isPrivacyAccepted}
        setIsPrivacyAccepted={setIsPrivacyAccepted}
        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
        handleAcceptAndContinue={handleAcceptAndContinue}
      />

      <Features />

      <Testimonials />

      <FAQ 
        expandedFaq={expandedFaq}
        setExpandedFaq={setExpandedFaq}
      />

      <Footer 
        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
        isPrivacyAccepted={isPrivacyAccepted}
        setExpandedFaq={setExpandedFaq}
        chromeStoreUrl={chromeStoreUrl}
      />

      <PrivacyModal 
        isPrivacyModalOpen={isPrivacyModalOpen}
        setIsPrivacyModalOpen={setIsPrivacyModalOpen}
      />
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