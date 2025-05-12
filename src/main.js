// 📦 Import Global Styles & Tailwind Layers
import './assets/main.css'

// ⚙️ Core Vue Imports
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 🛠️ Global Utility Composables (Optional Plugin Registration if needed)
import * as composables from '@/composables'

// 🔥 Create Vue App
const app = createApp(App)

// 🔌 Use Core Plugins
app.use(router)

// 📁 Global Composables Setup (Optional: attach as global properties)
app.config.globalProperties.$composables = composables

// 🏁 Mount the App
app.mount('#app')
