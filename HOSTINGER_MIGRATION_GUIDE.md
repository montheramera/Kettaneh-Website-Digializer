# Hostinger Migration Guide for Kettaneh Website

## Overview
This guide will help you migrate your Next.js 14 website to Hostinger hosting. Since this is a Node.js application, you'll need **VPS or Cloud hosting** (shared hosting won't work for Next.js).

## Prerequisites

### Required Hostinger Plan
- **VPS Hosting** (recommended) or **Cloud Hosting**
- Minimum requirements:
  - 2GB RAM (4GB+ recommended)
  - 2 CPU cores
  - Node.js 18+ support
  - SSH access

### What You'll Need
- Hostinger account with VPS/Cloud hosting
- Domain name configured in Hostinger
- SSH access credentials
- FTP/SFTP access (optional, for file uploads)

---

## Step 1: Prepare Your Local Environment

### 1.1 Build the Application Locally
```bash
# Install dependencies
npm install

# Build the production version
npm run build

# Test the build locally
npm start
```

### 1.2 Prepare Environment Variables
Create a `.env.production` file with your production values:
```bash
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
NODE_ENV=production
```

---

## Step 2: Set Up Your Hostinger Server

### 2.1 Connect via SSH
```bash
ssh root@your-server-ip
# or
ssh username@your-server-ip
```

### 2.2 Install Node.js 18+
```bash
# Update system packages
sudo apt update && sudo apt upgrade -y

# Install Node.js 18 (using NodeSource repository)
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Verify installation
node --version  # Should show v18.x.x or higher
npm --version
```

### 2.3 Install PM2 (Process Manager)
```bash
sudo npm install -g pm2
```

### 2.4 Install Nginx (Reverse Proxy)
```bash
sudo apt install nginx -y
sudo systemctl start nginx
sudo systemctl enable nginx
```

---

## Step 3: Upload Your Application

### Option A: Using Git (Recommended)
```bash
# On your server, navigate to web directory
cd /var/www
# or
cd /home/username/public_html

# Clone your repository
git clone https://github.com/your-username/your-repo.git kettaneh-website
cd kettaneh-website

# Install dependencies
npm install --production
```

### Option B: Using SFTP/FTP
1. Use FileZilla or similar FTP client
2. Connect to your Hostinger server
3. Upload all project files to `/home/username/public_html` or `/var/www/html`
4. Exclude `node_modules` folder (upload it separately or install on server)

### Option C: Using rsync (from local machine)
```bash
rsync -avz --exclude 'node_modules' --exclude '.next' \
  ./ root@your-server-ip:/var/www/kettaneh-website/
```

---

## Step 4: Configure Environment Variables

### 4.1 Create .env.production on Server
```bash
cd /var/www/kettaneh-website
# or your project directory

nano .env.production
```

Add the following:
```bash
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
NODE_ENV=production
PORT=3000
```

Save and exit (Ctrl+X, then Y, then Enter)

---

## Step 5: Build and Start the Application

### 5.1 Build the Application
```bash
cd /var/www/kettaneh-website
npm run build
```

### 5.2 Start with PM2
```bash
# Start the application
pm2 start npm --name "kettaneh-website" -- start

# Or create an ecosystem file for better management
nano ecosystem.config.js
```

Create `ecosystem.config.js`:
```javascript
module.exports = {
  apps: [{
    name: 'kettaneh-website',
    script: 'npm',
    args: 'start',
    cwd: '/var/www/kettaneh-website',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: '/var/log/kettaneh/error.log',
    out_file: '/var/log/kettaneh/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
};
```

Then start with:
```bash
pm2 start ecosystem.config.js
pm2 save
pm2 startup  # This will generate a command to run on boot
```

---

## Step 6: Configure Nginx as Reverse Proxy

### 6.1 Create Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/kettaneh-website
```

Add the following configuration:
```nginx
server {
    listen 80;
    server_name www.kettaneh.com.jo kettaneh.com.jo;

    # Redirect HTTP to HTTPS (after SSL setup)
    # return 301 https://$server_name$request_uri;

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
        
        # Increase timeouts for long-running requests
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Static files caching
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 200 60m;
        add_header Cache-Control "public, immutable";
    }

    # Increase body size limit for file uploads
    client_max_body_size 10M;
}
```

### 6.2 Enable the Site
```bash
# Create symbolic link
sudo ln -s /etc/nginx/sites-available/kettaneh-website /etc/nginx/sites-enabled/

# Test Nginx configuration
sudo nginx -t

# Reload Nginx
sudo systemctl reload nginx
```

---

## Step 7: Set Up SSL Certificate (HTTPS)

### Option A: Using Hostinger's Free SSL
1. Log in to Hostinger hPanel
2. Go to **SSL** section
3. Enable **Free SSL** for your domain
4. Wait for activation (usually a few minutes)

### Option B: Using Let's Encrypt (Certbot)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obtain SSL certificate
sudo certbot --nginx -d www.kettaneh.com.jo -d kettaneh.com.jo

# Auto-renewal is set up automatically
```

After SSL is set up, update your Nginx config to redirect HTTP to HTTPS (uncomment the redirect line in Step 6.1).

---

## Step 8: Configure Firewall

```bash
# Allow HTTP, HTTPS, and SSH
sudo ufw allow 22/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable
```

---

## Step 9: Domain Configuration

### 9.1 Update DNS Records in Hostinger
1. Log in to Hostinger hPanel
2. Go to **Domains** → **DNS Zone Editor**
3. Ensure these records exist:
   - **A Record**: `@` → Your server IP
   - **A Record**: `www` → Your server IP
   - **CNAME Record** (optional): `www` → `@`

### 9.2 Update Environment Variables
If your domain changes, update `.env.production`:
```bash
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
```

---

## Step 10: Verify Deployment

### 10.1 Check Application Status
```bash
# Check PM2 status
pm2 status
pm2 logs kettaneh-website

# Check Nginx status
sudo systemctl status nginx

# Check if app is running
curl http://localhost:3000
```

### 10.2 Test Your Website
1. Visit `http://www.kettaneh.com.jo` (should redirect to HTTPS)
2. Test all pages:
   - Homepage
   - Blog pages
   - Category pages
   - Contact forms
3. Check browser console for errors
4. Test mobile responsiveness

---

## Step 11: Post-Deployment Checklist

### ✅ Application
- [ ] Website loads correctly
- [ ] All pages are accessible
- [ ] Images load from Cloudinary
- [ ] Blog content displays properly
- [ ] Forms work correctly
- [ ] API calls to Strapi work

### ✅ Performance
- [ ] Page load times are acceptable
- [ ] Static assets are cached
- [ ] Images are optimized

### ✅ Security
- [ ] HTTPS is enabled
- [ ] SSL certificate is valid
- [ ] Environment variables are secure
- [ ] Firewall is configured

### ✅ Monitoring
- [ ] PM2 auto-restart is configured
- [ ] Logs are being generated
- [ ] Error tracking is set up (optional)

---

## Maintenance Commands

### Update Application
```bash
cd /var/www/kettaneh-website
git pull  # If using Git
npm install --production
npm run build
pm2 restart kettaneh-website
```

### View Logs
```bash
# PM2 logs
pm2 logs kettaneh-website

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log
```

### Restart Services
```bash
# Restart application
pm2 restart kettaneh-website

# Restart Nginx
sudo systemctl restart nginx
```

### Check Status
```bash
pm2 status
pm2 monit
sudo systemctl status nginx
```

---

## Troubleshooting

### Application Won't Start
```bash
# Check PM2 logs
pm2 logs kettaneh-website --lines 50

# Check if port 3000 is in use
sudo netstat -tulpn | grep 3000

# Restart PM2
pm2 restart kettaneh-website
```

### 502 Bad Gateway Error
- Check if Next.js app is running: `pm2 status`
- Check Nginx error logs: `sudo tail -f /var/log/nginx/error.log`
- Verify proxy_pass URL in Nginx config matches your app port

### Images Not Loading
- Verify `next.config.mjs` domains are correct
- Check Cloudinary/Strapi CORS settings
- Verify environment variables are set correctly

### Domain Not Resolving
- Check DNS propagation: `nslookup www.kettaneh.com.jo`
- Verify DNS records in Hostinger
- Wait for DNS propagation (can take up to 48 hours)

### SSL Certificate Issues
- Verify certificate is active in Hostinger hPanel
- Check certificate expiration: `sudo certbot certificates`
- Renew if needed: `sudo certbot renew`

---

## Alternative: Static Export (If VPS Not Available)

If you only have shared hosting, you can export Next.js as static files:

### 1. Update `next.config.mjs`
```javascript
const nextConfig = {
  output: 'export',  // Change from 'standalone' to 'export'
  images: {
    unoptimized: true,  // Required for static export
  },
  // ... rest of config
};
```

### 2. Build Static Files
```bash
npm run build
```

### 3. Upload `out` Folder
Upload the `out` folder contents to your shared hosting `public_html` directory via FTP.

**Note**: This method has limitations:
- No server-side features (API routes won't work)
- No dynamic routes at build time
- Limited to static content

---

## Support Resources

- **Hostinger Support**: https://www.hostinger.com/contact
- **Next.js Deployment Docs**: https://nextjs.org/docs/deployment
- **PM2 Documentation**: https://pm2.keymetrics.io/docs/
- **Nginx Documentation**: https://nginx.org/en/docs/

---

## Contact

For deployment support, contact your development team or Hostinger support.


