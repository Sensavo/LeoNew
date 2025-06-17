# 🚀 Deployment Guide

Comprehensive deployment guide for the WebOS Toolkit Landing Page application.

## 📋 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Environment Configuration](#environment-configuration)
- [Local Development](#local-development)
- [Production Deployment](#production-deployment)
- [Docker Deployment](#docker-deployment)
- [CI/CD Pipeline](#cicd-pipeline)
- [Monitoring](#monitoring)
- [Troubleshooting](#troubleshooting)

## 🌟 Overview

This application consists of:
- **Frontend**: React SPA served by a web server
- **Backend**: FastAPI application with MongoDB
- **Database**: MongoDB for data persistence

## ✅ Prerequisites

### Development
- Node.js 16+ and Yarn
- Python 3.11+
- MongoDB (local or cloud)
- Git

### Production
- Web server (Nginx/Apache)
- Python application server (Gunicorn/Uvicorn)
- MongoDB instance
- SSL certificate
- Domain name

## 🔧 Environment Configuration

### Frontend Environment Variables

Create `/frontend/.env`:

```env
# Development
REACT_APP_BACKEND_URL=http://localhost:8001

# Production
REACT_APP_BACKEND_URL=https://api.yourdomain.com

# Optional
REACT_APP_ENVIRONMENT=production
REACT_APP_VERSION=1.0.0
```

### Backend Environment Variables

Create `/backend/.env`:

```env
# Database
MONGO_URL=mongodb://localhost:27017
DB_NAME=webos_toolkit

# Production Database (MongoDB Atlas example)
MONGO_URL=mongodb+srv://username:password@cluster.mongodb.net/
DB_NAME=webos_toolkit_prod

# Application
DEBUG=false
LOG_LEVEL=INFO

# Security (production)
SECRET_KEY=your-secret-key-here
CORS_ORIGINS=https://yourdomain.com
```

## 💻 Local Development

### Quick Start

```bash
# Clone repository
git clone <repository-url>
cd webos-toolkit-landing

# Install dependencies
cd frontend && yarn install
cd ../backend && pip install -r requirements.txt

# Start services
# Terminal 1 - Backend
cd backend
uvicorn server:app --reload --host 0.0.0.0 --port 8001

# Terminal 2 - Frontend
cd frontend
yarn start

# Access application
open http://localhost:3000
```

### Development with Docker

```bash
# Build and run with Docker Compose
docker-compose up --build

# Access application
open http://localhost:3000
```

## 🌐 Production Deployment

### 1. Server Setup

#### System Requirements
- Ubuntu 20.04+ or CentOS 8+
- 2+ GB RAM
- 20+ GB storage
- Internet connectivity

#### Install Dependencies

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install Python
sudo apt install python3.11 python3.11-pip python3.11-venv

# Install MongoDB
# Follow official MongoDB installation guide for your OS

# Install Nginx
sudo apt install nginx

# Install certbot for SSL
sudo apt install certbot python3-certbot-nginx
```

### 2. Application Deployment

#### Frontend Build and Deploy

```bash
# Build frontend
cd frontend
yarn install --production
yarn build

# Copy to web server directory
sudo cp -r build/* /var/www/webos-toolkit/

# Set permissions
sudo chown -R www-data:www-data /var/www/webos-toolkit/
sudo chmod -R 755 /var/www/webos-toolkit/
```

#### Backend Deployment

```bash
# Create application user
sudo useradd --system --shell /bin/bash webos-api

# Create application directory
sudo mkdir -p /opt/webos-api
sudo chown webos-api:webos-api /opt/webos-api

# Deploy application
sudo -u webos-api git clone <repository-url> /opt/webos-api
cd /opt/webos-api/backend

# Create virtual environment
sudo -u webos-api python3.11 -m venv venv
sudo -u webos-api ./venv/bin/pip install -r requirements.txt

# Create environment file
sudo -u webos-api cp .env.example .env
sudo -u webos-api nano .env  # Configure production values
```

### 3. Service Configuration

#### Systemd Service for Backend

Create `/etc/systemd/system/webos-api.service`:

```ini
[Unit]
Description=WebOS Toolkit API
After=network.target

[Service]
Type=exec
User=webos-api
Group=webos-api
WorkingDirectory=/opt/webos-api/backend
Environment=PATH=/opt/webos-api/backend/venv/bin
ExecStart=/opt/webos-api/backend/venv/bin/uvicorn server:app --host 127.0.0.1 --port 8001
Restart=always
RestartSec=10

[Install]
WantedBy=multi-user.target
```

```bash
# Enable and start service
sudo systemctl daemon-reload
sudo systemctl enable webos-api
sudo systemctl start webos-api
sudo systemctl status webos-api
```

#### Nginx Configuration

Create `/etc/nginx/sites-available/webos-toolkit`:

```nginx
# Frontend
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;
    root /var/www/webos-toolkit;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/css application/javascript application/json image/svg+xml;

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
    add_header Content-Security-Policy "default-src 'self' https: data: 'unsafe-inline' 'unsafe-eval'" always;

    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Frontend routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # API proxy
    location /api/ {
        proxy_pass http://127.0.0.1:8001;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/webos-toolkit /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

### 4. SSL Certificate

```bash
# Obtain SSL certificate
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com

# Test renewal
sudo certbot renew --dry-run

# Auto-renewal cron job
echo "0 12 * * * /usr/bin/certbot renew --quiet" | sudo crontab -
```

## 🐳 Docker Deployment

### Docker Compose Configuration

Create `docker-compose.prod.yml`:

```yaml
version: '3.8'

services:
  frontend:
    build:
      context: ./frontend
      dockerfile: Dockerfile.prod
    ports:
      - "80:80"
      - "443:443"
    depends_on:
      - backend
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/ssl/certs

  backend:
    build:
      context: ./backend
      dockerfile: Dockerfile.prod
    ports:
      - "8001:8001"
    environment:
      - MONGO_URL=mongodb://mongodb:27017
      - DB_NAME=webos_toolkit
    depends_on:
      - mongodb

  mongodb:
    image: mongo:7
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db
    environment:
      - MONGO_INITDB_ROOT_USERNAME=admin
      - MONGO_INITDB_ROOT_PASSWORD=password

volumes:
  mongodb_data:
```

### Frontend Dockerfile

Create `frontend/Dockerfile.prod`:

```dockerfile
# Build stage
FROM node:18-alpine as build
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn build

# Production stage
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Backend Dockerfile

Create `backend/Dockerfile.prod`:

```dockerfile
FROM python:3.11-slim

WORKDIR /app

# Install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy application
COPY . .

# Create non-root user
RUN useradd --create-home --shell /bin/bash app
USER app

EXPOSE 8001

CMD ["uvicorn", "server:app", "--host", "0.0.0.0", "--port", "8001"]
```

### Deploy with Docker

```bash
# Build and deploy
docker-compose -f docker-compose.prod.yml up --build -d

# Check logs
docker-compose -f docker-compose.prod.yml logs -f

# Update application
docker-compose -f docker-compose.prod.yml pull
docker-compose -f docker-compose.prod.yml up -d
```

## 🔄 CI/CD Pipeline

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'yarn'
          cache-dependency-path: frontend/yarn.lock
      
      - name: Install frontend dependencies
        run: cd frontend && yarn install
      
      - name: Run frontend tests
        run: cd frontend && yarn test --watchAll=false
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install backend dependencies
        run: cd backend && pip install -r requirements.txt
      
      - name: Run backend tests
        run: cd backend && pytest

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Deploy to server
        uses: appleboy/ssh-action@v0.1.5
        with:
          host: ${{ secrets.HOST }}
          username: ${{ secrets.USERNAME }}
          key: ${{ secrets.DEPLOY_KEY }}
          script: |
            cd /opt/webos-api
            git pull origin main
            cd backend
            ./venv/bin/pip install -r requirements.txt
            sudo systemctl restart webos-api
            
            cd ../frontend
            yarn install
            yarn build
            sudo cp -r build/* /var/www/webos-toolkit/
            sudo systemctl reload nginx
```

## 📊 Monitoring

### Health Checks

Create monitoring script `/opt/scripts/health-check.sh`:

```bash
#!/bin/bash

# Check backend health
BACKEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:8001/api/)
if [ $BACKEND_STATUS -ne 200 ]; then
    echo "Backend health check failed: $BACKEND_STATUS"
    sudo systemctl restart webos-api
fi

# Check frontend
FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost/)
if [ $FRONTEND_STATUS -ne 200 ]; then
    echo "Frontend health check failed: $FRONTEND_STATUS"
    sudo systemctl reload nginx
fi
```

### Log Monitoring

```bash
# Application logs
sudo journalctl -u webos-api -f

# Nginx logs
sudo tail -f /var/log/nginx/access.log
sudo tail -f /var/log/nginx/error.log

# System resources
htop
df -h
free -h
```

### Automated Monitoring

Set up cron jobs for monitoring:

```bash
# Health checks every 5 minutes
*/5 * * * * /opt/scripts/health-check.sh >> /var/log/health-check.log 2>&1

# Log rotation
0 2 * * * /usr/sbin/logrotate /etc/logrotate.conf
```

## 🔧 Troubleshooting

### Common Issues

#### Frontend Not Loading
```bash
# Check Nginx status
sudo systemctl status nginx

# Check Nginx configuration
sudo nginx -t

# Check file permissions
ls -la /var/www/webos-toolkit/
```

#### Backend API Errors
```bash
# Check service status
sudo systemctl status webos-api

# Check logs
sudo journalctl -u webos-api -n 50

# Check port binding
sudo netstat -tlnp | grep 8001
```

#### Database Connection Issues
```bash
# Check MongoDB status
sudo systemctl status mongod

# Test connection
mongo --eval "db.stats()"

# Check logs
sudo tail -f /var/log/mongodb/mongod.log
```

### Performance Issues

#### High CPU Usage
```bash
# Monitor processes
top -p $(pgrep -d',' -f "uvicorn|nginx")

# Check application metrics
curl http://localhost:8001/api/

# Scale workers if needed
# Edit systemd service to add --workers 4
```

#### Memory Issues
```bash
# Check memory usage
free -h
ps aux --sort=-%mem | head

# Restart services if needed
sudo systemctl restart webos-api nginx
```

### Security Checklist

- [ ] SSL certificate installed and auto-renewing
- [ ] Firewall configured (ports 80, 443, 22 only)
- [ ] Database access restricted
- [ ] Application running as non-root user
- [ ] Regular security updates applied
- [ ] Logs monitored for suspicious activity
- [ ] Backup strategy implemented

---

## 📞 Support

For deployment issues:
1. Check this troubleshooting guide
2. Review application logs
3. Check GitHub Issues
4. Contact the development team

Remember to never commit sensitive information like passwords or API keys to version control!