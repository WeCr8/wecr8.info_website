<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header
    class="relative bg-white shadow-md p-4 flex flex-col items-center md:flex-row md:justify-between overflow-hidden"
  >
    <!-- Subtle background logo watermark -->
    <div
      class="absolute inset-0 opacity-5 bg-no-repeat bg-center bg-contain pointer-events-none"
      style="background-image: url('@/assets/logo.png')"
    ></div>

    <!-- Branding -->
    <div class="flex flex-col items-center md:items-start z-10">
      <h1 class="text-2xl font-bold text-gray-800">WeCr8 Solutions</h1>
      <p class="text-sm text-gray-600">Aerospace & Manufacturing Consulting</p>
    </div>

    <!-- Navigation -->
    <nav class="mt-4 md:mt-0 z-10">
      <RouterLink to="/" class="mx-2 text-blue-600 hover:underline">Home</RouterLink>
      <RouterLink to="/about" class="mx-2 text-blue-600 hover:underline">About</RouterLink>
      <RouterLink to="/services" class="mx-2 text-blue-600 hover:underline">Services</RouterLink>
      <RouterLink to="/contact" class="mx-2 text-blue-600 hover:underline">Contact</RouterLink>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>
/* App shell styling */
header {
  position: relative;
  z-index: 10;
  line-height: 1.5;
}

nav a.router-link-exact-active {
  color: #1b365d;
  font-weight: bold;
}

/* Responsive tweaks */
@media (min-width: 1024px) {
  header {
    padding: 1rem 2rem;
  }

  nav {
    font-size: 1rem;
  }
}
</style>
