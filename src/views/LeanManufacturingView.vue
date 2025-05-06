<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="lean-manufacturing">
    <!-- 🟢 Hero Section -->
    <HeroSection>
      <template #title>Lean Manufacturing Strategies</template>
      <template #subtext>
        Increase efficiency, reduce waste, and unlock the full potential of your operations with our tailored lean manufacturing solutions.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Begin Your Lean Journey
      </RouterLink>
    </HeroSection>

    <!-- 📦 Lean Details -->
    <BaseSection variant="white" align="center">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-left">
        <ul class="feature-list">
          <li>Value Stream Mapping (VSM) & flow analysis</li>
          <li>Kaizen events & continuous improvement plans</li>
          <li>5S workplace organization programs</li>
          <li>Standard Work development & visual management</li>
          <li>Inventory and production waste minimization</li>
        </ul>

        <RouterLink to="/contact" class="cta inline-block mt-4">
          Start a Lean Consultation
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
  content: '✔';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.cta {
  background-color: var(--color-accent);
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
