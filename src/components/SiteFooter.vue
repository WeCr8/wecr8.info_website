<template>
  <footer class="footer">
    <div class="container">
      <p class="mb-2 text-sm">
        &copy; {{ new Date().getFullYear() }} WeCr8 Solutions. All rights reserved.
      </p>
      <p class="text-sm">
        <RouterLink to="/privacy" class="footer-link">Privacy Policy</RouterLink>
        <span class="mx-2 text-muted">|</span>
        <RouterLink to="/contact" class="footer-link">Contact Us</RouterLink>
      </p>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.footer {
  background: var(--color-primary);
  color: white;
  padding: 2rem 1rem;
  text-align: center;
}

.footer-link {
  color: white;
  text-decoration: underline;
  font-weight: 500;
  transition: color 0.3s ease;
}

.footer-link:hover,
.footer-link:focus {
  color: var(--color-accent);
}

.text-muted {
  color: rgba(255, 255, 255, 0.6);
}
</style>
