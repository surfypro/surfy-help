# Deployment Guide - Surfy Help English

This guide explains how to deploy the English version of Surfy Help to various hosting platforms.

## 🚀 Quick Start

### 1. Build the Site
```bash
cd docs-en
npm install
npm run build
```

### 2. Test Locally
```bash
npm run serve
```

## 🌐 Deployment Options

### GitHub Pages (Recommended)

#### Automatic Deployment
1. **Push to GitHub** - Ensure your repository is on GitHub
2. **Enable GitHub Pages** - Go to Settings > Pages
3. **Set Source** - Select "GitHub Actions" as source
4. **Create Workflow** - Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: |
          cd docs-en
          npm install

      - name: Build
        run: |
          cd docs-en
          npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./docs-en/build
          cname: help.surfy.pro
```

#### Manual Deployment
```bash
cd docs-en
npm run deploy
```

### Netlify

1. **Connect Repository** - Link your GitHub repository to Netlify
2. **Build Settings**:
   - **Build command**: `cd docs-en && npm install && npm run build`
   - **Publish directory**: `docs-en/build`
   - **Base directory**: `docs-en`
3. **Environment Variables** (if needed):
   - `NODE_VERSION`: `18`
4. **Deploy** - Netlify will automatically build and deploy

### Vercel

1. **Import Project** - Import your GitHub repository to Vercel
2. **Framework Preset** - Select "Other"
3. **Build Settings**:
   - **Build Command**: `cd docs-en && npm install && npm run build`
   - **Output Directory**: `docs-en/build`
   - **Install Command**: `npm install`
4. **Deploy** - Vercel will automatically build and deploy

### Traditional Web Hosting

1. **Build the Site**:
   ```bash
   cd docs-en
   npm run build
   ```

2. **Upload Files** - Upload the contents of `docs-en/build/` to your web server

3. **Configure Server** - Ensure your server serves `index.html` for all routes

## 🔧 Configuration

### Base URL Configuration

The English site is configured with base URL `/en/`:

```javascript
// docusaurus.config.js
baseUrl: '/en/',
```

### Custom Domain

To use a custom domain (e.g., `help-en.surfy.pro`):

1. **Update Configuration**:
   ```javascript
   // docusaurus.config.js
   url: 'https://help-en.surfy.pro',
   baseUrl: '/',
   ```

2. **DNS Configuration** - Point your domain to your hosting provider

3. **SSL Certificate** - Ensure HTTPS is enabled

### Environment-Specific Configs

Create environment-specific configurations:

```javascript
// docusaurus.config.js
const isDev = process.env.NODE_ENV === 'development';

const config = {
  url: isDev ? 'http://localhost:3000' : 'https://help.surfy.pro',
  baseUrl: isDev ? '/' : '/en/',
  // ... other config
};
```

## 📱 Mobile and SEO

### Mobile Optimization
- Responsive design is built-in with Docusaurus
- Test on various devices and screen sizes
- Ensure touch targets are appropriately sized

### SEO Configuration
```javascript
// docusaurus.config.js
themeConfig: {
  metadata: [
    {name: 'keywords', content: 'surfy, help, documentation, workspace management'},
    {name: 'description', content: 'Complete guide to Surfy features in English'},
  ],
},
```

## 🔍 Analytics and Monitoring

### Google Analytics
```javascript
// docusaurus.config.js
plugins: [
  [
    '@docusaurus/plugin-google-analytics',
    {
      trackingID: 'GA_TRACKING_ID',
    },
  ],
],
```

### Performance Monitoring
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up uptime monitoring

## 🚨 Troubleshooting

### Common Issues

#### Build Failures
```bash
# Clear cache and reinstall
npm run clear
rm -rf node_modules
npm install
npm run build
```

#### Navigation Issues
- Verify `sidebars.js` configuration
- Check file paths and names
- Ensure frontmatter is correct

#### Styling Problems
- Verify CSS imports
- Check for conflicting styles
- Use browser dev tools to debug

### Debug Mode
```bash
# Enable debug logging
DEBUG=* npm start
```

## 📊 Post-Deployment

### Verification Checklist
- [ ] Site loads correctly
- [ ] Navigation works properly
- [ ] Search functionality works
- [ ] All links are functional
- [ ] Mobile responsiveness
- [ ] Performance is acceptable
- [ ] SEO elements are present

### Monitoring
- Set up error tracking (e.g., Sentry)
- Monitor page load times
- Track user engagement metrics
- Set up uptime alerts

## 🔄 Updates and Maintenance

### Regular Updates
1. **Pull Latest Changes** - Update from main repository
2. **Rebuild and Deploy** - Run build and deployment process
3. **Test Functionality** - Verify everything works correctly
4. **Monitor Performance** - Check for any issues

### Content Updates
- Add new tutorials as `.en.md` files
- Update entity documentation
- Maintain translation consistency
- Keep navigation structure updated

## 📞 Support

For deployment issues:
- Check Docusaurus documentation
- Review hosting provider documentation
- Verify configuration files
- Test locally before deploying
