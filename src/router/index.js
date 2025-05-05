import { createRouter, createWebHistory } from 'vue-router'

// Static Imports (used frequently or needed immediately)
import HomeView from '../views/HomeView.vue'

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
    component: () => import('../views/AboutView.vue'), // Lazy-loaded
    meta: {
      title: 'About WeCr8 Solutions',
    },
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'), // Lazy-loaded
    meta: {
      title: 'Our Services – WeCr8 Solutions',
    },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'), // Lazy-loaded
    meta: {
      title: 'Contact WeCr8 Solutions',
    },
  },
  // ❗Optional: 404 catch-all route (Uncomment if you want a NotFound page)
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('../views/NotFound.vue'),
  //   meta: {
  //     title: 'Page Not Found – WeCr8',
  //   },
  // },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

// 🚀 Optional: Automatically update document title based on meta
router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title
  }
})

export default router
