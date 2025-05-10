<script setup>
import BaseSection from '@/components/BaseSection.vue'
import { ref } from 'vue'

const name = ref('')
const email = ref('')
const interest = ref('')
const message = ref('')
const ndaAccepted = ref(false)
const showNDA = ref(true)

const redirectMap = {
  'Smart Tooling & Zoller': 'https://forms.gle/Sn86xGx7j3VeTL7w5',
  'CNC Automation': 'https://forms.gle/uEbaWufReC1fZ7jt5',
  'Training Programs': 'https://forms.gle/Rm1Ltheqd9kn7bLR6',
  'Webpage Projects': 'https://forms.gle/ByFgeoGuRnx4Aiyy7',
  'General Inquiry': 'https://forms.gle/r67UXb1ncgTzUckbA',
}

function agreeToNDA() {
  ndaAccepted.value = true
  showNDA.value = false
}

function rejectNDA() {
  window.location.href = 'https://www.wecr8.info'
}

async function handleSubmit() {
  const redirectTo = redirectMap[interest.value]
  if (redirectTo) {
    window.location.href = redirectTo
  } else {
    alert('Please select a valid interest.')
  }
}
</script>

<template>
  <div class="contact-page">
    <!-- NDA Modal -->
    <div
      v-if="showNDA"
      class="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
    >
      <div class="bg-white p-6 rounded-xl max-w-md shadow-xl">
        <h2 class="text-xl font-bold mb-2">Non-Disclosure Agreement</h2>
        <p class="text-sm text-gray-700 mb-4 max-h-60 overflow-y-auto">
          By continuing, you agree not to share, distribute, or reuse any documentation, strategy,
          or tooling information provided by WeCr8 Solutions. All shared content is considered
          confidential.
        </p>
        <div class="grid grid-cols-2 gap-4">
          <button @click="agreeToNDA" class="cta w-full">I Agree</button>
          <button @click="rejectNDA" class="cta bg-gray-300 text-black w-full">I Disagree</button>
        </div>
      </div>
    </div>

    <!-- Hero Section -->
    <BaseSection variant="blue" align="center" padding="xl">
      <template #default>
        <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">
          Let’s Connect
        </h1>
        <p class="text-lg text-white/90 max-w-2xl mx-auto">
          Choose an area of interest and get routed to the appropriate intake form.
        </p>
      </template>
    </BaseSection>

    <!-- Contact Form -->
    <BaseSection variant="white" align="center">
      <template #default>
        <div class="contact-box bg-white px-6 py-10 md:p-12 shadow-lg rounded-xl max-w-2xl mx-auto">
          <h2 class="text-2xl font-bold text-heading mb-4">Send Us a Message</h2>
          <p class="text-muted mb-6 text-sm">We typically respond within 24–48 hours.</p>

          <form @submit.prevent="handleSubmit" class="grid gap-4 text-left" v-if="ndaAccepted">
            <input
              v-model="name"
              type="text"
              name="name"
              placeholder="Your Name"
              required
              class="input"
            />
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="Your Email"
              required
              class="input"
            />

            <select v-model="interest" name="interest" required class="input">
              <option value="" disabled selected>Select a service you're interested in</option>
              <option value="Smart Tooling & Zoller">Smart Tooling & Zoller Integration</option>
              <option value="CNC Automation">Automation & CNC Optimization</option>
              <option value="Training Programs">Training & Workforce Development</option>
              <option value="Webpage Projects">Webpage Design & Setup</option>
              <option value="General Inquiry">General Inquiry</option>
            </select>

            <textarea
              v-model="message"
              name="message"
              rows="5"
              placeholder="How can we help you?"
              required
              class="input resize-none"
            ></textarea>

            <button type="submit" class="cta w-full mt-2">Submit & Proceed</button>
          </form>

          <div class="mt-8 text-sm text-muted text-center">
            📧 Prefer email? Reach us at
            <a href="mailto:contact@wecr8.info" class="text-accent hover:underline"
              >contact@wecr8.info</a
            >
          </div>
        </div>

        <div class="mt-12 text-sm text-muted">
          Prefer social? Connect on
          <a
            href="https://linkedin.com/company/wecr8solutions"
            class="text-accent hover:underline"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </a>
        </div>
      </template>
    </BaseSection>
  </div>
</template>

<style scoped>
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.2s;
}
.input:focus {
  border-color: var(--color-accent);
  outline: none;
}

.cta {
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  padding: 0.75rem 1.25rem;
  border-radius: 6px;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  text-align: center;
  border: none;
}
.cta:hover {
  background-color: #d9481f;
}

.contact-box {
  transition: box-shadow 0.3s ease;
}
.contact-box:hover {
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}
</style>
