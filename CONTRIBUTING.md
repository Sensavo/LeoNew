# 🤝 Contributing to WebOS Toolkit Landing Page

Thank you for your interest in contributing to the WebOS Toolkit landing page! This guide will help you get started with contributing to our project.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Pull Request Process](#pull-request-process)
- [Issue Reporting](#issue-reporting)
- [Component Guidelines](#component-guidelines)

## 🤗 Code of Conduct

We are committed to providing a welcoming and inclusive experience for everyone. Please read and follow our code of conduct:

- Be respectful and inclusive
- Exercise empathy and kindness
- Focus on what is best for the community
- Use welcoming and inclusive language
- Be collaborative and constructive

## 🚀 Getting Started

### Prerequisites
- Node.js (v16+)
- Python (v3.11+)
- MongoDB
- Yarn package manager
- Git

### Development Setup

1. **Fork the repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/webos-toolkit-landing.git
   cd webos-toolkit-landing
   ```

2. **Install dependencies**
   ```bash
   # Frontend
   cd frontend
   yarn install
   
   # Backend
   cd ../backend
   pip install -r requirements.txt
   ```

3. **Set up environment variables**
   ```bash
   # Copy example files
   cp frontend/.env.example frontend/.env
   cp backend/.env.example backend/.env
   ```

4. **Start development servers**
   ```bash
   # Terminal 1 - Backend
   cd backend
   uvicorn server:app --reload --host 0.0.0.0 --port 8001
   
   # Terminal 2 - Frontend
   cd frontend
   yarn start
   ```

## 🔄 Development Workflow

### Branch Naming Convention
- `feature/description` - New features
- `fix/description` - Bug fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring
- `style/description` - Code style changes

### Commit Message Format
We follow conventional commits:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, semicolons, etc.)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests
- `chore`: Changes to build process or auxiliary tools

**Examples:**
```
feat(hero): add animated preloader component
fix(banner): resolve dismissal state persistence
docs(readme): update installation instructions
style(components): format code with prettier
```

## 📏 Coding Standards

### Frontend (React/JavaScript)

#### Component Structure
```javascript
/**
 * Component description
 * Features: List key features
 */

import React from "react";
import { motion } from "framer-motion";

const ComponentName = ({ prop1, prop2 }) => {
  // Component logic here
  
  return (
    <div className="component-wrapper">
      {/* JSX content */}
    </div>
  );
};

export default ComponentName;
```

#### Style Guidelines
- Use functional components with hooks
- Include JSDoc comments for all components
- Use destructuring for props
- Follow naming conventions:
  - Components: PascalCase
  - Functions: camelCase
  - Constants: UPPER_SNAKE_CASE
  - Files: PascalCase for components, camelCase for utilities

#### CSS/Tailwind Guidelines
- Use Tailwind utility classes
- Group related classes together
- Use responsive prefixes consistently
- Create custom components for repeated patterns

### Backend (Python/FastAPI)

#### Code Structure
```python
"""
Module description
"""

from fastapi import APIRouter
from pydantic import BaseModel
from typing import List

# Type definitions
class ModelName(BaseModel):
    field: str
    
# Route handlers
@router.get("/endpoint")
async def handler_name():
    """Handler description."""
    pass
```

#### Style Guidelines
- Follow PEP 8 style guide
- Use type hints for all functions
- Include docstrings for modules, classes, and functions
- Use async/await for I/O operations
- Organize imports: standard library, third-party, local

## 🔍 Pull Request Process

### Before Submitting
1. **Test your changes**
   ```bash
   # Frontend tests
   cd frontend
   yarn test
   yarn lint
   
   # Backend tests
   cd backend
   pytest
   black .
   isort .
   ```

2. **Update documentation**
   - Update README if needed
   - Add JSDoc comments for new functions
   - Update API documentation for backend changes

3. **Check responsive design**
   - Test on different screen sizes
   - Verify mobile functionality
   - Check browser compatibility

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement
- [ ] Code refactoring

## Testing
- [ ] Frontend tests pass
- [ ] Backend tests pass
- [ ] Manual testing completed
- [ ] Responsive design verified

## Screenshots
Include screenshots for UI changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
- [ ] No console errors
```

### Review Process
1. Automated checks must pass
2. At least one code review required
3. All conversations must be resolved
4. Update branch if needed
5. Squash and merge when approved

## 🐛 Issue Reporting

### Bug Reports
Use the bug report template:

```markdown
**Describe the bug**
Clear description of the issue

**To Reproduce**
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

**Expected behavior**
What should happen

**Screenshots**
If applicable, add screenshots

**Environment:**
- OS: [e.g. iOS]
- Browser: [e.g. chrome, safari]
- Version: [e.g. 22]
```

### Feature Requests
```markdown
**Is your feature request related to a problem?**
Clear description of the problem

**Describe the solution you'd like**
Clear description of what you want to happen

**Describe alternatives you've considered**
Other solutions you've considered

**Additional context**
Any other context or screenshots
```

## 🧩 Component Guidelines

### Creating New Components

1. **Plan the component**
   - Define clear responsibilities
   - Identify required props
   - Consider reusability

2. **Create the file structure**
   ```
   components/
   ├── sections/          # Page-level components
   ├── ui/               # Reusable UI components
   └── utils/            # Utility functions
   ```

3. **Follow the component template**
   - Include JSDoc documentation
   - Add prop validation
   - Implement responsive design
   - Add accessibility features

4. **Test the component**
   - Unit tests for logic
   - Visual tests for UI
   - Accessibility testing
   - Integration testing

### Animation Guidelines
- Use Framer Motion for complex animations
- Keep animations subtle and purposeful
- Provide reduced motion alternatives
- Test performance on lower-end devices

### Accessibility Guidelines
- Include proper ARIA labels
- Ensure keyboard navigation
- Maintain color contrast ratios
- Test with screen readers

## 🔧 Development Tools

### Recommended VS Code Extensions
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Bracket Pair Colorizer

### Browser DevTools
- React Developer Tools
- Chrome DevTools
- Lighthouse for performance
- axe for accessibility

## 📚 Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Learning Resources
- [React Patterns](https://reactpatterns.com/)
- [JavaScript Best Practices](https://github.com/airbnb/javascript)
- [Python Style Guide](https://pep8.org/)

## 🎉 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes for significant contributions
- GitHub contributions graph
- Project documentation

Thank you for contributing to WebOS Toolkit! 🚀