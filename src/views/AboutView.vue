<template>
  <div class="about">
    <!-- 🔵 Hero Section -->
    <section class="section-blue" role="region" aria-label="About WeCr8 Solutions">
      <div class="overlay"></div>
      <div class="container relative z-10 text-center">
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-6">
          About WeCr8 Solutions
        </h1>
        <p class="text-lg text-white/90 max-w-3xl mx-auto">
          WeCr8 Solutions is a forward-thinking consulting group specializing in smart tooling systems, automation strategies, and digital transformation for modern manufacturers. From shop floor to digital thread, we build precision-driven workflows that scale.
        </p>
      </div>
    </section>

    <!-- 🔧 Core Capabilities Grid -->
    <section class="section container text-center" role="region" aria-label="Core Capabilities">
      <h2 class="text-3xl font-bold text-heading mb-8">What Sets Us Apart</h2>

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

    <!-- 🧭 Mission Statement -->
    <section class="section-light py-16 text-center" role="region" aria-label="Mission Statement">
      <div class="container max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold text-heading mb-4">Our Mission</h2>
        <p class="text-lg text-muted">
          At WeCr8, our mission is to modernize manufacturing—from the way companies tool up to the way teams collaborate. We don’t just consult—we empower.
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.section-blue {
  position: relative;
  background-color: var(--color-primary);
  padding: 5rem 1rem;
  color: white;
  overflow: hidden;
}

.overlay {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 0;
}

.section-blue h1,
.section-blue p {
  color: white;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.value-box p {
  font-size: 0.95rem;
}

@media (min-width: 768px) {
  .section-blue h1 {
    font-size: 3rem;
  }
}
</style>
