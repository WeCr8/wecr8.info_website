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
  
  // Default SEO Values
  defaultTitle: 'WeCr8 Solutions – Precision Tooling & CNC Innovation',
  defaultDescription: 'Smart Tooling, Automation, and Training Experts for Modern Manufacturing',
  defaultImage: '/wecr8-social-preview.png',
  defaultKeywords: 'WeCr8, CNC, Zoller, Tool Libraries, CAM, Automation, Manufacturing Training, Aerospace, Precision Manufacturing, CNC Programming, Mastercam, Tooling Solutions'
}

// Helper function to get full URL
export const getFullUrl = (path = '') => {
  return `${config.siteUrl}${path}`
}

// Helper function to get social image URL
export const getSocialImageUrl = (image = config.defaultImage) => {
  return image.startsWith('http') ? image : `${config.siteUrl}${image}`
}

export default config 