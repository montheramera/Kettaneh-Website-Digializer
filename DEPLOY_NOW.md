# 🚀 Deploy to Hostinger - Quick Start

## Prerequisites
- Hostinger VPS or Cloud hosting with SSH access
- Domain name configured in Hostinger
- Your server IP address

## Quick Deployment (3 Methods)

### Method 1: Automated Script (Recommended)

1. **Connect to your Hostinger server via SSH:**
   ```bash
   ssh root@your-server-ip
   # or
   ssh username@your-server-ip
   ```

2. **Download and run the deployment script:**
   ```bash
   # Download the script
   wget https://raw.githubusercontent.com/digializer/Kettaneh-Website-Digializer/main/deploy-to-hostinger.sh
   
   # Or upload deploy-to-hostinger.sh via SFTP, then:
   chmod +x deploy-to-hostinger.sh
   sudo ./deploy-to-hostinger.sh
   ```

3. **Follow the prompts** - The script will:
   - Install Node.js 18, PM2, and Nginx
   - Clone your repository
   - Install dependencies
   - Build the application
   - Configure PM2 and Nginx
   - Ask for your domain name

---

### Method 2: Manual Deployment

#### Step 1: Connect to Server
```bash
ssh root@your-server-ip
```

#### Step 2: Install Prerequisites
```bash
# Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# PM2
sudo npm install -g pm2

# Nginx
sudo apt update
sudo apt install nginx -y
sudo systemctl enable nginx
sudo systemctl start nginx
```

#### Step 3: Clone Repository
```bash
sudo mkdir -p /var/www/kettaneh-website
cd /var/www/kettaneh-website
sudo git clone https://github.com/digializer/Kettaneh-Website-Digializer.git .
sudo chown -R $USER:$USER /var/www/kettaneh-website
```

#### Step 4: Install & Build
```bash
cd /var/www/kettaneh-website
npm install --production

# Create environment file
cat > .env.production << EOF
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
NODE_ENV=production
PORT=3000
EOF

# Build
npm run build
```

#### Step 5: Start with PM2
```bash
pm2 start npm --name "kettaneh-website" -- start
pm2 save
pm2 startup
# Follow the command it provides
```

#### Step 6: Configure Nginx
```bash
sudo nano /etc/nginx/sites-available/kettaneh-website
```

Paste this configuration:
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
sudo ln -s /etc/nginx/sites-available/kettaneh-website /etc/nginx/sites-enabled/
sudo rm /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

#### Step 7: Setup SSL
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d www.kettaneh.com.jo -d kettaneh.com.jo
```

---

### Method 3: Using Hostinger hPanel (If Available)

If Hostinger provides a Node.js app deployment feature:

1. **Login to Hostinger hPanel**
2. **Go to Node.js Apps** (if available)
3. **Create New App:**
   - **App Name**: `kettaneh-website`
   - **Node Version**: `18.x`
   - **Package Manager**: `npm`
   - **Build Command**: `npm run build`
   - **Start Command**: `npm start`
   - **Output Directory**: `.next/standalone`
4. **Connect Repository**: `https://github.com/digializer/Kettaneh-Website-Digializer.git`
5. **Set Environment Variables:**
   - `NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo`
   - `NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo`
   - `NODE_ENV=production`
   - `PORT=3000`
6. **Deploy**

---

## Post-Deployment

### Verify Deployment
```bash
# Check PM2 status
pm2 status

# Check logs
pm2 logs kettaneh-website

# Test locally
curl http://localhost:3000

# Check Nginx
sudo systemctl status nginx
```

### Update DNS in Hostinger
1. Login to **Hostinger hPanel**
2. Go to **Domains** → **DNS Zone Editor**
3. Add/Update:
   - **A Record**: `@` → Your Server IP
   - **A Record**: `www` → Your Server IP

### Test Your Website
- Visit: `http://www.kettaneh.com.jo` (should redirect to HTTPS after SSL setup)
- Test all pages and features

---

## Update After Code Changes

```bash
cd /var/www/kettaneh-website
git pull origin main
npm install --production
npm run build
pm2 restart kettaneh-website
```

---

## Troubleshooting

### Application Not Starting
```bash
pm2 logs kettaneh-website --lines 50
pm2 restart kettaneh-website
```

### 502 Bad Gateway
- Check if app is running: `pm2 status`
- Check Nginx logs: `sudo tail -f /var/log/nginx/error.log`
- Verify port 3000: `sudo netstat -tulpn | grep 3000`

### Build Errors
- Check Node version: `node --version` (should be 18+)
- Check disk space: `df -h`
- Clear and rebuild: `rm -rf .next node_modules && npm install && npm run build`

---

## Support

- **Full Guide**: See `HOSTINGER_DEPLOYMENT.md`
- **Quick Reference**: See `HOSTINGER_QUICK_REFERENCE.md`
- **Hostinger Support**: https://www.hostinger.com/contact
