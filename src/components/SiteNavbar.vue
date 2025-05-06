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
        aria-label="Main Navigation"
        role="navigation"
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
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
