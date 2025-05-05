<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menuOpen = ref(false)

function closeMenu() {
  menuOpen.value = false
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo">
        <img src="@/assets/logo.png" alt="WeCr8 Logo" />
      </RouterLink>

      <!-- Desktop Nav -->
      <nav class="nav-links desktop-only">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active">About</RouterLink>
        <RouterLink to="/services" exact-active-class="active">Services</RouterLink>
        <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
      </nav>

      <!-- Desktop Search -->
      <div class="search-box desktop-only">
        <input type="text" placeholder="Search..." />
        <button aria-label="Search">🔍</button>
      </div>

      <!-- Hamburger (Mobile Only) -->
      <button class="hamburger mobile-only" @click="menuOpen = !menuOpen" aria-label="Toggle Menu">
        ☰
      </button>
    </div>

    <!-- Drawer (Mobile Only) -->
    <div class="drawer mobile-only" :class="{ open: menuOpen }">
      <nav class="drawer-nav">
        <button class="close-btn" @click="closeMenu" aria-label="Close Menu">✕</button>
        <RouterLink to="/" exact-active-class="active" @click="closeMenu">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active" @click="closeMenu">About</RouterLink>
        <RouterLink to="/services" exact-active-class="active" @click="closeMenu"
          >Services</RouterLink
        >
        <RouterLink to="/contact" exact-active-class="active" @click="closeMenu"
          >Contact</RouterLink
        >

        <div class="search-box mt-4">
          <input type="text" placeholder="Search..." />
          <button aria-label="Search">🔍</button>
        </div>
      </nav>
    </div>

    <!-- Mobile Overlay -->
    <div class="overlay mobile-only" v-if="menuOpen" @click="closeMenu"></div>
  </header>
</template>

<style scoped>
.navbar {
  background-color: var(--color-background);
  border-bottom: 1px solid var(--color-border);
  padding: 0.75rem 1.5rem;
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1280px;
  margin: 0 auto;
  flex-wrap: wrap;
}

.logo img {
  height: 60px;
  width: auto;
  transition: transform 0.3s ease;
}
.logo:hover img {
  transform: scale(1.05);
}

/* Nav links (desktop) */
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
}
.nav-links a:hover,
.nav-links .active {
  color: var(--color-accent);
  text-decoration: underline;
}

/* Search box (desktop) */
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

/* Drawer (mobile only) */
.drawer {
  position: fixed;
  top: 0;
  right: -100%;
  width: 75%;
  max-width: 300px;
  height: 100%;
  background-color: var(--color-background);
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.2);
  padding: 1.5rem;
  transition: right 0.3s ease;
  z-index: 1100;
}
.drawer.open {
  right: 0;
}
.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.drawer-nav a {
  color: var(--color-primary);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
}
.drawer-nav a.active,
.drawer-nav a:hover {
  color: var(--color-accent);
  text-decoration: underline;
}
.close-btn {
  align-self: flex-end;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: var(--color-accent);
  cursor: pointer;
}

/* Overlay (mobile) */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1090;
}

/* Visibility Utilities */
.mobile-only {
  display: none;
}
.desktop-only {
  display: flex;
}

@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }
}
</style>
