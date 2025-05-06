<script setup>
import { RouterLink } from 'vue-router'
import CardGrid from '@/components/CardGrid.vue'

const coreFocus = [
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
  <div class="about">

    <!-- 🔵 Hero Section -->
    <section class="spotlight" role="region" aria-label="About WeCr8 Solutions">
      <div class="container">
        <h1 class="spotlight-title">About WeCr8 Solutions</h1>
        <p class="spotlight-subtext">
          WeCr8 Solutions is a forward-thinking consulting group specializing in smart tooling systems, automation strategies, and digital transformation for modern manufacturers. From shop floor to digital thread, we build precision-driven workflows that scale.
        </p>
        <RouterLink to="/contact" class="cta" aria-label="Get in Touch">
          Get in Touch
        </RouterLink>
      </div>
    </section>

    <!-- 🛠 Core Capabilities -->
    <section class="section container text-center" role="region" aria-label="What We Do">
      <h2 class="section-heading">What Sets Us Apart</h2>
      <div class="grid md:grid-cols-3 gap-10 text-left">
        <div class="value-box">
          <h3 class="text-xl font-semibold text-heading mb-2">🛠 Smart Tooling Systems</h3>
          <p class="text-muted">
            We design and structure intelligent tool libraries, enable Zoller presetting and inspection workflows, and integrate CAM-ready data with your CNC operations—building traceability from tool cradle to spindle.
          </p>
        </div>
        <div class="value-box">
          <h3 class="text-xl font-semibold text-heading mb-2">🤖 CNC & Workflow Automation</h3>
          <p class="text-muted">
            From DNC file delivery to machine readiness signals and ERP sync, we optimize your shop through connected processes, reducing downtime and unlocking throughput.
          </p>
        </div>
        <div class="value-box">
          <h3 class="text-xl font-semibold text-heading mb-2">📊 Process Optimization & Training</h3>
          <p class="text-muted">
            We assess your workflow—from quoting to machining—and provide hands-on training, lean strategies, and visual systems that elevate every team member’s output.
          </p>
        </div>
      </div>
    </section>

    <!-- 💡 Mission Section -->
    <section class="section-light py-16 text-center" role="region" aria-label="Mission Statement">
      <div class="container max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-heading mb-4">Our Mission</h2>
        <p class="text-lg text-muted">
          At WeCr8, our mission is to modernize manufacturing—from the way companies tool up to the way teams collaborate. We don’t just consult—we empower.
        </p>
      </div>
    </section>

    <!-- 🔗 Crosslink to Services -->
    <CardGrid :cards="coreFocus" />
  </div>
</template>

<style scoped>
@import '../assets/main.css';

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

.section-heading {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 700;
  color: var(--color-heading);
}

.cta {
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border-radius: 6px;
  font-size: 1rem;
  display: inline-block;
  text-decoration: none;
  transition: background-color 0.3s ease;
}
.cta:hover,
.cta:focus {
  background-color: #d9481f;
  outline: none;
}

@media (min-width: 768px) {
  .spotlight-title {
    font-size: 3rem;
  }

  .spotlight-subtext {
    font-size: 1.25rem;
  }
}
</style>
