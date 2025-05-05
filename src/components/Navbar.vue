<!-- src/components/Navbar.vue -->
<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <img src="@/assets/logo.png" alt="WeCr8 Logo" />
      </RouterLink>

      <!-- Navigation Links -->
      <nav class="nav-links">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active">About</RouterLink>
        <RouterLink to="/services" exact-active-class="active">Services</RouterLink>
        <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
      </nav>

      <!-- Search -->
      <div class="search-box">
        <input type="text" placeholder="Search..." />
        <button aria-label="Search">🔍</button>
      </div>
    </div>
  </header>
</template>

<style>
.navbar {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
}

.logo img {
  height: 40px;
  width: auto;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-links a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
}

.nav-links a:hover,
.nav-links .active {
  text-decoration: underline;
  color: var(--color-accent);
}

.search-box {
  display: flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: 4px;
  overflow: hidden;
}

.search-box input {
  padding: 0.4rem 0.6rem;
  border: none;
  outline: none;
  font-size: 0.9rem;
  width: 140px;
}

.search-box button {
  background-color: var(--color-accent);
  color: white;
  border: none;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
