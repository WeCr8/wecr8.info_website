<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="training">
    <!-- 🔷 Hero Section -->
    <HeroSection>
      <template #title>Training & Workforce Development</template>
      <template #subtext>
        We empower machinists and programmers by teaching modern CNC, CAM, and smart manufacturing
        principles through practical, hands-on training.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Request a Training Program
      </RouterLink>
    </HeroSection>

    <!-- 🧠 Training Topics -->
    <BaseSection variant="light" align="center">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-left">
        <ul class="feature-list">
          <li>Modern CNC machine operation & 5-axis theory</li>
          <li>Tool library building & Zoller system instruction</li>
          <li>CAM programming using Mastercam & Fusion</li>
          <li>Blueprint reading, GD&T, and measurement skills</li>
          <li>Custom training for job shops & OEMs</li>
        </ul>

        <RouterLink to="/contact" class="cta mt-4 inline-block">
          Start Your Team’s Training
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
