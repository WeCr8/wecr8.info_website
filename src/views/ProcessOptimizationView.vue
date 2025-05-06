<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="process-optimization">
    <!-- 🧠 Hero Section -->
    <HeroSection>
      <template #title>Process Optimization</template>
      <template #subtext>
        Identify inefficiencies, streamline production workflows, and achieve measurable productivity gains through data-driven process improvements.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">
        Optimize Your Workflow
      </RouterLink>
    </HeroSection>

    <!-- ⚙️ Optimization Features -->
    <BaseSection variant="white" align="center">
      <div class="max-w-3xl mx-auto bg-white rounded-lg shadow p-6 text-left">
        <ul class="feature-list">
          <li>Cycle time and spindle utilization analysis</li>
          <li>Process mapping and bottleneck removal</li>
          <li>Data-driven OEE improvement plans</li>
          <li>Toolpath and setup refinement</li>
          <li>Lean and Six Sigma aligned workflows</li>
        </ul>

        <RouterLink to="/contact" class="cta mt-4 inline-block">
          Request Process Analysis
        </RouterLink>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
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
  content: '✔';
  position: absolute;
  left: 0;
  color: var(--color-accent);
  font-weight: bold;
}

.cta {
  background-color: var(--color-accent);
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
