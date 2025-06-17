# Frontend - WebOS Toolkit Landing Page

React-based frontend application for the WebOS Toolkit Chrome extension landing page.

## 🏗 Architecture

This frontend follows a modern React architecture with:

- **Component-based Design**: Modular, reusable components
- **Custom Hooks**: Centralized state management
- **Constants Management**: Organized data and configuration
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📦 Components Overview

### Page Sections (`/components/sections/`)

#### `Banner.js`
Promotional banner component featuring:
- Amazon gift card campaign
- Dismissible functionality
- Privacy-aware CTA button
- Smooth slide-in animations

#### `Hero.js`
Main landing section with:
- Animated title with gradient effects
- Privacy checkbox and policy link
- Chrome Web Store installation button
- Responsive layout for desktop/mobile

#### `HeroVisualization.js`
Interactive dashboard mockup showing:
- Glass morphism card design
- Animated statistics (ads blocked, speed boost)
- Feature status indicators
- Floating action icons

#### `Features.js`
Feature showcase section:
- Grid layout (4 columns on desktop)
- Animated progress bars
- Hover effects and transitions
- Performance indicators

#### `FAQ.js`
Frequently asked questions:
- Expandable accordion interface
- Smooth expand/collapse animations
- Color-coded expanded states
- Keyboard accessibility

#### `Footer.js`
Website footer containing:
- Brand information and logo
- Quick navigation links
- Installation CTA button
- Copyright and attribution

### UI Components (`/components/ui/`)

#### `Preloader.js`
Circular gradient preloader:
- Conic gradient colors
- Rotation and scaling animations
- Configurable size and opacity
- Smooth entrance animation

#### `PrivacyModal.js`
Privacy policy modal dialog:
- Scrollable content area
- Smooth open/close animations
- Structured policy content
- Accessible close button

## 🎯 Custom Hooks

### `useAppState.js`
Centralized state management for:
- Privacy modal visibility
- Privacy acceptance status
- FAQ expansion state
- Banner visibility
- Action handlers for state changes

## 📊 Constants (`/constants/index.js`)

Organized application data:
- **FEATURES**: Feature grid data with icons and descriptions
- **FAQS**: Question and answer pairs
- **ANIMATIONS**: Animation timing and configuration
- **COLORS**: Gradient definitions and color schemes
- **IMAGES**: Background and asset URLs
- **CHROME_STORE_URL**: Extension installation link

## 🎨 Styling Approach

### Tailwind CSS Configuration
- Custom color palette
- Extended spacing and sizing
- Custom animation classes
- Responsive breakpoints

### Animation Strategy
- **Framer Motion**: Complex animations and interactions
- **CSS Animations**: Simple rotations and transforms
- **Staggered Animations**: Sequential element appearances
- **Hover States**: Interactive feedback

### Responsive Design
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

## 🔧 Development Workflow

### Component Development
1. Create component in appropriate directory
2. Add JSDoc documentation
3. Implement responsive design
4. Add accessibility attributes
5. Test across devices

### State Management
- Use custom hooks for complex state
- Pass props for simple parent-child communication
- Centralize global state in useAppState
- Minimize prop drilling

### Performance Considerations
- Lazy load images where appropriate
- Optimize animation performance
- Use React.memo for expensive components
- Minimize re-renders with proper dependencies

## 🚀 Build Process

### Development
```bash
yarn start          # Start development server
yarn lint           # Check code quality
yarn format         # Format code with Prettier
```

### Production
```bash
yarn build          # Create production build
yarn serve          # Serve production build locally
```

### Bundle Analysis
```bash
yarn analyze        # Analyze bundle size (if configured)
```

## 🎯 Performance Metrics

Target performance goals:
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

## 🔍 Testing Strategy

### Component Testing
- Unit tests for individual components
- Integration tests for section components
- Accessibility testing
- Visual regression testing

### E2E Testing
- User journey testing
- Form submission flows
- Modal interactions
- Responsive behavior

## 📱 Browser Support

### Supported Browsers
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)

### Progressive Enhancement
- Core functionality without JavaScript
- Enhanced experience with modern features
- Graceful degradation for older browsers

## 🔒 Security Considerations

### Content Security Policy
- Strict CSP headers
- Whitelist external resources
- Prevent XSS attacks

### Data Handling
- No sensitive data in localStorage
- Secure API communication
- Privacy-compliant analytics

## 📈 Analytics Integration

### Event Tracking
- Page views and user interactions
- CTA button clicks
- Form submissions
- Error tracking

### Privacy Compliance
- GDPR-compliant implementation
- User consent management
- Anonymized data collection