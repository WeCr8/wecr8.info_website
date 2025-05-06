<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="custom-consulting">
    <!-- 🔵 Unified Hero Section -->
    <HeroSection>
      <template #title>Custom Consulting Services</template>
      <template #subtext>
        Get tailored solutions for your shop’s toughest challenges — from workflow inefficiencies to full production system overhauls.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Schedule a Free Consultation
      </RouterLink>
    </HeroSection>

    <!-- 📊 Consulting Details -->
    <BaseSection variant="white" align="center">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-left">
        <ul class="feature-list">
          <li>On-site evaluations of machining and programming processes</li>
          <li>Design and implementation of smart tooling strategies</li>
          <li>CAM and post processor adjustments for better output</li>
          <li>Lean documentation, setup sheets, and SOP creation</li>
          <li>Full integration support for Zoller, Mastercam, and ERP systems</li>
        </ul>

        <RouterLink to="/contact" class="cta inline-block mt-4">
          Begin Your Consulting Project
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
