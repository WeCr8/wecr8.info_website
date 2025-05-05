<template>
  <section class="text-center section">
    <h1 class="text-4xl font-bold text-heading mb-4">404 – Page Not Found</h1>
    <p class="text-muted mb-4">Oops! The page you were looking for doesn't exist.</p>
    <RouterLink to="/" class="cta">Return Home</RouterLink>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
