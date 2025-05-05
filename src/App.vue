<script setup>
import Navbar from '@/components/SiteNavbar.vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <div id="app" class="font-sans bg-white text-[#1b365d] min-h-screen">
    <Navbar />
    <main class="max-w-7xl mx-auto px-6 py-8">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
/* Additional global styles can go in main.css */
</style>
