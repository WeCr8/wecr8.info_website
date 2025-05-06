<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import BaseSection from '@/components/BaseSection.vue'
import { RouterLink } from 'vue-router'

const route = useRoute()
const query = computed(() => route.query.q?.toString() || '')

// Placeholder static search matches (to be replaced with real fetch logic)
const results = computed(() =>
  query.value.toLowerCase().includes('tool')
    ? [
        {
          title: 'Tool ID Standardization',
          description:
            'Structure and manage your CNC tool IDs across Mastercam, Zoller, and ERP systems.',
          link: '/services#tool-id',
        },
        {
          title: 'Smart Tooling Database Sync',
          description:
            'How WeCr8 integrates tool libraries across your shop floor and programming team.',
          link: '/services#smart-tooling',
        },
      ]
    : [],
)
</script>

<template>
  <BaseSection variant="white" class="search-page">
    <div class="max-w-4xl mx-auto text-center">
      <h1 class="text-4xl font-extrabold text-heading mb-4">
        Results for <span class="text-accent">"{{ query }}"</span>
      </h1>
      <p v-if="results.length > 0" class="text-muted mb-8">
        Showing {{ results.length }} result<span v-if="results.length > 1">s</span>
      </p>
    </div>

    <div v-if="results.length > 0" class="result-grid">
      <div v-for="(result, i) in results" :key="i" class="result-card">
        <h3 class="text-xl font-semibold text-heading mb-2">{{ result.title }}</h3>
        <p class="text-sm text-muted mb-4">{{ result.description }}</p>
        <RouterLink :to="result.link" class="cta-sm">View Details</RouterLink>
      </div>
    </div>

    <div v-else class="empty-state mt-16 text-center text-muted">
      <p class="text-lg">No results found for <strong>"{{ query }}"</strong>.</p>
      <p class="mt-2">
        Try searching for terms like <span class="text-accent">"automation"</span>,
        <span class="text-accent">"training"</span>, or <span class="text-accent">"Zoller"</span>.
      </p>
    </div>
  </BaseSection>
</template>

<style scoped>
.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.result-card {
  background: var(--color-light);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1.5rem;
  text-align: left;
  transition: box-shadow 0.3s ease;
}
.result-card:hover {
  box-shadow: 0 0 0 2px var(--color-accent);
}

.cta-sm {
  display: inline-block;
  color: var(--color-accent);
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: underline;
  transition: color 0.2s ease;
}
.cta-sm:hover {
  color: #d9481f;
}

.empty-state {
  font-size: 1.125rem;
}
</style>
