# SEO & Analytics Setup Guide

## 🚀 Overview

Your WeCr8 Solutions website now includes comprehensive SEO optimization, Google Analytics tracking, and LLM discoverability features. This guide explains how to configure and use these features.

## 📋 What's Included

### ✅ Implemented Features

1. **Google Analytics (GA4)** - Complete tracking with SPA support
2. **SEO Meta Tags** - Comprehensive meta tag management
3. **Structured Data (JSON-LD)** - Rich snippets for search engines and LLMs
4. **robots.txt** - Search engine crawling guidance
5. **sitemap.xml** - Site structure for search engines
6. **OpenGraph & Twitter Cards** - Social media sharing optimization
7. **Meta Composables** - Vue composables for dynamic SEO management

### 🛠️ Files Created/Modified

- `public/robots.txt` - Search engine crawling instructions
- `public/sitemap.xml` - Site structure map
- `src/config/env.js` - Configuration management
- `src/composables/meta/` - SEO management composables
- `src/router/index.js` - Enhanced with structured data
- `index.html` - Comprehensive meta tags

## ⚙️ Configuration Setup

### 1. Environment Variables

Create a `.env` file in your project root with these variables:

```env
# Google Analytics Configuration
VITE_GA4_ID=G-XXXXXXXXXX

# Site Configuration
VITE_SITE_URL=https://wecr8.info
VITE_SITE_NAME=WeCr8 Solutions

# Social Media
VITE_TWITTER_HANDLE=@WeCr8Solutions
VITE_LINKEDIN_URL=https://www.linkedin.com/company/wecr8-solutions

# SEO Verification Codes
VITE_GOOGLE_SITE_VERIFICATION=YOUR_GOOGLE_VERIFICATION_CODE
VITE_BING_SITE_VERIFICATION=YOUR_BING_VERIFICATION_CODE

# Contact Information
VITE_CONTACT_EMAIL=info@wecr8.info
VITE_CONTACT_PHONE=+1-555-0123
```

### 2. Google Analytics Setup

1. **Create GA4 Property**:
   - Go to [Google Analytics](https://analytics.google.com)
   - Create a new GA4 property
   - Get your Measurement ID (starts with G-)

2. **Update Environment Variable**:
   ```env
   VITE_GA4_ID=G-YOUR-MEASUREMENT-ID
   ```

3. **Tracking is Automatic**:
   - Page views are tracked automatically
   - Route changes are tracked in SPA mode
   - Only works in production builds

### 3. Search Console Setup

1. **Google Search Console**:
   - Go to [Google Search Console](https://search.google.com/search-console)
   - Add your property
   - Get verification code and add to `.env`:
   ```env
   VITE_GOOGLE_SITE_VERIFICATION=your-verification-code
   ```

2. **Bing Webmaster Tools**:
   - Go to [Bing Webmaster Tools](https://www.bing.com/webmaster)
   - Add your site
   - Get verification code and add to `.env`:
   ```env
   VITE_BING_SITE_VERIFICATION=your-verification-code
   ```

### 4. Social Media Setup

1. **Update Social URLs**:
   ```env
   VITE_TWITTER_HANDLE=@YourHandle
   VITE_LINKEDIN_URL=https://www.linkedin.com/company/your-company
   ```

2. **Create Social Images**:
   - Create `/public/wecr8-social-preview.png` (1200x630px)
   - Create favicon files: `/public/favicon.ico`, `/public/favicon-32x32.png`, etc.

## 🔧 Using SEO Composables

### Basic Usage

```vue
<script setup>
import { useMeta } from '@/composables/meta/useMeta'

// Set page-specific SEO
const { setTitle, setDescription } = useMeta({
  title: 'Custom Page Title',
  description: 'Custom page description for SEO',
  keywords: 'custom, keywords, for, this, page'
})

// Update dynamically
setTitle('New Title')
setDescription('New description')
</script>
```

### Advanced Usage

```vue
<script setup>
import { useDocumentTitle } from '@/composables/meta/useDocumentTitle'
import { useDocumentDescription } from '@/composables/meta/useDocumentDescription'

const { setTitle } = useDocumentTitle()
const { setDescription } = useDocumentDescription()

// Set title with automatic site name appending
setTitle('About Us')  // Results in: "About Us – WeCr8 Solutions"

// Set description
setDescription('Learn about our manufacturing solutions')
</script>
```

## 📊 Analytics Tracking

### Page Views
- Automatically tracked for all route changes
- Includes page path and title
- Only active in production

### Custom Events (Optional)
```javascript
// Track custom events
if (window.gtag) {
  window.gtag('event', 'contact_form_submit', {
    event_category: 'engagement',
    event_label: 'Contact Form'
  })
}
```

## 🤖 LLM Discoverability

### Structured Data Features
- **Organization markup** - Company information
- **WebSite markup** - Search functionality
- **Service markup** - Business offerings
- **ContactPoint markup** - Contact information

### robots.txt Features
- **LLM-friendly** - Explicitly allows GPTBot, Claude-Web, etc.
- **Respectful crawling** - 1-second delay between requests
- **Comprehensive** - Allows all relevant file types

## 🔍 SEO Best Practices Implemented

### Meta Tags
- **Title optimization** - Unique titles for each page
- **Description optimization** - Compelling descriptions under 160 characters
- **Keywords** - Relevant keywords without stuffing
- **Canonical URLs** - Prevents duplicate content issues

### OpenGraph & Twitter Cards
- **Rich previews** - Better social media sharing
- **Proper image sizing** - 1200x630px for optimal display
- **Structured data** - Enhanced search results

### Technical SEO
- **Mobile-first** - Responsive design considerations
- **Fast loading** - Optimized for Core Web Vitals
- **Semantic HTML** - Proper heading structure and landmarks

## 🚀 Deployment Checklist

### Before Going Live
1. ✅ Set up Google Analytics property
2. ✅ Configure environment variables
3. ✅ Create social media images
4. ✅ Verify robots.txt accessibility
5. ✅ Submit sitemap to search engines
6. ✅ Set up Search Console properties
7. ✅ Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

### After Deployment
1. **Submit Sitemap**:
   - Google Search Console: Add `https://wecr8.info/sitemap.xml`
   - Bing Webmaster Tools: Add `https://wecr8.info/sitemap.xml`

2. **Verify Implementation**:
   - Test social sharing on Facebook, Twitter, LinkedIn
   - Check Google Analytics real-time reports
   - Validate structured data

3. **Monitor Performance**:
   - Track search console for indexing issues
   - Monitor analytics for traffic patterns
   - Check for crawl errors

## 📱 Mobile Optimization

### Features Included
- **Progressive Web App** ready
- **Apple touch icons** for iOS
- **Theme color** for browser UI
- **Viewport optimization** for different devices

## 🔧 Troubleshooting

### Common Issues

1. **Analytics Not Working**:
   - Check `VITE_GA4_ID` in environment
   - Verify production build (`npm run build`)
   - Check browser console for errors

2. **Social Sharing Issues**:
   - Verify image paths are absolute URLs
   - Check image dimensions (1200x630px)
   - Use [Facebook Debugger](https://developers.facebook.com/tools/debug/)

3. **Search Console Errors**:
   - Verify verification codes in environment
   - Check robots.txt accessibility
   - Ensure sitemap is valid XML

### Debug Mode
Enable debug mode in development:
```env
VITE_DEBUG_MODE=true
```

## 📈 Performance Monitoring

### Key Metrics to Track
- **Search Console**: Impressions, clicks, CTR
- **Analytics**: Page views, bounce rate, session duration
- **Core Web Vitals**: LCP, FID, CLS scores
- **Social Metrics**: Shares, engagement from social platforms

---

## 🎯 Next Steps

1. **Content Optimization**: Create high-quality, keyword-rich content
2. **Link Building**: Develop backlink strategy
3. **Local SEO**: Set up Google My Business (if applicable)
4. **Speed Optimization**: Monitor and improve Core Web Vitals
5. **Schema Expansion**: Add more specific structured data as needed

Your website is now fully optimized for search engines, social media, and LLM discovery! 🚀 