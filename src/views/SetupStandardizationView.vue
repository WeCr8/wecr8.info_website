<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="setup-standardization">
    <!-- 🧱 Hero Section -->
    <HeroSection>
      <template #title>Setup Standardization</template>
      <template #subtext>
        Improve repeatability and reduce setup times by establishing structured setup documentation,
        fixturing standards, and digital workflows.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Standardize Your Setups
      </RouterLink>
    </HeroSection>

    <!-- 🛠 Setup Standardization Details -->
    <BaseSection variant="white" align="center">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-left">
        <ul class="feature-list">
          <li>Universal setup sheets for machinists</li>
          <li>Visual job documentation & QR access</li>
          <li>Workholding and tooling reference guides</li>
          <li>Digital workflows for repeat jobs</li>
          <li>Training programs for consistent execution</li>
        </ul>

        <RouterLink to="/contact" class="cta mt-4 inline-block">
          Request Standardization Plan
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
