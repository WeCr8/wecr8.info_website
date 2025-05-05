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
      </div>
      <div class="card">
        <h3>Automation Integration</h3>
        <p>Maximize ROI by streamlining processes with proven automation systems.</p>
      </div>
      <div class="card">
        <h3>Workforce Education</h3>
        <p>Upskill your team with custom training programs in modern manufacturing practices.</p>
      </div>
    </div>
  </div>
</template>

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
}

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
