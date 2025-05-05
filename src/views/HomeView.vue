<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="home">
    <!-- 🚀 Hero Section -->
    <section class="hero section text-center">
      <div class="container">
        <h1 class="hero-title">WeCr8 Solutions: Precision. Automation. Results.</h1>
        <p class="hero-subtext">
          Driving innovation across aerospace, energy, and advanced manufacturing with smart
          tooling, automation, and workforce education.
        </p>
        <RouterLink
          to="/contact"
          class="cta"
          aria-label="Request a free consultation with WeCr8 Solutions"
        >
          Request a Free Consultation
        </RouterLink>
      </div>
    </section>

    <!-- 🛠️ What We Do -->
    <section class="section section-light text-center">
      <div class="container">
        <h2 class="text-3xl font-bold text-heading mb-8">What We Do</h2>

        <div class="grid-cards">
          <!-- 🔧 Smart Tooling -->
          <RouterLink
            to="/services/tool-library"
            class="card-link"
            aria-label="Smart Tooling and Zoller Integration"
          >
            <div class="card">
              <h3>Smart Tooling & Zoller Integration</h3>
              <p>Digital tool libraries, Zoller setup, and CAM alignment.</p>
            </div>
          </RouterLink>

          <!-- 🤖 CNC Automation -->
          <RouterLink
            to="/services/cnc-automation"
            class="card-link"
            aria-label="Automation and CNC Optimization"
          >
            <div class="card">
              <h3>Automation & CNC Optimization</h3>
              <p>Workflow automation and CNC machine efficiency tuning.</p>
            </div>
          </RouterLink>

          <!-- 🎓 Workforce Training -->
          <RouterLink
            to="/services/training"
            class="card-link"
            aria-label="Training and Workforce Development"
          >
            <div class="card">
              <h3>Training & Workforce Development</h3>
              <p>Educating machinists and programmers with modern skills.</p>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* 🌌 Hero Section */
.hero {
  background-color: var(--color-primary);
  padding: 5rem 1rem 6rem;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
}

.hero-title {
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  color: #fff;
}

.hero-subtext {
  font-size: 1.125rem;
  max-width: 640px;
  margin: 0 auto 1.5rem;
  color: #f0f0f0;
  opacity: 0.95;
}

/* 📦 Service Cards */
.grid-cards {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-top: 2rem;
}

.card-link {
  display: block;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.card-link:hover {
  transform: translateY(-5px);
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.05);
  text-align: left;
}

.card h3 {
  margin-bottom: 0.75rem;
  color: var(--color-heading);
}

.card p {
  color: var(--color-text);
  font-size: 0.95rem;
}

/* 📱 Responsive Adjustments */
@media (min-width: 768px) {
  .grid-cards {
    grid-template-columns: repeat(3, 1fr);
  }

  .hero-title {
    font-size: 3rem;
  }
}
</style>
