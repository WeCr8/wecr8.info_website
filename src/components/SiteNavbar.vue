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

let debounceTimer = null
function performSearch() {
  clearTimeout(debounceTimer)
  debounceTimer = setTimeout(() => {
    const query = searchQuery.value.trim()
    if (query) {
      router.push({ name: 'Search', query: { q: query } })
      searchQuery.value = ''
      closeMenu()
    }
  }, 300)
}
</script>

<template>
  <header class="navbar">
    <div class="navbar-container">
      <!-- 🔗 Logo -->
      <RouterLink to="/" class="logo" @click="closeMenu">
        <img src="@/assets/logo.png" alt="WeCr8 Solutions Logo" />
      </RouterLink>

      <!-- 🧭 Desktop Navigation -->
      <nav class="nav-links desktop-only" aria-label="Main Navigation">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active">About</RouterLink>
        <RouterLink to="/services" exact-active-class="active">Services</RouterLink>
        <RouterLink to="/contact" exact-active-class="active">Contact</RouterLink>
      </nav>

      <!-- 🔍 Desktop Search -->
      <div class="search-box desktop-only" role="search">
        <input
          type="text"
          v-model="searchQuery"
          placeholder="Search..."
          @keyup.enter="performSearch"
          aria-label="Search"
        />
        <button @click="performSearch" aria-label="Submit Search">🔍</button>
      </div>

      <!-- 🍔 Hamburger (Mobile) -->
      <button
        class="hamburger mobile-only"
        @click="toggleMenu"
        aria-label="Toggle Mobile Navigation"
        :aria-expanded="menuOpen.toString()"
      >
        ☰
      </button>
    </div>

    <!-- 📱 Mobile Drawer Menu -->
    <transition name="slide">
      <aside class="drawer mobile-only" v-if="menuOpen" role="dialog" aria-label="Mobile Menu">
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

          <div class="search-box mt-4" role="search">
            <input
              type="text"
              v-model="searchQuery"
              placeholder="Search..."
              @keyup.enter="performSearch"
              aria-label="Search"
            />
            <button @click="performSearch" aria-label="Submit Search">🔍</button>
          </div>
        </nav>
      </aside>
    </transition>

    <!-- 🔲 Dimmed Overlay -->
    <div class="overlay mobile-only" v-if="menuOpen" @click="closeMenu"></div>
  </header>
</template>

<style scoped>
/* ============================================================
   WeCr8 Solutions – Navigation Bar
   ============================================================ */

/* 🧱 Base Structure */
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

/* 🔗 Logo */
.logo img {
  height: 64px;
  width: auto;
  transition: transform 0.3s ease;
}
.logo:hover img {
  transform: scale(1.05);
}

/* 🧭 Nav Links (Desktop) */
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

/* 🔍 Search Input */
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

/* 🍔 Hamburger */
.hamburger {
  display: none;
  background: none;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
}

/* 📱 Drawer Navigation (Mobile) */
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
.drawer-nav .active {
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

/* 🔲 Overlay */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1090;
}

/* 🖥️ Visibility Classes */
.mobile-only {
  display: none;
}
.desktop-only {
  display: flex;
}

/* 📱 Responsive Behavior */
@media (max-width: 768px) {
  .mobile-only {
    display: block;
  }
  .desktop-only {
    display: none;
  }
}

/* 🎬 Transition Animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
