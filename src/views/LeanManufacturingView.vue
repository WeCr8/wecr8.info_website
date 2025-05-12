<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="lean-manufacturing">
    <!-- 🟢 Hero Section -->
    <HeroSection>
      <template #title>Lean Manufacturing | Do More With Less</template>
      <template #subtext>
        Eliminate inefficiency, reduce waste, and unlock capacity with actionable lean strategies tailored to your operations.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Start a Lean Assessment
      </RouterLink>
    </HeroSection>

    <!-- 📦 Lean Capabilities -->
    <BaseSection variant="white" align="center">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-left">
        <ul class="feature-list">
          <li>✔ Value Stream Mapping (VSM) & material flow design</li>
          <li>✔ Rapid Kaizen events for frontline improvement</li>
          <li>✔ 5S systems for workplace organization</li>
          <li>✔ Standard Work documentation + visual systems</li>
          <li>✔ Waste analysis & production flow optimization</li>
        </ul>

        <RouterLink to="/contact" class="cta inline-block mt-4">
          Book Your Consultation
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
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  font-size: 1rem;
  position: relative;
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
