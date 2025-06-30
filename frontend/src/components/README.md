# GiftBanner Component

A reusable React component for displaying gift/promotional banners with animations.

## Usage

```jsx
import GiftBanner from './components/GiftBanner';

// Basic usage
<GiftBanner />

// Customized usage
<GiftBanner 
  title="Your Special Offer is Ready!"
  description="Click here to claim your reward."
  timerText="Limited time offer"
  className="my-4"
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | string | "Your Amazon Gift is almost ready..." | Main heading text |
| `description` | string | "Click the gift icon in the top right corner to claim it." | Description text |
| `timerText` | string | "Timer running — don't miss out" | Timer message text |
| `className` | string | "" | Additional CSS classes |

## Features

- Animated gift icon that rotates
- Pulsing timer text
- Smooth entrance animation
- Fully customizable text content
- Responsive design
- Built with Framer Motion for smooth animations

## Dependencies

- React
- Framer Motion
- Lucide React (for icons)

## Styling

The component uses Tailwind CSS classes and is fully responsive. The color scheme uses amber/orange gradients that can be customized by modifying the component's classes.