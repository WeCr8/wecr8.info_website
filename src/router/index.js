import { createRouter, createWebHistory } from 'vue-router'
import { config, getFullUrl, getSocialImageUrl } from '@/config/env'
import HomeView from '@/views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'WeCr8 Solutions – Home',
      description: 'Smart Tooling, Automation & Training for Modern Manufacturing',
      ogTitle: 'WeCr8 Solutions | Precision Tooling & Automation',
      ogDescription: 'Explore cutting-edge automation and workforce training solutions by WeCr8.',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
    meta: {
      title: 'About WeCr8 Solutions',
      ogTitle: 'About – WeCr8 Solutions',
      ogDescription: 'Learn more about WeCr8 Solutions and our commitment to innovation.',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/ContactView.vue'),
    meta: {
      title: 'Contact WeCr8 Solutions',
      ogTitle: 'Get in Touch – WeCr8 Solutions',
      ogDescription: 'Have a question or project? Let’s talk shop.',
    },
  },
  {
    path: '/privacypolicy',
    name: 'Privacy Policy',
    component: () => import('@/views/PrivacyPolicyView.vue'),
    meta: {
      title: 'Privacy Policy – WeCr8 Solutions',
      ogTitle: 'Privacy Policy – WeCr8 Solutions',
      ogDescription: 'Learn about our privacy practices and commitment to data protection.',
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/SearchView.vue'),
    meta: {
      title: 'Search Results – WeCr8 Solutions',
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('@/views/ServicesView.vue'),
    meta: { title: 'Our Services – WeCr8 Solutions' },
  },
  {
    path: '/services/tool-library',
    name: 'ToolLibrary',
    component: () => import('@/views/ToolLibraryView.vue'),
    meta: { title: 'Tool Library Systems – WeCr8 Solutions' },
  },
  {
    path: '/services/cnc-automation',
    name: 'CNCAutomation',
    component: () => import('@/views/CNCAutomationView.vue'),
    meta: { title: 'CNC Automation – WeCr8 Solutions' },
  },
  {
    path: '/services/training',
    name: 'Training',
    component: () => import('@/views/TrainingView.vue'),
    meta: { title: 'Training & Workforce Development – WeCr8 Solutions' },
  },
  {
    path: '/services/process-optimization',
    name: 'ProcessOptimization',
    component: () => import('@/views/ProcessOptimizationView.vue'),
    meta: { title: 'Process Optimization – WeCr8 Solutions' },
  },
  {
    path: '/services/lean-manufacturing',
    name: 'LeanManufacturing',
    component: () => import('@/views/LeanManufacturingView.vue'),
    meta: { title: 'Lean Manufacturing – WeCr8 Solutions' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
    meta: { title: 'Page Not Found – WeCr8 Solutions' },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

router.afterEach((to) => {
  const defaultTitle = config.defaultTitle
  const defaultDesc = config.defaultDescription
  const gaId = config.ga4Id

  document.title = to.meta?.title || defaultTitle
  document.documentElement.setAttribute('lang', 'en')

  updateMetaTag('description', to.meta?.description || defaultDesc)
  updateMetaTag('author', 'WeCr8 Solutions')
  updateMetaTag('robots', 'index, follow')
  updateMetaTag('viewport', 'width=device-width, initial-scale=1')
  updateMetaTag('theme-color', '#1b365d')

  // Add canonical URL
  updateCanonicalTag(window.location.href)

  updateMetaProperty('og:title', to.meta?.ogTitle || document.title)
  updateMetaProperty('og:description', to.meta?.ogDescription || defaultDesc)
  updateMetaProperty('og:type', 'website')
  updateMetaProperty('og:url', window.location.href)
  updateMetaProperty('og:site_name', config.siteName)
  updateMetaProperty('og:locale', 'en_US')
  updateMetaProperty('og:image', getSocialImageUrl(to.meta?.ogImage))

  updateMetaProperty('twitter:card', 'summary_large_image')
  updateMetaProperty('twitter:title', to.meta?.ogTitle || document.title)
  updateMetaProperty('twitter:description', to.meta?.ogDescription || defaultDesc)
  updateMetaProperty('twitter:site', config.twitterHandle)
  updateMetaProperty('twitter:image', getSocialImageUrl(to.meta?.ogImage))

  // Add structured data (JSON-LD)
  injectStructuredData(to)

  // ✅ GA4 SPA Tracking with Enhanced Security
  if (config.isProd && gaId && window.gtag) {
    try {
      // Privacy-focused page tracking
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: to.fullPath,
        // Privacy settings
        anonymize_ip: true,
        allow_google_signals: false,
        allow_ad_personalization_signals: false
      })
    } catch (error) {
      console.warn('Analytics tracking failed:', error)
    }
  }
})

function injectGA(id) {
  const scriptTag = document.createElement('script')
  scriptTag.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  scriptTag.async = true
  document.head.appendChild(scriptTag)

  const inlineScript = document.createElement('script')
  inlineScript.text = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${id}');
  `
  document.head.appendChild(inlineScript)
}

function updateMetaTag(name, content) {
  let tag = document.querySelector(`meta[name="${name}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('name', name)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function updateMetaProperty(property, content) {
  let tag = document.querySelector(`meta[property="${property}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute('property', property)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

function injectStructuredData(route) {
  // Remove existing structured data
  const existingScript = document.querySelector('script[data-structured-data]')
  if (existingScript) {
    existingScript.remove()
  }

  const baseOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": config.siteName,
    "url": config.siteUrl,
    "description": config.defaultDescription,
    "logo": getFullUrl("/logo.png"),
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "url": getFullUrl("/contact"),
      "email": config.contactEmail
    },
    "sameAs": [
      config.linkedinUrl
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Manufacturing Solutions",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "CNC Automation",
            "description": "Workflow automation and CNC machine efficiency optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Smart Tooling & Zoller Integration",
            "description": "Digital tool libraries, Zoller setup, and CAM alignment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Training & Workforce Development",
            "description": "Educating machinists and programmers with modern manufacturing skills"
          }
        }
      ]
    }
  }

  let structuredData = [baseOrganization]

  // Add page-specific structured data
  if (route.name === 'Home') {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": config.siteName,
      "url": config.siteUrl,
      "description": config.defaultDescription,
      "publisher": {
        "@type": "Organization",
        "name": config.siteName
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": getFullUrl("/search?q={search_term_string}"),
        "query-input": "required name=search_term_string"
      }
    })
  } else if (route.name === 'Services') {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Manufacturing Solutions",
      "description": "Comprehensive manufacturing solutions including CNC automation, tooling, and training",
              "provider": {
          "@type": "Organization",
          "name": config.siteName
        },
      "areaServed": "US",
      "serviceType": "Manufacturing Consulting"
    })
  } else if (route.name === 'About') {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About WeCr8 Solutions",
      "description": "Learn about WeCr8 Solutions and our commitment to manufacturing innovation",
      "url": getFullUrl("/about"),
      "mainEntity": {
        "@type": "Organization",
        "name": config.siteName
      }
    })
  } else if (route.name === 'Contact') {
    structuredData.push({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact WeCr8 Solutions",
      "description": "Get in touch with WeCr8 Solutions for your manufacturing needs",
      "url": getFullUrl("/contact")
    })
  }

  // Create and inject the structured data script
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.setAttribute('data-structured-data', 'true')
  script.textContent = JSON.stringify(structuredData)
  document.head.appendChild(script)
}

function updateCanonicalTag(url) {
  let tag = document.querySelector('link[rel="canonical"]')
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', 'canonical')
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', url)
}

export default router
export { routes, updateMetaTag, updateMetaProperty }
