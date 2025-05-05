<template>
  <section class="service-page">
    <div class="container">
      <!-- Page Title -->
      <h1 class="title">Training & Workforce Development</h1>

      <!-- Introductory Statement -->
      <p class="intro">
        We empower machinists and programmers by teaching modern CNC, CAM, and smart manufacturing
        principles through practical, hands-on training.
      </p>

      <!-- Training Topics -->
      <div class="content">
        <ul class="feature-list">
          <li>✔ Modern CNC machine operation & 5-axis theory</li>
          <li>✔ Tool library building & Zoller system instruction</li>
          <li>✔ CAM programming using Mastercam & Fusion</li>
          <li>✔ Blueprint reading, GD&T, and measurement skills</li>
          <li>✔ Custom training for job shops & OEMs</li>
        </ul>

        <!-- Call to Action -->
        <RouterLink class="cta" to="/contact"> Request a Training Program </RouterLink>
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
  content: '✔';
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
