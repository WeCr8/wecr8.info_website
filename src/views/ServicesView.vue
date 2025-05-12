<script setup>
import { RouterLink } from 'vue-router'
import CardGrid from '@/components/CardGrid.vue'
import BaseSection from '@/components/BaseSection.vue'

const serviceCards = [
  {
    title: 'Smart Tooling & Zoller Integration',
    description: 'Digital tool libraries, Zoller setup, and CAM alignment. Streamline presetting and ensure repeatability.',
    link: '/services/tool-library',
    cta: 'Explore Tooling',
  },
  {
    title: 'Automation & CNC Optimization',
    description: 'DNC systems, machine readiness tracking, ERP integration—real automation that eliminates delay.',
    link: '/services/cnc-automation',
    cta: 'Optimize CNC',
  },
  {
    title: 'Training & Workforce Development',
    description: 'Upskill your team with lean workflows, hands-on instruction, and repeatable operator systems.',
    link: '/services/training',
    cta: 'View Training',
  },
]
</script>

<template>
  <div class="services">
    <!-- 🔷 Hero Section -->
    <BaseSection variant="blue" align="center" padding="xl">
      <template #default>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">
          Solutions Engineered for the Shop Floor
        </h1>
        <p class="text-lg text-white/90 max-w-2xl mx-auto mb-6">
          WeCr8 Solutions delivers tooling, automation, and training services that align with real production needs—not just theory.
        </p>
        <RouterLink
          to="/contact"
          class="cta inline-block mt-2"
          aria-label="Request a consultation with WeCr8 Solutions"
        >
          Request a Free Consultation
        </RouterLink>
      </template>
    </BaseSection>

    <!-- 🧩 Modular Service Offerings -->
    <BaseSection variant="white">
      <template #default>
        <div class="text-center max-w-3xl mx-auto mb-12">
          <h2 class="text-3xl font-bold text-heading mb-3">What We Offer</h2>
          <p class="text-muted text-lg">
            Whether you’re modernizing your tool crib or preparing for lights-out machining—our services scale to your needs.
          </p>
        </div>
        <CardGrid :cards="serviceCards" />
      </template>
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
