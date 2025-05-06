<template>
  <div class="contact">
    <!-- 🔵 Hero Section -->
    <BaseSection variant="blue" align="center" padding="xl">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">Let's Connect</h1>
      <p class="text-lg text-white/90 max-w-2xl mx-auto">
        Whether you’re curious about smart tooling, automation systems, or training programs — we’re
        here to talk shop.
      </p>
    </BaseSection>

    <!-- 📬 Contact Form Section -->
    <BaseSection variant="white" align="center">
      <div class="contact-box bg-white p-8 shadow rounded-md max-w-2xl mx-auto">
        <p class="mb-4">
          📧 Reach us anytime at:
          <a href="mailto:contact@wecr8.info" class="text-accent hover:underline"
            >contact@wecr8.info</a
          >
        </p>
        <p class="text-muted mb-6">We typically respond within 24–48 hours.</p>

        <!-- Contact Form -->
        <form name="ContactForm" method="POST" data-netlify="true" class="grid gap-4 text-left">
          <input type="hidden" name="form-name" value="ContactForm" />
          <input type="text" name="name" placeholder="Your Name" required class="input" />
          <input type="email" name="email" placeholder="Your Email" required class="input" />
          <select name="interest" required class="input">
            <option value="" disabled selected>What are you interested in?</option>
            <option value="Smart Tooling & Zoller">Smart Tooling & Zoller Integration</option>
            <option value="CNC Automation">Automation & CNC Optimization</option>
            <option value="Training Programs">Training & Workforce Development</option>
            <option value="General Inquiry">General Inquiry</option>
          </select>
          <textarea
            name="message"
            rows="5"
            placeholder="How can we help you?"
            required
            class="input"
          ></textarea>
          <button type="submit" class="cta w-full">Send Message</button>
        </form>
      </div>

      <div class="mt-10 text-sm text-muted">
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
    </BaseSection>
  </div>
</template>

<script setup>
import BaseSection from '@/components/BaseSection.vue'
</script>

<style scoped>
.input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
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
  transition: background-color 0.3s;
  cursor: pointer;
  text-align: center;
  border: none;
}
.cta:hover {
  background-color: #d9481f;
}
</style>
