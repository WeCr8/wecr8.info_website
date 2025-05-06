<script setup>
import { RouterLink } from 'vue-router'
import CardGrid from '@/components/CardGrid.vue'

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
  <div class="home">
    <!-- 🚀 Hero Section -->
    <section class="section-blue" role="region" aria-label="WeCr8 Solutions Hero Section">
      <div class="container hero-content">
        <h1 class="hero-title">WeCr8 Solutions: Precision. Automation. Results.</h1>
        <p class="hero-subtext">
          Driving innovation across aerospace, energy, and advanced manufacturing with smart tooling, automation, and workforce education.
        </p>
        <RouterLink
          to="/contact"
          class="cta"
          aria-label="Request a free consultation with WeCr8 Solutions"
          data-cookieconsent="ignore"
        >
          Request a Free Consultation
        </RouterLink>
      </div>
    </section>

    <!-- 🛠️ What We Do Grid Section -->
    <CardGrid :cards="serviceCards" />
  </div>
</template>

<style scoped>
.section-blue {
  position: relative;
  background-color: var(--color-primary);
  padding: 5rem 1rem 6rem;
  overflow: hidden;
  color: white;
  text-align: center;
}

.section-blue::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.hero-subtext {
  font-size: 1.125rem;
  max-width: 640px;
  margin: 0 auto 1.5rem;
  color: #f0f0f0;
  opacity: 0.95;
}

.cta {
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  margin-top: 1rem;
  display: inline-block;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.cta:hover,
.cta:focus {
  background-color: #d9481f;
  outline: none;
}

@media (min-width: 768px) {
  .hero-title {
    font-size: 3rem;
  }
}
</style>
