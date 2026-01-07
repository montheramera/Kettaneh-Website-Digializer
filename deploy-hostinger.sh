#!/bin/bash

# Hostinger Deployment Script for Kettaneh Website
# Run this script on your Hostinger VPS/Cloud server

set -e  # Exit on error

echo "🚀 Starting Kettaneh Website Deployment on Hostinger..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Configuration
APP_NAME="kettaneh-website"
APP_DIR="/var/www/${APP_NAME}"
NODE_VERSION="18"
PORT="3000"

# Check if running as root
if [ "$EUID" -ne 0 ]; then 
    echo -e "${RED}Please run as root or with sudo${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 1: Installing Node.js ${NODE_VERSION}...${NC}"
if ! command -v node &> /dev/null; then
    curl -fsSL https://deb.nodesource.com/setup_${NODE_VERSION}.x | bash -
    apt-get install -y nodejs
else
    echo "Node.js is already installed: $(node --version)"
fi

echo -e "${YELLOW}Step 2: Installing PM2...${NC}"
if ! command -v pm2 &> /dev/null; then
    npm install -g pm2
else
    echo "PM2 is already installed"
fi

echo -e "${YELLOW}Step 3: Installing Nginx...${NC}"
if ! command -v nginx &> /dev/null; then
    apt update
    apt install -y nginx
    systemctl enable nginx
    systemctl start nginx
else
    echo "Nginx is already installed"
fi

echo -e "${YELLOW}Step 4: Creating application directory...${NC}"
mkdir -p ${APP_DIR}
cd ${APP_DIR}

echo -e "${YELLOW}Step 5: Please ensure your application files are in ${APP_DIR}${NC}"
echo -e "${YELLOW}You can:${NC}"
echo "  - Clone from Git: git clone <your-repo-url> ."
echo "  - Upload via SFTP/FTP"
echo "  - Use rsync from your local machine"
echo ""
read -p "Press Enter when files are ready..."

if [ ! -f "package.json" ]; then
    echo -e "${RED}Error: package.json not found in ${APP_DIR}${NC}"
    exit 1
fi

echo -e "${YELLOW}Step 6: Installing dependencies...${NC}"
npm install --production

echo -e "${YELLOW}Step 7: Setting up environment variables...${NC}"
if [ ! -f ".env.production" ]; then
    cat > .env.production << EOF
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
NODE_ENV=production
PORT=${PORT}
EOF
    echo -e "${GREEN}Created .env.production file${NC}"
    echo -e "${YELLOW}Please review and update .env.production if needed${NC}"
else
    echo ".env.production already exists"
fi

echo -e "${YELLOW}Step 8: Building the application...${NC}"
npm run build

echo -e "${YELLOW}Step 9: Creating PM2 ecosystem file...${NC}"
cat > ecosystem.config.js << EOF
module.exports = {
  apps: [{
    name: '${APP_NAME}',
    script: 'npm',
    args: 'start',
    cwd: '${APP_DIR}',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: ${PORT}
    },
    error_file: '/var/log/${APP_NAME}/error.log',
    out_file: '/var/log/${APP_NAME}/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
    autorestart: true,
    max_memory_restart: '1G'
  }]
};
EOF

echo -e "${YELLOW}Step 10: Creating log directory...${NC}"
mkdir -p /var/log/${APP_NAME}

echo -e "${YELLOW}Step 11: Starting application with PM2...${NC}"
pm2 start ecosystem.config.js
pm2 save

# Setup PM2 to start on boot
echo -e "${YELLOW}Step 12: Setting up PM2 startup script...${NC}"
STARTUP_CMD=$(pm2 startup | grep -oP 'sudo .*')
if [ ! -z "$STARTUP_CMD" ]; then
    eval $STARTUP_CMD
fi

echo -e "${YELLOW}Step 13: Creating Nginx configuration...${NC}"
read -p "Enter your domain name (e.g., www.kettaneh.com.jo): " DOMAIN_NAME

cat > /etc/nginx/sites-available/${APP_NAME} << EOF
server {
    listen 80;
    server_name ${DOMAIN_NAME};

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

# Remove default site if exists
if [ -f /etc/nginx/sites-enabled/default ]; then
    rm /etc/nginx/sites-enabled/default
fi

# Test and reload Nginx
echo -e "${YELLOW}Step 14: Testing Nginx configuration...${NC}"
nginx -t && systemctl reload nginx

echo -e "${GREEN}✅ Deployment completed successfully!${NC}"
echo ""
echo -e "${YELLOW}Next steps:${NC}"
echo "1. Set up SSL certificate (Let's Encrypt or Hostinger Free SSL)"
echo "2. Update DNS records to point to this server"
echo "3. Test your website: http://${DOMAIN_NAME}"
echo ""
echo -e "${YELLOW}Useful commands:${NC}"
echo "  pm2 status              - Check application status"
echo "  pm2 logs ${APP_NAME}    - View application logs"
echo "  pm2 restart ${APP_NAME} - Restart application"
echo "  sudo systemctl status nginx - Check Nginx status"
echo ""
echo -e "${GREEN}🎉 Your website should now be accessible!${NC}"


