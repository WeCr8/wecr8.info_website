import { createRouter, createWebHistory } from 'vue-router'
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
    path: '/PrivacyPolicyView',
    name: 'PrivacyPolicy',
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
  const defaultTitle = 'WeCr8 Solutions'
  const defaultDesc = 'Smart Tooling, Automation, and Training Experts.'
  const gaId = import.meta.env.VITE_GA4_ID

  document.title = to.meta?.title || defaultTitle
  document.documentElement.setAttribute('lang', 'en')

  updateMetaTag('description', to.meta?.description || defaultDesc)
  updateMetaTag('author', 'WeCr8 Solutions')
  updateMetaTag('robots', 'index, follow')
  updateMetaTag('viewport', 'width=device-width, initial-scale=1')
  updateMetaTag('theme-color', '#1b365d')

  updateMetaProperty('og:title', to.meta?.ogTitle || document.title)
  updateMetaProperty('og:description', to.meta?.ogDescription || defaultDesc)
  updateMetaProperty('og:type', 'website')
  updateMetaProperty('og:url', window.location.href)

  updateMetaProperty('twitter:card', 'summary_large_image')
  updateMetaProperty('twitter:title', to.meta?.ogTitle || document.title)
  updateMetaProperty('twitter:description', to.meta?.ogDescription || defaultDesc)

  // ✅ GA4 SPA Tracking
  if (import.meta.env.PROD && gaId) {
    if (!window.gtag) injectGA(gaId)
    else window.gtag('config', gaId, { page_path: to.fullPath })
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

export default router
export { routes, updateMetaTag, updateMetaProperty }
