<template>
  <div class="section-light section text-center">
    <h1 class="text-3xl md:text-4xl font-bold mb-4 text-heading">Our Services</h1>
    <p class="text-muted max-w-2xl mx-auto mb-8">
      WeCr8 Solutions delivers strategic innovations in automation, smart tooling, and workforce
      training for advanced manufacturing.
    </p>

    <div class="cards container">
      <div class="card">
        <h3>Smart Tooling Systems</h3>
        <p>Standardize tool libraries, digitize with Zoller, and align CAM/CNC toolchains.</p>
        <RouterLink class="cta-link" to="/services/tool-library">Explore Tooling</RouterLink>
      </div>

      <div class="card">
        <h3>Automation Integration</h3>
        <p>Maximize ROI by streamlining processes with proven automation systems.</p>
        <RouterLink class="cta-link" to="/services/cnc-automation">See Automation</RouterLink>
      </div>

      <div class="card">
        <h3>Workforce Education</h3>
        <p>Upskill your team with custom training programs in modern manufacturing practices.</p>
        <RouterLink class="cta-link" to="/services/training">View Training</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  background: var(--color-light);
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card h3 {
  margin-bottom: 0.5rem;
  color: var(--color-heading);
}
.card p {
  margin-bottom: 1rem;
  color: var(--color-text);
}

.cta-link {
  background: var(--color-accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.9rem;
  text-decoration: none;
  transition: background 0.3s ease;
}
.cta-link:hover {
  background: #d9481f;
}

/* Responsive layout */
@media (min-width: 768px) {
  .cards {
    flex-direction: row;
    justify-content: center;
  }
  .card {
    width: 280px;
  }
}
</style>
