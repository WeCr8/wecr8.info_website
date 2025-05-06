<script setup>
import { RouterLink } from 'vue-router'
import CardGrid from '@/components/CardGrid.vue'
import BaseSection from '@/components/BaseSection.vue'

const serviceCards = [
  {
    title: 'Smart Tooling & Zoller Integration',
    description: 'Digital tool libraries, Zoller setup, and CAM alignment.',
    link: '/services/tool-library',
    cta: 'Explore Tooling',
  },
  {
    title: 'Automation & CNC Optimization',
    description: 'Workflow automation and CNC machine efficiency tuning.',
    link: '/services/cnc-automation',
    cta: 'See Automation',
  },
  {
    title: 'Training & Workforce Development',
    description: 'Educating machinists and programmers with modern skills.',
    link: '/services/training',
    cta: 'View Training',
  },
]
</script>

<template>
  <div class="services">
    <!-- 🔷 Spotlight Section -->
    <BaseSection variant="blue" align="center" padding="xl">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">
        Built for Modern Manufacturing
      </h1>
      <p class="text-lg text-white/90 max-w-2xl mx-auto mb-6">
        Our services drive real-world results across aerospace, energy, and advanced
        machining—empowering teams through smarter tooling, connected automation, and targeted
        education.
      </p>
      <RouterLink
        to="/contact"
        class="cta"
        aria-label="Request a consultation with WeCr8 Solutions"
      >
        Request a Free Consultation
      </RouterLink>
    </BaseSection>

    <!-- 🛠️ Services Grid -->
    <BaseSection variant="white">
      <CardGrid :cards="serviceCards" />
    </BaseSection>
  </div>
</template>

<style scoped>
.cta {
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  text-decoration: none;
}
.cta:hover,
.cta:focus {
  background-color: #d9481f;
  outline: none;
}
</style>
