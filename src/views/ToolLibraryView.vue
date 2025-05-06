<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="tool-library">
    <!-- 🔷 Hero Section -->
    <HeroSection>
      <template #title>Smart Tooling & Zoller Integration</template>
      <template #subtext>
        Bring structure to chaos with standardized tool libraries and seamless Zoller integration —
        ensuring every tool is measured, documented, and ready for production.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Get Started with Smart Tooling
      </RouterLink>
    </HeroSection>

    <!-- 📦 Features Section -->
    <BaseSection variant="white" align="center">
      <div class="content-box max-w-3xl mx-auto">
        <ul class="feature-list text-left">
          <li>Centralized, structured tool databases</li>
          <li>Seamless integration with Zoller presetters</li>
          <li>CAM compatibility: Mastercam, Fusion, Siemens NX</li>
          <li>Complete metadata: Tool ID, Holder, Projection, Description</li>
          <li>Automated tool card generation and system exports</li>
        </ul>

        <RouterLink
          class="cta mt-4 inline-block"
          to="/contact"
          aria-label="Start Tool Library Consultation"
        >
          Request a Consultation
        </RouterLink>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
.feature-list {
  list-style: none;
  padding-left: 0;
  margin-bottom: 2rem;
}
.feature-list li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  color: var(--color-text);
}
.feature-list li::before {
  content: "✔";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.cta {
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-decoration: none;
}
.cta:hover {
  background-color: #d9481f;
}
</style>
