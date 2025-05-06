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
  <header class="navbar" role="banner" aria-label="Primary Site Header">
    <div class="navbar-container">
      <!-- 🔗 Desktop Logo (Navigates Home) -->
      <RouterLink to="/" class="logo desktop-only" @click="closeMenu">
        <img src="@/assets/logo.png" alt="WeCr8 Solutions Logo" />
      </RouterLink>

      <!-- 🧭 Desktop Navigation -->
      <nav
        class="nav-links desktop-only"
        role="navigation"
        aria-label="Main Navigation"
      >
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

      <!-- 📱 Mobile Logo Toggle -->
      <div
        class="logo mobile-only"
        role="button"
        aria-label="Toggle Mobile Navigation"
        aria-controls="mobileDrawerMenu"
        :aria-expanded="menuOpen.toString()"
        @click="toggleMenu"
      >
        <img src="@/assets/logo.png" alt="WeCr8 Mobile Menu Toggle" />
      </div>
    </div>

    <!-- 📱 Mobile Drawer Menu -->
    <transition name="slide">
      <aside
        id="mobileDrawerMenu"
        class="drawer mobile-only"
        v-if="menuOpen"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
        tabindex="-1"
      >
        <nav class="drawer-nav" role="navigation">
          <button class="close-btn" @click="closeMenu" aria-label="Close Menu">✕</button>
          <RouterLink to="/" @click="closeMenu" exact-active-class="active">Home</RouterLink>
          <RouterLink to="/about" @click="closeMenu" exact-active-class="active">About</RouterLink>
          <RouterLink to="/services" @click="closeMenu" exact-active-class="active">Services</RouterLink>
          <RouterLink to="/contact" @click="closeMenu" exact-active-class="active">Contact</RouterLink>

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
   WeCr8 Solutions – Navigation Bar (Logo-Based Mobile Toggle)
   ============================================================ */

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
  height: 48px;
  width: auto;
  transition: transform 0.3s ease;
  cursor: pointer;
}
.logo:hover img {
  transform: scale(1.05);
}

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

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1090;
}

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

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
