<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
import CardGrid from '@/components/CardGrid.vue'

const coreFocus = [
  {
    title: 'Smart Tooling & Zoller Integration',
    description: 'Digital tool libraries, Zoller setup, and CAM alignment.',
    link: '/services/tool-library',
    cta: 'Explore Tooling',
  },
  {
    title: 'Automation & CNC Optimization',
    description: 'Workflow automation and CNC machine efficiency tuning.',
    link: '/services/cnc-automation',
    cta: 'See Automation',
  },
  {
    title: 'Training & Workforce Development',
    description: 'Educating machinists and programmers with modern skills.',
    link: '/services/training',
    cta: 'View Training',
  },
]
</script>

<template>
  <div class="about">
    <!-- 🔵 Hero -->
    <HeroSection>
      <template #title>About WeCr8 Solutions</template>
      <template #subtext>
        WeCr8 Solutions is a forward-thinking consulting group specializing in smart tooling systems,
        automation strategies, and digital transformation for modern manufacturers. From shop floor to digital thread, we build precision-driven workflows that scale.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">Get in Touch</RouterLink>
    </HeroSection>

    <!-- 🛠 What Sets Us Apart -->
    <BaseSection variant="white">
      <template #default>
        <h2 class="text-2xl md:text-3xl font-bold text-heading text-center mb-10">
          What Sets Us Apart
        </h2>
        <div class="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 class="text-xl font-semibold text-heading mb-2">🛠 Smart Tooling Systems</h3>
            <p class="text-muted">
              We design and structure intelligent tool libraries, enable Zoller presetting and inspection workflows, and integrate CAM-ready data with your CNC operations—building traceability from tool cradle to spindle.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-heading mb-2">🤖 CNC & Workflow Automation</h3>
            <p class="text-muted">
              From DNC file delivery to machine readiness signals and ERP sync, we optimize your shop through connected processes, reducing downtime and unlocking throughput.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold text-heading mb-2">📊 Process Optimization & Training</h3>
            <p class="text-muted">
              We assess your workflow—from quoting to machining—and provide hands-on training, lean strategies, and visual systems that elevate every team member’s output.
            </p>
          </div>
        </div>
      </template>
    </BaseSection>

    <!-- 💡 Mission -->
    <BaseSection variant="light">
      <template #default>
        <div class="text-center max-w-4xl mx-auto py-16">
          <h2 class="text-2xl md:text-3xl font-bold text-heading mb-4">Our Mission</h2>
          <p class="text-lg text-muted">
            At WeCr8, our mission is to modernize manufacturing—from the way companies tool up to the way teams collaborate. We don’t just consult—we empower.
          </p>
        </div>
      </template>
    </BaseSection>

    <!-- 🔗 Core Services -->
    <CardGrid :cards="coreFocus" />
  </div>
</template>
