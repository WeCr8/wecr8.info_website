// 📦 Import Global Styles & Tailwind Layers
import './assets/main.css'

// ⚙️ Core Vue Imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { config } from '@/config/env'

// 🛠️ Global Utility Composables (Optional Plugin Registration if needed)
import * as composables from '@/composables'

// 🔥 Create Vue App
const app = createApp(App)

// 🔌 Use Core Plugins
app.use(router)

// 📁 Global Composables Setup (Optional: attach as global properties)
app.config.globalProperties.$composables = composables

// 🔐 Security: Enforce HTTPS in production
if (config.isProd && config.enforceHTTPS && location.protocol !== 'https:') {
  location.replace(location.href.replace(/^http:/, 'https:'))
}

// ✅ Google Analytics (GA4) Production-Only Injection with Enhanced Security
if (config.isProd && config.ga4Id) {
  try {
    // Create script element with security attributes
    const gaScript = document.createElement('script')
    gaScript.setAttribute('async', 'true')
    gaScript.setAttribute('defer', 'true')
    gaScript.setAttribute('crossorigin', 'anonymous')
    gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.ga4Id}`
    
    // Add error handling
    gaScript.onerror = (error) => {
      console.warn('Google Analytics failed to load:', error)
    }
    
    // Add to document head
    document.head.appendChild(gaScript)

    // Initialize dataLayer and gtag function
    window.dataLayer = window.dataLayer || []
    function gtag() { 
      window.dataLayer.push(arguments) 
    }
    
    // Configure analytics with privacy-focused settings
    gtag('js', new Date())
    gtag('config', config.ga4Id, {
      // Privacy settings
      anonymize_ip: true,
      allow_google_signals: false,
      allow_ad_personalization_signals: false,
      // Performance settings
      send_page_view: false // We'll handle this manually in the router
    })
    
    // Make gtag available globally for tracking
    window.gtag = gtag
    
    // Track initial page load
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      page_path: window.location.pathname
    })
    
  } catch (error) {
    console.warn('Failed to initialize Google Analytics:', error)
  }
}

// 🔒 Security: Content Security Policy Runtime Enforcement
if (config.enableCSP && config.isProd) {
  // Add runtime CSP violation reporting
  document.addEventListener('securitypolicyviolation', (event) => {
    console.warn('CSP Violation:', {
      blocked: event.blockedURI,
      directive: event.violatedDirective,
      original: event.originalPolicy
    })
    
    // Optionally report to analytics
    if (window.gtag) {
      window.gtag('event', 'security_violation', {
        event_category: 'security',
        event_label: event.violatedDirective,
        custom_parameter_blocked_uri: event.blockedURI
      })
    }
  })
}

// 🚀 Error Handling for Application Load
app.config.errorHandler = (error, instance, info) => {
  console.error('Vue Application Error:', error, info)
  
  // Report to analytics if available
  if (window.gtag) {
    window.gtag('event', 'exception', {
      description: error.message,
      fatal: false
    })
  }
}

// 🏁 Mount the App
app.mount('#app')
