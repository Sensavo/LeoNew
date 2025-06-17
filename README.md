# 🚀 WebOS Toolkit - Landing Page

A modern, responsive landing page for the WebOS Toolkit Chrome extension. Built with React, FastAPI, and designed with developer experience in mind.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Environment Setup](#environment-setup)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Deployment](#deployment)
- [Contributing](#contributing)

## 🌟 Overview

WebOS Toolkit is a professional Chrome browser extension designed for developers. This landing page showcases the extension's features and provides a seamless installation experience with:

- 🎨 Modern glass-morphism design
- ⚡ Smooth animations and interactions
- 📱 Fully responsive layout
- 🔒 Privacy-first approach
- 🎁 Promotional campaigns support

## ✨ Features

### Frontend Features
- **Modern React Architecture**: Clean component structure with hooks and context
- **Framer Motion Animations**: Smooth, professional animations throughout
- **Tailwind CSS Styling**: Utility-first CSS with custom gradients and effects
- **Glass Morphism Design**: Modern frosted glass effects and backdrops
- **Interactive Elements**: Animated preloader, expandable FAQ, modal dialogs
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Privacy Controls**: GDPR-compliant privacy checkbox and policy modal

### Backend Features
- **FastAPI Framework**: High-performance, modern Python web framework
- **MongoDB Integration**: Document database for flexible data storage
- **RESTful API**: Clean API endpoints with automatic documentation
- **CORS Support**: Cross-origin resource sharing configuration
- **Environment Configuration**: Secure environment variable management

### UI Components
- **Promotional Banner**: Dismissible Amazon gift card campaign banner
- **Hero Section**: Eye-catching main section with animated visualization
- **Features Grid**: Responsive showcase of key extension features
- **FAQ Section**: Expandable frequently asked questions
- **Privacy Modal**: Comprehensive privacy policy display
- **Animated Preloader**: Custom circular gradient preloader with scaling effects

## 🛠 Technology Stack

### Frontend
- **React 19.0.0** - Modern React with latest features
- **Framer Motion 12.16.0** - Animation library for smooth interactions
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Lucide React 0.511.0** - Beautiful, customizable icons
- **React Router DOM 7.5.1** - Client-side routing
- **Axios 1.8.4** - HTTP client for API calls

### Backend
- **FastAPI 0.110.1** - Modern, fast web framework for Python
- **Motor 3.3.1** - Async MongoDB driver
- **Pydantic 2.11.5** - Data validation using Python type annotations
- **Uvicorn 0.25.0** - ASGI server implementation

### Development Tools
- **ESLint** - Code linting and quality checks
- **Autoprefixer** - CSS vendor prefixing
- **PostCSS** - CSS transformation and optimization

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v16 or higher)
- **Python** (v3.11 or higher)
- **MongoDB** (local or cloud instance)
- **Yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd webos-toolkit-landing
   ```

2. **Install frontend dependencies**
   ```bash
   cd frontend
   yarn install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

4. **Set up environment variables**
   ```bash
   # Frontend (.env)
   cp frontend/.env.example frontend/.env
   
   # Backend (.env)
   cp backend/.env.example backend/.env
   ```

5. **Start the development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   uvicorn server:app --host 0.0.0.0 --port 8001 --reload
   
   # Terminal 2 - Frontend
   cd frontend
   yarn start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8001
   - API Documentation: http://localhost:8001/docs

## 📁 Project Structure

```
webos-toolkit-landing/
├── frontend/                   # React frontend application
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── components/         # React components
│   │   │   ├── sections/       # Page sections (Hero, Features, etc.)
│   │   │   └── ui/             # Reusable UI components
│   │   ├── constants/          # Application constants and data
│   │   ├── hooks/              # Custom React hooks
│   │   ├── App.js              # Main application component
│   │   └── index.js            # Application entry point
│   ├── package.json            # Dependencies and scripts
│   ├── tailwind.config.js      # Tailwind CSS configuration
│   └── .env                    # Environment variables
├── backend/                    # FastAPI backend application
│   ├── server.py               # Main FastAPI application
│   ├── requirements.txt        # Python dependencies
│   └── .env                    # Environment variables
├── README.md                   # Project documentation
└── .gitignore                  # Git ignore rules
```

### Component Architecture

```
src/components/
├── sections/                   # Main page sections
│   ├── Banner.js              # Promotional banner component
│   ├── Hero.js                # Hero section with CTA
│   ├── HeroVisualization.js   # Animated dashboard mockup
│   ├── Features.js            # Features showcase grid
│   ├── FAQ.js                 # Expandable FAQ section
│   └── Footer.js              # Footer with links and info
└── ui/                        # Reusable UI components
    ├── Preloader.js           # Animated circular preloader
    └── PrivacyModal.js        # Privacy policy modal dialog
```

## 🔧 Environment Setup

### Frontend Environment Variables (.env)

```env
# Development server configuration
WDS_SOCKET_PORT=443

# Backend API URL
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend Environment Variables (.env)

```env
# Database configuration
MONGO_URL=mongodb://localhost:27017
DB_NAME=webos_toolkit

# Application settings
DEBUG=true
```

## 💻 Development

### Frontend Development

```bash
# Start development server
yarn start

# Build for production
yarn build

# Run tests
yarn test

# Lint code
yarn lint
```

### Backend Development

```bash
# Start development server with auto-reload
uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Format code with Black
black .

# Sort imports with isort
isort .

# Type checking with mypy
mypy .

# Run tests
pytest
```

### Key Development Features

- **Hot Reload**: Both frontend and backend support hot reloading
- **Environment Variables**: Secure configuration management
- **Code Quality**: ESLint, Black, and isort for consistent formatting
- **Type Safety**: TypeScript-style JSDoc comments and Pydantic models

## 🔌 API Documentation

### Endpoints

#### Health Check
```http
GET /api/
```
Returns basic API status information.

#### Status Checks
```http
POST /api/status
Content-Type: application/json

{
  "client_name": "string"
}
```

```http
GET /api/status
```
Returns list of all status checks.

### API Models

```python
class StatusCheck(BaseModel):
    id: str
    client_name: str
    timestamp: datetime

class StatusCheckCreate(BaseModel):
    client_name: str
```

## 🚀 Deployment

### Production Build

1. **Build frontend**
   ```bash
   cd frontend
   yarn build
   ```

2. **Prepare backend**
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

3. **Environment Configuration**
   - Set production environment variables
   - Configure MongoDB connection
   - Update CORS settings for production domain

### Docker Deployment (Optional)

```dockerfile
# Dockerfile example for frontend
FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build
EXPOSE 3000
CMD ["yarn", "start"]
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

### Code Style
- **Frontend**: Use ESLint configuration, Prettier for formatting
- **Backend**: Follow PEP 8, use Black for formatting
- **Components**: Create reusable, well-documented components
- **Naming**: Use descriptive names for files, functions, and variables

### Commit Messages
```
feat: add new feature
fix: resolve bug
docs: update documentation
style: formatting changes
refactor: code restructuring
test: add or update tests
```

### Pull Request Process
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support and questions:
- Create an issue in this repository
- Check the [FAQ section](frontend/src/constants/index.js) for common questions
- Review the API documentation at `/docs` endpoint

## 🙏 Acknowledgments

- **Design**: Modern glass morphism and gradient designs
- **Icons**: Lucide React icon library
- **Animations**: Framer Motion for smooth interactions
- **Development**: Built with modern React and FastAPI best practices

---

**Made with ❤️ for the WebOS Toolkit community**
