<script setup>
// 🧠 Core App Imports
import { RouterView } from 'vue-router'

// 🌐 Global Layout Components
import SkipLink from '@/components/SkipLink.vue'
import SiteNavbar from '@/components/SiteNavbar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
import PageTransition from '@/components/PageTransition.vue'
</script>

<template>
  <div id="app" class="font-sans bg-white text-[#1b365d] min-h-screen flex flex-col">
    <!-- ♿ Accessibility First: Skip to Main -->
    <SkipLink />

    <!-- 🔝 Global Navigation -->
    <SiteNavbar />

    <!-- 📄 Main Page Content with Animated Transitions -->
    <main id="main-content" class="flex-grow max-w-7xl mx-auto px-6 py-8">
      <PageTransition>
        <RouterView />
      </PageTransition>
    </main>

    <!-- 🔚 Consistent Footer -->
    <SiteFooter />
  </div>
</template>

<style scoped>
/* ✅ Global styles belong in main.css or tailwind.config */
</style>
