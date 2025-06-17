/**
 * Application Constants
 * Contains all static data used throughout the application
 */

import { 
  Gauge, 
  ChartLine, 
  Search, 
  LayoutGrid 
} from "lucide-react";

// Chrome Web Store URL for the extension
export const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/webos-toolkit-edit-block/opheegnbkjibpfbceamgbfmodbledagi?tid=45dab7cd-d139-4bf6-871d-1dad13de4baf&click_id=%7Bexternal_id%7D&campaign=6812754b6ab34700125b9829";

// Feature data for the features section
export const FEATURES = [
  {
    icon: Gauge,
    title: "Boost Performance",
    description: "Identify and shut down tab hogs, reduce load times, and clean up your memory.",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85",
    performanceLabel: "+47%"
  },
  {
    icon: ChartLine,
    title: "Smart Tools for Smart Users",
    description: "Access advanced inspection tools, page profiling, network analysis, and DOM snapshots — all in one place.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxjb2RpbmclMjBkYXNoYm9hcmR8ZW58MHx8fGJsdWV8MTc0ODk2NDExNnww&ixlib=rb-4.1.0&q=85",
    performanceLabel: "Real-time"
  },
  {
    icon: Search,
    title: "Instant Page Insights",
    description: "Get detailed breakdowns of page structure, script loads, and performance bottlenecks.",
    image: "https://images.pexels.com/photos/5475750/pexels-photo-5475750.jpeg",
    performanceLabel: "Active"
  },
  {
    icon: LayoutGrid,
    title: "Tab Manager & Resource Monitor",
    description: "Stay organized, stay fast. See what's slowing you down and fix it in real time.",
    image: "https://images.unsplash.com/photo-1529071242804-840f9a164b8b",
    performanceLabel: "Optimized"
  }
];

// FAQ data for the FAQ section
export const FAQS = [
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

// Animation configurations
export const ANIMATIONS = {
  // Preloader animation settings
  PRELOADER: {
    rotation: {
      duration: 12, // seconds
      repeat: Infinity,
      ease: "linear"
    },
    scaling: {
      duration: 8, // seconds
      repeat: Infinity,
      ease: "easeInOut",
      scale: [0.7, 1.2, 0.7]
    },
    opacity: {
      duration: 0.5,
      delay: 1,
      finalOpacity: 0.3
    }
  },
  // Banner animation settings
  BANNER: {
    slideIn: {
      duration: 0.6,
      ease: "easeOut"
    },
    contentDelay: {
      left: 0.2,
      right: 0.3
    },
    glow: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  },
  // General page animations
  PAGE: {
    fadeIn: {
      duration: 0.8,
      ease: "easeOut"
    },
    stagger: {
      duration: 0.1 // delay between items
    }
  }
};

// Color schemes and gradients
export const COLORS = {
  gradients: {
    primary: 'linear-gradient(135deg, #131A22 0%, #232F3E 100%)',
    hero: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(59,130,246,0.05))',
    preloader: 'conic-gradient(from 0deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #ffeaa7, #fab1a0, #ff6b6b)'
  }
};

// Background images
export const IMAGES = {
  hero: 'https://images.unsplash.com/photo-1658998765622-962cb51e7888',
  pattern: 'https://images.unsplash.com/photo-1496167117681-944f702be1f4',
  chromeStore: 'https://developer.chrome.com/static/docs/webstore/branding/image/HRs9MPufa1J1h5glNhut.png'
};