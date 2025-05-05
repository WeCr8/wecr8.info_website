<template>
  <main>
    <h1>WeCr8 Solutions</h1>
    <p>
      We empower CNC shops and manufacturers with expert consulting in:
    </p>
    <ul>
      <li>• Smart Tooling Systems (Zoller, CAM, ERP Integration)</li>
      <li>• Lean Workflow Optimization & Automation</li>
      <li>• Workforce Training in Industry 4.0 Practices</li>
    </ul>

    <p style="margin-top: 2rem;">
      <RouterLink to="/services">Explore Our Services</RouterLink> |
      <RouterLink to="/contact">Get in Touch</RouterLink>
    </p>
  </main>
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

<style scoped>
.home {
  font-family: sans-serif;
  color: #fff;
}

.hero {
  background: #1b365d;
  text-align: center;
  padding: 2rem;
}

.hero .logo {
  max-width: 200px;
  margin-bottom: 1rem;
}

.hero h1 {
  font-size: 1.8rem;
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

.services {
  background: #fff;
  color: #000;
  text-align: center;
  padding: 2rem 1rem;
}

.services .cards {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.card {
  background: #f2f2f2;
  padding: 1rem;
  border-radius: 8px;
}

.process {
  background: #70a1d7;
  text-align: center;
  padding: 2rem 1rem;
}

.process .steps {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.about {
  background: #fff;
  color: #000;
  text-align: center;
  padding: 2rem 1rem;
}

.cta-banner {
  background: #f05727;
  text-align: center;
  padding: 2rem;
}
</style>
