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

// ✅ Google Analytics (GA4) Production-Only Injection
if (config.isProd && config.ga4Id) {
  const gaScript = document.createElement('script')
  gaScript.setAttribute('async', '')
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.ga4Id}`
  document.head.appendChild(gaScript)

  window.dataLayer = window.dataLayer || []
  function gtag() { window.dataLayer.push(arguments) }
  gtag('js', new Date())
  gtag('config', config.ga4Id)
  window.gtag = gtag // Allow tracking in router
}

// 🏁 Mount the App
app.mount('#app')
