/**
 * Custom Hook: useAppState
 * Manages all application state including privacy settings, modal visibility, and FAQ expansion
 * Provides a centralized state management solution for the application
 */

import { useState } from 'react';

const useAppState = () => {
  // Privacy and modal states
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isPrivacyAccepted, setIsPrivacyAccepted] = useState(false);
  
  // FAQ state
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Banner state
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  /**
   * Toggle privacy modal visibility
   */
  const togglePrivacyModal = () => {
    setIsPrivacyModalOpen(!isPrivacyModalOpen);
  };

  /**
   * Close privacy modal
   */
  const closePrivacyModal = () => {
    setIsPrivacyModalOpen(false);
  };

  /**
   * Toggle FAQ item expansion
   * @param {number|string} faqId - ID of the FAQ item to toggle
   */
  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  /**
   * Dismiss the promotional banner
   */
  const dismissBanner = () => {
    setIsBannerVisible(false);
  };

  /**
   * Handle privacy checkbox change
   * @param {boolean} accepted - Whether privacy policy is accepted
   */
  const handlePrivacyAcceptance = (accepted) => {
    setIsPrivacyAccepted(accepted);
  };

  return {
    // State values
    isPrivacyModalOpen,
    isPrivacyAccepted,
    expandedFaq,
    isBannerVisible,
    
    // State setters (for direct manipulation when needed)
    setIsPrivacyModalOpen,
    setIsPrivacyAccepted,
    setExpandedFaq,
    setIsBannerVisible,
    
    // Action handlers
    togglePrivacyModal,
    closePrivacyModal,
    toggleFaq,
    dismissBanner,
    handlePrivacyAcceptance
  };
};

export default useAppState;