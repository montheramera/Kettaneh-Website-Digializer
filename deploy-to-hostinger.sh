#!/bin/bash

# Hostinger Deployment Script
# Run this script on your Hostinger VPS/Cloud server via SSH

set -e

echo "🚀 Kettaneh Website - Hostinger Deployment"
echo "=========================================="

# Configuration
APP_NAME="kettaneh-website"
APP_DIR="/var/www/${APP_NAME}"
REPO_URL="https://github.com/digializer/Kettaneh-Website-Digializer.git"
PORT=3000

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo "❌ Please run as root or with sudo"
    exit 1
fi

echo ""
echo "Step 1: Installing Node.js 18..."
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
    apt-get install -y nodejs
    echo "✅ Node.js installed: $(node --version)"
else
    echo "✅ Node.js already installed: $(node --version)"
fi

echo ""
echo "Step 2: Installing PM2..."
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
    echo "✅ PM2 installed"
else
    echo "✅ PM2 already installed"
fi

echo ""
echo "Step 3: Installing Nginx..."
if ! command -v nginx &> /dev/null; then
    apt update
    apt install -y nginx
    systemctl enable nginx
    systemctl start nginx
    echo "✅ Nginx installed and started"
else
    echo "✅ Nginx already installed"
fi

echo ""
echo "Step 4: Setting up application directory..."
mkdir -p ${APP_DIR}
cd ${APP_DIR}

if [ -d ".git" ]; then
    echo "📥 Pulling latest changes from GitHub..."
    git pull origin main
else
    echo "📥 Cloning repository..."
    git clone ${REPO_URL} .
fi

echo ""
echo "Step 5: Installing dependencies..."
npm install --production

echo ""
echo "Step 6: Creating environment file..."
if [ ! -f ".env.production" ]; then
    cat > .env.production << EOF
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
NODE_ENV=production
PORT=${PORT}
EOF
    echo "✅ Created .env.production"
else
    echo "✅ .env.production already exists"
fi

echo ""
echo "Step 7: Building application..."
npm run build

echo ""
echo "Step 8: Setting up PM2..."
# Stop existing instance if running
pm2 delete ${APP_NAME} 2>/dev/null || true

# Start application
pm2 start npm --name "${APP_NAME}" -- start
pm2 save

# Setup startup
pm2 startup | grep -v PM2 | bash || true

echo ""
echo "Step 9: Configuring Nginx..."
read -p "Enter your domain name (e.g., www.kettaneh.com.jo): " DOMAIN_NAME

cat > /etc/nginx/sites-available/${APP_NAME} << EOF
server {
    listen 80;
    server_name ${DOMAIN_NAME} ${DOMAIN_NAME#www.};

    location / {
        proxy_pass http://localhost:${PORT};
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_set_header X-Real-IP \$remote_addr;
        proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto \$scheme;
        proxy_cache_bypass \$http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    location /_next/static {
        proxy_pass http://localhost:${PORT};
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }

    client_max_body_size 10M;
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/${APP_NAME} /etc/nginx/sites-enabled/

# Remove default site
rm -f /etc/nginx/sites-enabled/default

# Test and reload
nginx -t && systemctl reload nginx

echo ""
echo "✅ Deployment completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Setup SSL certificate:"
echo "   sudo apt install certbot python3-certbot-nginx -y"
echo "   sudo certbot --nginx -d ${DOMAIN_NAME}"
echo ""
echo "2. Configure DNS in Hostinger hPanel:"
echo "   - A Record: @ → Your Server IP"
echo "   - A Record: www → Your Server IP"
echo ""
echo "3. Check application status:"
echo "   pm2 status"
echo "   pm2 logs ${APP_NAME}"
echo ""
echo "🌐 Your website should be accessible at: http://${DOMAIN_NAME}"
