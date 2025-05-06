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
  <div class="services">
    <!-- 🔷 Spotlight Section -->
    <section class="spotlight" role="region" aria-label="WeCr8 Spotlight Services Intro">
      <div class="container">
        <h1 class="spotlight-title">Built for Modern Manufacturing</h1>
        <p class="spotlight-subtext">
          Our services drive real-world results across aerospace, energy, and advanced
          machining—empowering teams through smarter tooling, connected automation, and targeted
          education.
        </p>
        <RouterLink
          to="/contact"
          class="cta"
          aria-label="Request a consultation with WeCr8 Solutions"
          data-cookieconsent="ignore"
        >
          Request a Free Consultation
        </RouterLink>
      </div>
    </section>

    <!-- 🛠️ Services Grid -->
    <CardGrid :cards="serviceCards" />
  </div>
</template>

<style scoped>
.services {
  width: 100%;
}

/* 🔷 Blue Intro Section */
.spotlight {
  background-color: var(--color-primary);
  color: white;
  padding: 5rem 1rem 6rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.spotlight-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #fff;
}

.spotlight-subtext {
  font-size: 1.125rem;
  max-width: 700px;
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
  display: inline-block;
  transition: background-color 0.3s ease;
  text-decoration: none;
}

.cta:hover,
.cta:focus {
  background-color: #d9481f;
  outline: none;
}

/* Responsive Tweaks */
@media (min-width: 768px) {
  .spotlight-title {
    font-size: 3rem;
  }

  .spotlight-subtext {
    font-size: 1.25rem;
  }
}
</style>
