import { createRouter, createWebHistory } from 'vue-router'

// 🏠 Eager-load Home
import HomeView from '../views/HomeView.vue'

/**
 * Define all app routes here with dynamic meta for SEO & social sharing.
 */
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
      ogImage: '/images/og-default.jpg',
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
      ogImage: '/images/og-about.jpg',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact WeCr8 Solutions',
      ogTitle: 'Get in Touch – WeCr8 Solutions',
      ogDescription: 'Have a question or project? Let’s talk shop.',
      ogImage: '/images/og-contact.jpg',
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
  // 🧰 Services
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: { title: 'Our Services – WeCr8 Solutions' },
  },
  {
    path: '/services/tool-library',
    name: 'ToolLibrary',
    component: () => import('../views/ToolLibraryView.vue'),
    meta: { title: 'Tool Library Systems – WeCr8 Solutions' },
  },
  {
    path: '/services/cnc-automation',
    name: 'CNCAutomation',
    component: () => import('../views/CNCAutomationView.vue'),
    meta: { title: 'CNC Automation – WeCr8 Solutions' },
  },
  {
    path: '/services/training',
    name: 'Training',
    component: () => import('../views/TrainingView.vue'),
    meta: { title: 'Training & Workforce Development – WeCr8 Solutions' },
  },
  {
    path: '/services/process-optimization',
    name: 'ProcessOptimization',
    component: () => import('../views/ProcessOptimizationView.vue'),
    meta: { title: 'Process Optimization – WeCr8 Solutions' },
  },
  {
    path: '/services/lean-manufacturing',
    name: 'LeanManufacturing',
    component: () => import('../views/LeanManufacturingView.vue'),
    meta: { title: 'Lean Manufacturing – WeCr8 Solutions' },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: { title: 'Page Not Found – WeCr8 Solutions' },
  },
]

/**
 * Vue Router instance
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  },
})

/**
 * Global SEO & accessibility meta tag injection on route change
 */
router.afterEach((to) => {
  const defaultTitle = 'WeCr8 Solutions'
  const defaultDesc = 'Smart Tooling, Automation, and Training Experts.'
  const defaultImage = '/images/og-default.jpg'

  document.title = to.meta?.title || defaultTitle
  document.documentElement.setAttribute('lang', 'en')

  updateMetaTag('description', to.meta?.description || defaultDesc)
  updateMetaTag('author', 'WeCr8 Solutions')
  updateMetaTag('robots', 'index, follow')
  updateMetaTag('viewport', 'width=device-width, initial-scale=1')
  updateMetaTag('theme-color', '#1b365d')

  updateMetaProperty('og:title', to.meta?.ogTitle || document.title)
  updateMetaProperty('og:description', to.meta?.ogDescription || defaultDesc)
  updateMetaProperty('og:image', to.meta?.ogImage || defaultImage)
  updateMetaProperty('og:type', 'website')
  updateMetaProperty('og:url', window.location.href)

  updateMetaProperty('twitter:card', 'summary_large_image')
  updateMetaProperty('twitter:title', to.meta?.ogTitle || document.title)
  updateMetaProperty('twitter:description', to.meta?.ogDescription || defaultDesc)
  updateMetaProperty('twitter:image', to.meta?.ogImage || defaultImage)
})

/**
 * Helpers for meta injection
 */
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
export { routes, updateMetaTag, updateMetaProperty }
