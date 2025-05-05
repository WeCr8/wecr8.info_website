import { createRouter, createWebHistory } from 'vue-router'

// 📦 Eager-load most visited page
import HomeView from '../views/HomeView.vue'

/**
 * 🗺️ Route Definitions
 * Lazy-load views when possible to improve performance.
 */
const routes = [
  // 🏠 Home
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'WeCr8 Solutions – Home',
      description: 'Smart Tooling, Automation & Training for Modern Manufacturing',
    },
  },

  // 📄 Static Pages
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: {
      title: 'About WeCr8 Solutions',
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

  // 🛠️ Core Services Page
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: {
      title: 'Our Services – WeCr8 Solutions',
    },
  },

  // ⚙️ Service-Specific Detail Views
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

  // 📦 Optional (future) service placeholders
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

  // 🚫 404 Fallback
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
 * Clean URLs using HTML5 history mode.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

/**
 * 🧠 Meta Title Handler
 * Dynamically updates page title after each route change.
 */
router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
