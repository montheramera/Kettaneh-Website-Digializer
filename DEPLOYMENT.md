# Kettaneh Website Deployment Guide

## Overview
This guide will help you deploy the Kettaneh website to production at https://www.kettaneh.com.jo/

## Prerequisites
- Node.js 18+ installed
- Access to the production server
- Domain configured to point to your server

## Environment Variables
Create a `.env.production` file with the following variables:

```bash
NEXT_PUBLIC_STRAPI_BASE_URL=https://admin.kettaneh.com.jo
NEXT_PUBLIC_MAIN_SITE=https://www.kettaneh.com.jo
```

## Deployment Steps

### 1. Build the Project
```bash
npm run build
```

### 2. Test the Build Locally
```bash
npm start
```

### 3. Deploy Options

#### Option A: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_STRAPI_BASE_URL`: `https://admin.kettaneh.com.jo`
   - `NEXT_PUBLIC_MAIN_SITE`: `https://www.kettaneh.com.jo`
3. Deploy automatically on push to main branch

#### Option B: Traditional Server Deployment
1. Upload the `.next` folder and `package.json` to your server
2. Install dependencies: `npm install --production`
3. Start the application: `npm start`
4. Configure reverse proxy (Nginx/Apache) to serve the application

#### Option C: Docker Deployment
1. Create a Dockerfile:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY .next ./.next
COPY public ./public
EXPOSE 3000
CMD ["npm", "start"]
```

2. Build and run:
```bash
docker build -t kettaneh-website .
docker run -p 3000:3000 kettaneh-website
```

## Post-Deployment Checklist

### 1. Verify Environment Variables
- [ ] Strapi API is accessible
- [ ] Images are loading correctly
- [ ] Blog content is displaying properly

### 2. Test Key Features
- [ ] Homepage loads correctly
- [ ] Blog listing page works
- [ ] Individual blog pages load with correct content
- [ ] Categories and related articles display
- [ ] Images load from Cloudinary
- [ ] Mobile responsiveness

### 3. Performance Optimization
- [ ] Enable gzip compression
- [ ] Set up CDN for static assets
- [ ] Configure caching headers
- [ ] Optimize images

### 4. SEO Configuration
- [ ] Verify meta tags
- [ ] Check sitemap.xml
- [ ] Test structured data
- [ ] Verify canonical URLs

## Troubleshooting

### Common Issues
1. **Images not loading**: Check `next.config.mjs` domains configuration
2. **API errors**: Verify Strapi permissions and CORS settings
3. **Build errors**: Check for TypeScript errors and missing dependencies

### Debug Mode
To enable debug logging, set:
```bash
NODE_ENV=development
```

## Monitoring
- Set up error tracking (Sentry, LogRocket)
- Monitor performance (Google PageSpeed, GTmetrix)
- Track analytics (Google Analytics)

## Security Considerations
- Enable HTTPS
- Set up security headers
- Regular dependency updates
- Environment variable protection

## Contact
For deployment support, contact the development team.






















