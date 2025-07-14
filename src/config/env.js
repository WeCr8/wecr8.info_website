// Environment Configuration
export const config = {
  // Analytics
  ga4Id: import.meta.env.VITE_GA4_ID || '',
  
  // Site Information
  siteUrl: import.meta.env.VITE_SITE_URL || 'https://wecr8.info',
  siteName: import.meta.env.VITE_SITE_NAME || 'WeCr8 Solutions',
  
  // Social Media
  twitterHandle: import.meta.env.VITE_TWITTER_HANDLE || '@WeCr8Solutions',
  linkedinUrl: import.meta.env.VITE_LINKEDIN_URL || 'https://www.linkedin.com/company/wecr8-solutions',
  
  // SEO Verification
  googleSiteVerification: import.meta.env.VITE_GOOGLE_SITE_VERIFICATION || '',
  bingSiteVerification: import.meta.env.VITE_BING_SITE_VERIFICATION || '',
  
  // Contact Information
  contactEmail: import.meta.env.VITE_CONTACT_EMAIL || 'info@wecr8.info',
  contactPhone: import.meta.env.VITE_CONTACT_PHONE || '+1-555-0123',
  
  // Development
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
  debugMode: import.meta.env.VITE_DEBUG_MODE === 'true',
  
  // Security Settings
  enableCSP: import.meta.env.VITE_ENABLE_CSP !== 'false',
  enforceHTTPS: import.meta.env.VITE_ENFORCE_HTTPS !== 'false',
  
  // Default SEO Values
  defaultTitle: 'WeCr8 Solutions – Precision Tooling & CNC Innovation',
  defaultDescription: 'Smart Tooling, Automation, and Training Experts for Modern Manufacturing',
  defaultImage: '/wecr8-social-preview.png',
  defaultKeywords: 'WeCr8, CNC, Zoller, Tool Libraries, CAM, Automation, Manufacturing Training, Aerospace, Precision Manufacturing, CNC Programming, Mastercam, Tooling Solutions',
  
  // Trusted Domains for Security
  trustedDomains: [
    'wecr8.info',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'www.google-analytics.com',
    'www.googletagmanager.com',
    'ssl.google-analytics.com',
    'analytics.google.com',
    'stats.g.doubleclick.net'
  ]
}

// Helper function to get full URL
export const getFullUrl = (path = '') => {
  return `${config.siteUrl}${path}`
}

// Helper function to get social image URL
export const getSocialImageUrl = (image = config.defaultImage) => {
  return image.startsWith('http') ? image : `${config.siteUrl}${image}`
}

// Helper function to check if a domain is trusted
export const isTrustedDomain = (url) => {
  try {
    const domain = new URL(url).hostname
    return config.trustedDomains.includes(domain)
  } catch {
    return false
  }
}

// Generate Content Security Policy
export const generateCSP = () => {
  const csp = {
    'default-src': ["'self'"],
    'script-src': [
      "'self'",
      "'unsafe-inline'",
      "'unsafe-eval'",
      'https://www.googletagmanager.com',
      'https://www.google-analytics.com',
      'https://ssl.google-analytics.com'
    ],
    'style-src': [
      "'self'",
      "'unsafe-inline'",
      'https://fonts.googleapis.com'
    ],
    'font-src': [
      "'self'",
      'https://fonts.gstatic.com'
    ],
    'img-src': [
      "'self'",
      'data:',
      'https:',
      'blob:'
    ],
    'connect-src': [
      "'self'",
      'https://www.google-analytics.com',
      'https://analytics.google.com',
      'https://stats.g.doubleclick.net'
    ],
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-ancestors': ["'none'"],
    'upgrade-insecure-requests': []
  }
  
  return Object.entries(csp)
    .map(([directive, sources]) => `${directive} ${sources.join(' ')}`)
    .join('; ')
}

export default config 