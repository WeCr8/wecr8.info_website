<script setup>
import HeroSection from '@/components/HeroSection.vue'
import BaseSection from '@/components/BaseSection.vue'
</script>

<template>
  <div class="privacy-policy">
    <HeroSection>
      <template #title>Privacy Policy</template>
      <template #subtext>
        We value your privacy. This page explains how WeCr8 Solutions collects, uses, and protects your information.
      </template>
    </HeroSection>

    <BaseSection variant="white" align="left">
      <div class="max-w-4xl mx-auto text-left space-y-6 text-muted text-base">
        <section>
          <h2 class="text-xl font-semibold text-heading mb-2">1. Information We Collect</h2>
          <p>We may collect personal data such as your name, email, company, and job title when submitted through forms. We also collect anonymized usage data via Google Analytics.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-heading mb-2">2. How We Use Your Data</h2>
          <p>We use your information to respond to inquiries, improve site performance, and offer relevant services. We do not sell or share your information without consent.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-heading mb-2">3. Analytics & Cookies</h2>
          <p>We use Google Analytics (GA4) to monitor user activity and optimize site functionality. This may include anonymized IPs and behavioral metrics.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-heading mb-2">4. Data Security</h2>
          <p>We implement industry-standard protections to safeguard data. However, no method is 100% secure.</p>
        </section>

        <section>
          <h2 class="text-xl font-semibold text-heading mb-2">5. Contact Us</h2>
          <p>If you have any questions about this policy, please contact us at <strong>info@wecr8.info</strong>.</p>
        </section>
      </div>
    </BaseSection>
  </div>
</template>
