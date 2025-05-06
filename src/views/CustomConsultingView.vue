<template>
  <div class="custom-consulting">
    <!-- 🔵 Hero Section -->
    <section class="section-blue" role="region" aria-label="Custom Consulting Hero">
      <div class="overlay"></div>
      <div class="container relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Custom Consulting Services
        </h1>
        <p class="text-lg text-white/90 max-w-3xl mx-auto">
          Get tailored solutions for your shop’s toughest challenges — from workflow inefficiencies to full production system overhauls.
        </p>
      </div>
    </section>

    <!-- 📊 Consulting Benefits -->
    <section class="section container text-center" role="region" aria-label="Consulting Details">
      <div class="content-box">
        <ul class="feature-list text-left">
          <li>On-site evaluations of machining and programming processes</li>
          <li>Design and implementation of smart tooling strategies</li>
          <li>CAM and post processor adjustments for better output</li>
          <li>Lean documentation, setup sheets, and SOP creation</li>
          <li>Full integration support for Zoller, Mastercam, and ERP systems</li>
        </ul>

        <RouterLink class="cta" to="/contact" aria-label="Begin Consulting">
          Schedule a Free Consultation
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.section-blue {
  position: relative;
  background-color: var(--color-primary);
  padding: 5rem 1rem;
  color: white;
  overflow: hidden;
}

.overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 0;
}

.section-blue h1,
.section-blue p {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.section {
  padding: 4rem 1rem;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

.content-box {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

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
  content: "✔";
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.cta {
  display: inline-block;
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
