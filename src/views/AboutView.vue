<script setup>
import { RouterLink } from 'vue-router'
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
import CardGrid from '@/components/CardGrid.vue'

const coreFocus = [
  {
    title: 'Smart Tooling & Zoller Integration',
    description: 'Structured tool libraries, presetting, inspection & CAM workflows for manufacturing accuracy.',
    link: '/services/tool-library',
    cta: 'Explore Tooling',
  },
  {
    title: 'Automation & CNC Optimization',
    description: 'From DNC file delivery to machine signals and ERP sync—maximize output and eliminate downtime.',
    link: '/services/cnc-automation',
    cta: 'See Automation',
  },
  {
    title: 'Training & Workforce Development',
    description: 'We train the next generation of machinists & programmers with lean methods and modern tech.',
    link: '/services/training',
    cta: 'View Training',
  },
]
</script>

<template>
  <div class="about">
    <!-- 🔵 Hero Section -->
    <HeroSection>
      <template #title>WeCr8 Solutions | Modern Manufacturing. Real Results.</template>
      <template #subtext>
        We partner with forward-thinking manufacturers to implement digital tooling ecosystems, automate operations, and empower teams—delivering measurable outcomes across aerospace, defense, and energy sectors.
      </template>
      <RouterLink to="/contact" class="cta mt-4 inline-block">Connect with Our Team</RouterLink>
    </HeroSection>

    <!-- 🧠 Our Approach -->
    <BaseSection variant="white">
      <template #default>
        <h2 class="text-3xl font-bold text-heading text-center mb-12">How We Drive Value</h2>
        <div class="grid md:grid-cols-3 gap-10 text-left">
          <div>
            <h3 class="text-xl font-semibold mb-2">🔧 Tooling Intelligence</h3>
            <p class="text-muted">
              From Zoller presetting and tool inspection to fully structured CAM libraries—we build the data backbone your machines rely on to perform with precision.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">⚙️ Connected Operations</h3>
            <p class="text-muted">
              We implement DNC, machine signal mapping, and ERP integrations that turn fragmented workflows into a real-time production environment.
            </p>
          </div>
          <div>
            <h3 class="text-xl font-semibold mb-2">📚 Upskilling for Impact</h3>
            <p class="text-muted">
              Lean training systems, visual standards, and operator workflows—built to scale your team's effectiveness without slowing production.
            </p>
          </div>
        </div>
      </template>
    </BaseSection>

    <!-- 🚀 Mission Statement -->
    <BaseSection variant="light">
      <template #default>
        <div class="text-center max-w-4xl mx-auto py-16">
          <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
          <p class="text-lg text-muted">
            To accelerate the future of precision manufacturing—tool by tool, process by process, person by person.
          </p>
        </div>
      </template>
    </BaseSection>

    <!-- 🔩 Core Service Offerings -->
    <BaseSection variant="white">
      <template #default>
        <h2 class="text-3xl font-bold text-heading text-center mb-12">Our Core Focus Areas</h2>
        <CardGrid :cards="coreFocus" />
      </template>
    </BaseSection>
  </div>
</template>
