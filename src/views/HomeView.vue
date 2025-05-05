<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero section text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold mb-4 text-heading">
        WeCr8 Solutions: Precision. Automation. Results.
      </h1>
      <p class="text-lg max-w-2xl mx-auto mb-6 text-muted">
        Driving innovation across aerospace, energy, and advanced manufacturing with smart tooling,
        automation, and workforce education.
      </p>
      <button class="cta">Request a Free Consultation</button>
    </section>

    <!-- What We Do Section -->
    <section class="section section-light text-center">
      <div class="container">
        <h2 class="mb-6">What We Do</h2>
        <div class="grid-cards">
          <div class="card">
            <h3>Smart Tooling & Zoller Integration</h3>
            <p>Digital tool libraries, Zoller setup, and CAM alignment.</p>
          </div>
          <div class="card">
            <h3>Automation & CNC Optimization</h3>
            <p>Workflow automation and CNC machine efficiency tuning.</p>
          </div>
          <div class="card">
            <h3>Training & Workforce Development</h3>
            <p>Educating machinists and programmers with modern skills.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  background-color: var(--color-primary);
  color: white;
  padding: 4rem 1rem;
}

.text-heading {
  color: var(--color-heading);
}

.text-muted {
  color: var(--color-muted);
}

/* Card Grid */
.grid-cards {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
  margin-top: 2rem;
}

.card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  text-align: left;
}
.card h3 {
  margin-bottom: 0.75rem;
  color: var(--color-heading);
}
.card p {
  color: var(--color-text);
}

@media (min-width: 768px) {
  .grid-cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
