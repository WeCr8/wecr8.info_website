<script setup>
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="privacy-policy">
    <!-- 🔵 Hero -->
    <HeroSection>
      <template #title>Privacy Policy</template>
      <template #subtext>
        Your trust matters. Learn how WeCr8 Solutions collects, uses, and protects your data across our digital services.
      </template>
    </HeroSection>

    <!-- 📃 Privacy Card Container -->
    <BaseSection variant="white" align="center">
      <div class="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8 md:p-10 space-y-10 text-left border border-gray-200">
        <section>
          <h2 class="text-2xl font-bold text-heading mb-3">1. Information We Collect</h2>
          <p class="text-muted">
            We collect data you provide through contact forms—such as your name, email address, company, and job title.
            We also gather anonymized usage data through Google Analytics (GA4) to help improve our services.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-heading mb-3">2. How We Use Your Data</h2>
          <p class="text-muted">
            Your information helps us respond to inquiries, improve your experience, and recommend relevant services.
            We never sell or share your personal data without consent.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-heading mb-3">3. Analytics & Cookies</h2>
          <p class="text-muted">
            We use Google Analytics (GA4) to analyze traffic. This includes anonymized IPs, behavior, and device info.
            You may disable cookies through your browser settings.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-heading mb-3">4. Data Security</h2>
          <p class="text-muted">
            We implement industry-standard encryption and safeguards. Still, no system can guarantee complete security.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-heading mb-3">5. Contact Us</h2>
          <p class="text-muted">
            If you have questions, please email us at
            <a href="mailto:info@wecr8.info" class="text-accent hover:underline">info@wecr8.info</a>.
          </p>
        </section>
      </div>
    </BaseSection>
  </div>
</template>

<style scoped>
.text-accent {
  color: var(--color-accent);
  font-weight: 500;
}
</style>
