import { createRouter, createWebHistory } from 'vue-router'

// 🏠 Eager-load Home
import HomeView from '../views/HomeView.vue'

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
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About WeCr8 Solutions',
      ogTitle: 'About – WeCr8 Solutions',
      ogDescription: 'Learn more about WeCr8 Solutions and our commitment to innovation.',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact WeCr8 Solutions',
      requiresConsent: true, // 👈 Optional: restrict if no Cookiebot consent
    },
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/SearchView.vue'),
    meta: {
      title: 'Search Results – WeCr8 Solutions',
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Our Services – WeCr8 Solutions',
    },
  },
  {
    path: '/services/tool-library',
    name: 'ToolLibrary',
    component: () => import('../views/ToolLibraryView.vue'),
    meta: {
      title: 'Tool Library Systems – WeCr8 Solutions',
    },
  },
  {
    path: '/services/cnc-automation',
    name: 'CNCAutomation',
    component: () => import('../views/CNCAutomationView.vue'),
    meta: {
      title: 'CNC Automation – WeCr8 Solutions',
    },
  },
  {
    path: '/services/training',
    name: 'Training',
    component: () => import('../views/TrainingView.vue'),
    meta: {
      title: 'Training & Workforce Development – WeCr8 Solutions',
    },
  },
  {
    path: '/services/process-optimization',
    name: 'ProcessOptimization',
    component: () => import('../views/ProcessOptimizationView.vue'),
    meta: {
      title: 'Process Optimization – WeCr8 Solutions',
    },
  },
  {
    path: '/services/lean-manufacturing',
    name: 'LeanManufacturing',
    component: () => import('../views/LeanManufacturingView.vue'),
    meta: {
      title: 'Lean Manufacturing – WeCr8 Solutions',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found – WeCr8 Solutions',
    },
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

// 🧠 Post-Navigation Meta Tag Handling + Cookiebot Event
router.afterEach((to) => {
  const title = to.meta?.title || 'WeCr8 Solutions'
  document.title = title

  updateMetaTag('description', to.meta?.description || 'Smart Tooling and Automation Experts')
  updateMetaProperty('og:title', to.meta?.ogTitle || title)
  updateMetaProperty('og:description', to.meta?.ogDescription || '')
  updateMetaProperty('og:url', window.location.href)

  // 🔁 Cookiebot stats event (if allowed)
  if (window?.Cookiebot?.consent?.statistics) {
    if (typeof window.uc_event === 'function') {
      window.uc_event('page_view', { page: to.fullPath })
    }
  }
})

// 🔐 Route Guard for Consent-Sensitive Routes
router.beforeEach((to, from, next) => {
  if (to.meta.requiresConsent && !window?.Cookiebot?.consent?.statistics) {
    alert('You need to accept analytics cookies to use this feature.')
    return next(false)
  }
  next()
})

// 🔧 Meta Tag Helpers
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

export default router
