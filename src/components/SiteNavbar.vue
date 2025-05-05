<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const menuOpen = ref(false)
const searchQuery = ref('')
const router = useRouter()

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}
function performSearch() {
  if (searchQuery.value.trim()) {
    router.push({ name: 'search', query: { q: searchQuery.value.trim() } })
    searchQuery.value = ''
    closeMenu()
  }
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- Logo -->
      <RouterLink to="/" class="logo" @click="closeMenu">
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
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          @keyup.enter="performSearch"
        />
        <button @click="performSearch" aria-label="Search">🔍</button>
      </div>

      <!-- Hamburger (Mobile) -->
      <button class="hamburger mobile-only" @click="toggleMenu" aria-label="Toggle Menu">☰</button>
    </div>

    <!-- Drawer (Mobile) -->
    <transition name="slide">
      <div class="drawer mobile-only" v-if="menuOpen">
        <nav class="drawer-nav">
          <button class="close-btn" @click="closeMenu" aria-label="Close Menu">✕</button>
          <RouterLink to="/" @click="closeMenu" exact-active-class="active">Home</RouterLink>
          <RouterLink to="/about" @click="closeMenu" exact-active-class="active">About</RouterLink>
          <RouterLink to="/services" @click="closeMenu" exact-active-class="active"
            >Services</RouterLink
          >
          <RouterLink to="/contact" @click="closeMenu" exact-active-class="active"
            >Contact</RouterLink
          >

          <div class="search-box mt-4">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search..."
              @keyup.enter="performSearch"
            />
            <button @click="performSearch" aria-label="Search">🔍</button>
          </div>
        </nav>
      </div>
    </transition>

    <!-- Overlay -->
    <div class="overlay mobile-only" v-if="menuOpen" @click="closeMenu"></div>
  </header>
</template>

<style scoped>
/* Base Navbar */
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

/* Logo */
.logo img {
  height: 64px;
  width: auto;
  transition: transform 0.3s ease;
}
.logo:hover img {
  transform: scale(1.05);
}

/* Desktop Nav */
.nav-links {
  display: flex;
  gap: 1.5rem;
}
.nav-links a {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}
.nav-links a:hover,
.nav-links .active {
  color: var(--color-accent);
  text-decoration: underline;
}

/* Search Box */
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
  font-size: 0.95rem;
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

/* Hamburger */
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
}

/* Drawer */
.drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  max-width: 300px;
  height: 100%;
  background: var(--color-background);
  box-shadow: -2px 0 6px rgba(0, 0, 0, 0.25);
  padding: 1.5rem;
  z-index: 1100;
}
.drawer-nav {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.drawer-nav a {
  color: var(--color-primary);
  font-weight: 600;
  text-decoration: none;
}
.drawer-nav a:hover,
.drawer-nav a.active {
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

/* Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1090;
}

/* Visibility */
.mobile-only {
  display: none;
}
.desktop-only {
  display: flex;
}

/* Responsive */
@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }
}

/* Transition */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
