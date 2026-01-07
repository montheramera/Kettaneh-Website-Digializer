# Hostinger Quick Reference Guide

## Quick Setup Commands

### Initial Server Setup
```bash
# Connect to server
ssh root@your-server-ip

# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2
sudo npm install -g pm2

# Install Nginx
sudo apt install nginx -y
```

### Deploy Application
```bash
# Navigate to project directory
cd /var/www/kettaneh-website

# Install dependencies
npm install --production

# Build application
npm run build

# Start with PM2
pm2 start npm --name "kettaneh-website" -- start
pm2 save
pm2 startup
```

### Or Use the Deployment Script
```bash
# Make script executable
chmod +x deploy-hostinger.sh

# Run script
sudo ./deploy-hostinger.sh
```

---

## Common Commands

### PM2 (Process Management)
```bash
pm2 status                    # Check app status
pm2 logs kettaneh-website     # View logs
pm2 restart kettaneh-website  # Restart app
pm2 stop kettaneh-website     # Stop app
pm2 delete kettaneh-website   # Remove from PM2
pm2 monit                     # Monitor resources
pm2 save                      # Save current process list
```

### Nginx
```bash
sudo systemctl status nginx   # Check status
sudo systemctl restart nginx  # Restart
sudo systemctl reload nginx   # Reload config
sudo nginx -t                 # Test configuration
sudo tail -f /var/log/nginx/error.log   # View error logs
```

### Application Updates
```bash
cd /var/www/kettaneh-website
git pull                      # If using Git
npm install --production      # Update dependencies
npm run build                 # Rebuild
pm2 restart kettaneh-website  # Restart app
```

### Environment Variables
```bash
# Edit environment file
nano .env.production

# After editing, restart app
pm2 restart kettaneh-website
```

### SSL Certificate (Let's Encrypt)
```bash
# Install Certbot
sudo apt install certbot python3-certbot-nginx -y

# Get certificate
sudo certbot --nginx -d www.kettaneh.com.jo -d kettaneh.com.jo

# Auto-renewal (already configured)
sudo certbot renew --dry-run  # Test renewal
```

---

## Troubleshooting Commands

### Check if App is Running
```bash
# Check PM2
pm2 status

# Check if port is in use
sudo netstat -tulpn | grep 3000

# Test local connection
curl http://localhost:3000
```

### View Logs
```bash
# Application logs
pm2 logs kettaneh-website --lines 100

# Nginx logs
sudo tail -f /var/log/nginx/error.log
sudo tail -f /var/log/nginx/access.log

# System logs
sudo journalctl -u nginx -f
```

### Check Disk Space
```bash
df -h                        # Disk usage
du -sh /var/www/kettaneh-website  # App size
```

### Check Memory Usage
```bash
free -h                      # Memory usage
pm2 monit                    # PM2 resource monitor
```

---

## File Locations

```
Application:     /var/www/kettaneh-website
Nginx config:    /etc/nginx/sites-available/kettaneh-website
Nginx enabled:   /etc/nginx/sites-enabled/kettaneh-website
PM2 logs:        /var/log/kettaneh-website/
Nginx logs:      /var/log/nginx/
Environment:     /var/www/kettaneh-website/.env.production
```

---

## Ports

- **3000**: Next.js application (internal)
- **80**: HTTP (Nginx)
- **443**: HTTPS (Nginx)
- **22**: SSH

---

## Environment Variables Reference

```bash
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
NODE_ENV=production
PORT=3000
```

---

## DNS Records (Hostinger hPanel)

```
Type    Name    Value              TTL
A       @       Your Server IP     3600
A       www     Your Server IP     3600
```

---

## Backup Commands

```bash
# Backup application
tar -czf kettaneh-backup-$(date +%Y%m%d).tar.gz /var/www/kettaneh-website

# Backup Nginx config
sudo cp /etc/nginx/sites-available/kettaneh-website /etc/nginx/sites-available/kettaneh-website.backup

# Backup environment variables
cp .env.production .env.production.backup
```

---

## Emergency Restart

```bash
# Restart everything
pm2 restart kettaneh-website
sudo systemctl restart nginx

# If app won't start
pm2 delete kettaneh-website
cd /var/www/kettaneh-website
pm2 start npm --name "kettaneh-website" -- start
pm2 save
```

---

## Performance Monitoring

```bash
# Real-time monitoring
pm2 monit

# Check response time
curl -w "@-" -o /dev/null -s http://localhost:3000 <<'EOF'
     time_namelookup:  %{time_namelookup}\n
        time_connect:  %{time_connect}\n
     time_appconnect:  %{time_appconnect}\n
    time_pretransfer:  %{time_pretransfer}\n
       time_redirect:  %{time_redirect}\n
  time_starttransfer:  %{time_starttransfer}\n
                     ----------\n
          time_total:  %{time_total}\n
EOF
```

---

## Security Checklist

- [ ] Firewall configured (UFW)
- [ ] SSH key authentication enabled
- [ ] SSL certificate installed
- [ ] Environment variables secured
- [ ] Regular backups scheduled
- [ ] PM2 auto-restart enabled
- [ ] Nginx security headers configured

---

## Support Contacts

- **Hostinger Support**: https://www.hostinger.com/contact
- **Hostinger Knowledge Base**: https://support.hostinger.com/
- **Hostinger hPanel**: https://hpanel.hostinger.com/


