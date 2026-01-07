# Hostinger Deployment Guide - Quick Reference

## Configuration Details

### Output Directory
- **Next.js Output**: `standalone` (configured in `next.config.mjs`)
- **Build Output Location**: `.next/standalone` (after running `npm run build`)
- **Deployment Directory**: `/var/www/kettaneh-website` (on server)

### Package Manager
- **Package Manager**: `npm` (Node Package Manager)
- **Node Version Required**: Node.js 18+ 
- **Install Command**: `npm install --production`
- **Build Command**: `npm run build`
- **Start Command**: `npm start`

---

## Quick Deployment Steps

### Step 1: Connect to Your Hostinger Server
```bash
ssh root@your-server-ip
# or
ssh username@your-server-ip
```

### Step 2: Install Prerequisites
```bash
# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v18.x.x or higher
npm --version

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Install Nginx (Reverse Proxy)
sudo apt update
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

### Step 3: Upload Your Application

#### Option A: Using Git (Recommended)
```bash
# Create application directory
sudo mkdir -p /var/www/kettaneh-website
cd /var/www/kettaneh-website

# Clone your repository
sudo git clone https://github.com/digializer/Kettaneh-Website-Digializer.git .

# Set proper permissions
sudo chown -R $USER:$USER /var/www/kettaneh-website
```

#### Option B: Using SFTP/FTP
1. Use FileZilla or WinSCP
2. Connect to your Hostinger server
3. Upload all project files to `/var/www/kettaneh-website`
4. **Exclude**: `node_modules`, `.next` (will be generated on server)

#### Option C: Using rsync (from your local machine)
```bash
rsync -avz --exclude 'node_modules' --exclude '.next' \
  ./ root@your-server-ip:/var/www/kettaneh-website/
```

### Step 4: Install Dependencies & Build
```bash
cd /var/www/kettaneh-website

# Install production dependencies
npm install --production

# Create environment file
cat > .env.production << EOF
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
NODE_ENV=production
PORT=3000
EOF

# Build the application (creates .next/standalone directory)
npm run build
```

### Step 5: Start Application with PM2
```bash
# Start the application
pm2 start npm --name "kettaneh-website" -- start

# Save PM2 configuration
pm2 save

# Setup PM2 to start on boot
pm2 startup
# Follow the instructions it provides
```

### Step 6: Configure Nginx
```bash
# Create Nginx configuration
sudo nano /etc/nginx/sites-available/kettaneh-website
```

Add this configuration:
```nginx
server {
    listen 80;
    server_name www.kettaneh.com.jo kettaneh.com.jo;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }

    client_max_body_size 10M;
}
```

Enable the site:
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/kettaneh-website /etc/nginx/sites-enabled/

# Remove default site
sudo rm /etc/nginx/sites-enabled/default

# Test configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

### Step 7: Setup SSL Certificate
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get SSL certificate
sudo certbot --nginx -d www.kettaneh.com.jo -d kettaneh.com.jo

# Or use Hostinger's Free SSL from hPanel
```

### Step 8: Configure DNS
In Hostinger hPanel:
1. Go to **Domains** → **DNS Zone Editor**
2. Add/Update records:
   - **A Record**: `@` → Your Server IP
   - **A Record**: `www` → Your Server IP

---

## Important File Locations

```
Application Root:    /var/www/kettaneh-website
Build Output:       /var/www/kettaneh-website/.next/standalone
Environment File:   /var/www/kettaneh-website/.env.production
Nginx Config:       /etc/nginx/sites-available/kettaneh-website
PM2 Logs:           ~/.pm2/logs/
```

---

## Update Deployment (After Code Changes)

```bash
cd /var/www/kettaneh-website

# Pull latest changes (if using Git)
git pull origin main

# Install any new dependencies
npm install --production

# Rebuild application
npm run build

# Restart application
pm2 restart kettaneh-website

# Check status
pm2 status
pm2 logs kettaneh-website
```

---

## Useful Commands

### Check Application Status
```bash
pm2 status
pm2 logs kettaneh-website
pm2 monit
```

### Restart Services
```bash
pm2 restart kettaneh-website
sudo systemctl restart nginx
```

### View Logs
```bash
# Application logs
pm2 logs kettaneh-website --lines 100

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Test Application
```bash
# Test locally on server
curl http://localhost:3000

# Check if port is listening
sudo netstat -tulpn | grep 3000
```

---

## Troubleshooting

### Application Won't Start
```bash
# Check logs
pm2 logs kettaneh-website --lines 50

# Check if port is in use
sudo lsof -i :3000

# Restart PM2
pm2 restart kettaneh-website
```

### 502 Bad Gateway
- Verify app is running: `pm2 status`
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Verify proxy_pass URL matches your app port (3000)

### Build Errors
- Ensure Node.js 18+ is installed: `node --version`
- Check disk space: `df -h`
- Clear build cache: `rm -rf .next` then rebuild

---

## Summary

- **Output Directory**: `.next/standalone` (created by `npm run build`)
- **Package Manager**: `npm`
- **Deployment Path**: `/var/www/kettaneh-website`
- **Application Port**: `3000` (internal, proxied by Nginx)
- **Process Manager**: PM2
- **Web Server**: Nginx (port 80/443)

Your website will be accessible at: `https://www.kettaneh.com.jo`




