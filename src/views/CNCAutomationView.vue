<template>
  <section class="service-page">
    <div class="container">
      <!-- Page Title -->
      <h1 class="title">Automation & CNC Optimization</h1>

      <!-- Introductory Statement -->
      <p class="intro">
        We streamline machine shop operations with tailored automation solutions, improving uptime,
        reducing human error, and delivering measurable ROI.
      </p>

      <!-- Services List -->
      <div class="content">
        <ul class="feature-list">
          <li>✔ Machine tending automation & integration</li>
          <li>✔ G-code optimization and toolpath efficiency audits</li>
          <li>✔ DNC file transfer systems and remote job delivery</li>
          <li>✔ Setup reduction strategies using SMED principles</li>
          <li>✔ Custom PLC routines for peripheral automation</li>
        </ul>

        <!-- Call to Action -->
        <RouterLink class="cta" to="/contact">
          Start Automating Your Shop
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
@import '../assets/main.css';

.service-page {
  padding: 4rem 1rem;
  background-color: var(--color-light);
  color: var(--color-text);
}

.container {
  max-width: 960px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 2.5rem;
  font-weight: 800;
  color: var(--color-heading);
  margin-bottom: 1.5rem;
}

.intro {
  font-size: 1.125rem;
  color: var(--color-muted);
  margin-bottom: 2rem;
}

.content {
  text-align: left;
  padding: 1rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.feature-list {
  padding-left: 1.5rem;
  margin-bottom: 2rem;
  list-style: none;
}

.feature-list li {
  margin-bottom: 0.75rem;
  font-size: 1rem;
  position: relative;
  padding-left: 1.25rem;
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
  background-color: var(--color-accent);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 4px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s;
}

.cta:hover {
  background-color: #d9481f;
}
</style>
