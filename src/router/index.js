import { createRouter, createWebHistory } from 'vue-router'

// 📦 Eagerly import the homepage (since it's visited most)
import HomeView from '../views/HomeView.vue'

/**
 * 🧭 Route Definitions
 * Use lazy-loading (dynamic imports) for routes that are not hit immediately.
 * This keeps the initial load fast and defers parsing for less critical views.
 */
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'WeCr8 Solutions – Home',
      description: 'Smart Tooling, Automation & Training for Modern Manufacturing',
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About WeCr8 Solutions',
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
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: {
      title: 'Contact WeCr8 Solutions',
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

  // 🛠 Future Services (predefined paths, views can be scaffolded later)
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

  // ❌ Catch-All Route: Redirect unknown paths to a NotFound view
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found – WeCr8 Solutions',
    },
  },
]

/**
 * 🚦 Router Setup
 * Uses HTML5 history mode for clean URLs (no hash #).
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/**
 * 🧠 Global Navigation Guard
 * Automatically set the page title based on meta fields.
 */
router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
