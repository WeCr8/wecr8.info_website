<template>
  <footer>
    <div class="container text-center">
      <p class="mb-2">
        &copy; {{ new Date().getFullYear() }} WeCr8 Solutions. All rights reserved.
      </p>
      <p>
        <RouterLink to="/privacy">Privacy Policy</RouterLink>
        &nbsp;|&nbsp;
        <RouterLink to="/contact">Contact Us</RouterLink>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
footer {
  background: var(--color-primary);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
}
footer a {
  color: white;
  text-decoration: underline;
  font-weight: 500;
}
footer a:hover {
  color: var(--color-accent);
}
</style>
