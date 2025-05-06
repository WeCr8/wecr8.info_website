<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="cnc-automation">
    <!-- 🔵 Hero Section using HeroSection Component -->
    <HeroSection>
      <template #title>Automation & CNC Optimization</template>
      <template #subtext>
        We streamline operations with automation tailored for precision machining, improving uptime,
        reducing human error, and delivering measurable ROI.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Start Automating Your Shop
      </RouterLink>
    </HeroSection>

    <!-- ⚙️ Service Details Section -->
    <BaseSection variant="white" align="center">
      <div class="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow">
        <ul class="space-y-4 text-left text-base text-text">
          <li class="relative pl-6 before:absolute before:left-0 before:content-['✔'] before:text-accent before:font-bold">
            Machine tending automation & integration
          </li>
          <li class="relative pl-6 before:absolute before:left-0 before:content-['✔'] before:text-accent before:font-bold">
            G-code optimization and toolpath efficiency audits
          </li>
          <li class="relative pl-6 before:absolute before:left-0 before:content-['✔'] before:text-accent before:font-bold">
            DNC file transfer systems and remote job delivery
          </li>
          <li class="relative pl-6 before:absolute before:left-0 before:content-['✔'] before:text-accent before:font-bold">
            Setup reduction strategies using SMED principles
          </li>
          <li class="relative pl-6 before:absolute before:left-0 before:content-['✔'] before:text-accent before:font-bold">
            Custom PLC routines for peripheral automation
          </li>
        </ul>

        <RouterLink
          to="/contact"
          class="cta mt-6 inline-block"
          aria-label="Schedule your automation consultation"
        >
          Schedule a Consultation
        </RouterLink>
      </div>
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
  transition: background-color 0.3s ease;
  text-decoration: none;
}
.cta:hover {
  background-color: #d9481f;
}
</style>
