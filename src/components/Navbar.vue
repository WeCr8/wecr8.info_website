<!-- src/components/Navbar.vue -->
<script setup>
import { ref } from 'vue'

const dropdownOpen = ref(false)
</script>

<template>
  <header class="bg-[#1b365d] text-white fixed top-0 left-0 right-0 z-50 shadow-md">
    <div class="container mx-auto flex items-center justify-between py-3 px-4 max-w-7xl">
      <!-- Logo -->
      <RouterLink to="/">
        <img src="@/assets/logo.png" alt="WeCr8 Logo" class="h-10 w-auto" />
      </RouterLink>

      <!-- Navigation Links -->
      <nav class="flex items-center space-x-8 text-sm font-medium">
        <RouterLink to="/about" class="hover:underline">About</RouterLink>

        <!-- Dropdown -->
        <div class="relative" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
          <span class="cursor-pointer hover:underline">Services</span>
          <ul
            v-if="dropdownOpen"
            class="absolute top-full mt-2 bg-white text-[#1b365d] shadow-md rounded-md w-48 py-2 z-10"
          >
            <li><RouterLink to="/smart-tooling" class="block px-4 py-2 hover:bg-gray-100">Smart Tooling</RouterLink></li>
            <li><RouterLink to="/automation" class="block px-4 py-2 hover:bg-gray-100">Automation</RouterLink></li>
            <li><RouterLink to="/training" class="block px-4 py-2 hover:bg-gray-100">Training</RouterLink></li>
          </ul>
        </div>

        <RouterLink to="/contact" class="hover:underline">Contact</RouterLink>
        <a href="https://careers.wecr8.fun" class="hover:underline" target="_blank">Careers</a>
      </nav>
    </div>
  </header>
</template>
