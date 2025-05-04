<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <img src="@/assets/logo.png" alt="WeCr8 Solutions Logo" class="hero-logo" />
      <h1>Transforming Manufacturing<br />Through Innovation & Smart Tooling</h1>
      <p>
        We help aerospace, energy, and precision industries automate workflows,<br />
        modernize shops, and train the future workforce.
      </p>
      <button class="cta">Request a Free Consultation</button>
    </section>

    <!-- What We Do -->
    <section class="what-we-do">
      <h2>How We Do</h2>
      <div class="cards">
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
    </section>

    <!-- How We Work -->
    <section class="how-we-work">
      <h2>How We Work</h2>
      <div class="steps">
        <div><strong>Assess</strong><br />Site evaluation shop-floor tour</div>
        <div><strong>Plan</strong><br />Roadmap creation tailored to your goals</div>
        <div><strong>Implement</strong><br />Tools, automation, and training</div>
        <div><strong>Optimize</strong><br />Measure ROI, iterate</div>
      </div>
    </section>

    <!-- About Us -->
    <section class="about-us">
      <h2>About Us</h2>
      <p>
        Decades of hands-on experience across aerospace, automation, and off-road engineering.
        <br /><br />
        <strong>• Precision<br />• Efficiency<br />• Partnership</strong>
      </p>
    </section>

    <!-- CTA Banner -->
    <section class="cta-banner">
      <h3>Ready to modernize your shop floor?</h3>
      <button class="cta">Schedule a Consultation</button>
    </section>
  </div>
</template>

<style scoped>
.home {
  font-family: sans-serif;
  color: #fff;
}

/* Hero */
.hero {
  background: #1b365d;
  text-align: center;
  padding: 2rem 1rem;
}
.hero-logo {
  max-width: 150px;
  margin-bottom: 1rem;
}
.hero h1 {
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
}
.hero p {
  font-size: 1rem;
  margin-bottom: 1rem;
}
.cta {
  background: #f05727;
  color: #fff;
  border: none;
  padding: 0.75rem 1.5rem;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}

/* What We Do */
.what-we-do {
  background: #fff;
  color: #000;
  text-align: center;
  padding: 2rem 1rem;
}
.cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.card {
  background: #f5f5f5;
  padding: 1rem;
  border-radius: 8px;
}

/* How We Work */
.how-we-work {
  background: #70a1d7;
  text-align: center;
  padding: 2rem 1rem;
}
.steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* About Us */
.about-us {
  background: #fff;
  color: #000;
  text-align: center;
  padding: 2rem 1rem;
}

/* CTA Banner */
.cta-banner {
  background: #f05727;
  text-align: center;
  padding: 2rem 1rem;
}
.cta-banner h3 {
  margin-bottom: 1rem;
}

/* Responsive */
@media (min-width: 768px) {
  .cards,
  .steps {
    flex-direction: row;
    justify-content: center;
    text-align: left;
  }
  .card,
  .steps > div {
    width: 250px;
  }
}
</style>
