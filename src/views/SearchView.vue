<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const query = computed(() => route.query.q?.toString() || '')

// Example static matches (replace with real fetch later)
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
  <div class="search-page section container">
    <h1 class="text-3xl font-extrabold text-heading mb-4">
      Search Results for <span class="text-accent">"{{ query }}"</span>
    </h1>

    <p v-if="results.length > 0" class="text-muted mb-6">Showing {{ results.length }} result(s)</p>

    <div v-if="results.length > 0" class="result-grid">
      <div v-for="(result, i) in results" :key="i" class="result-card">
        <h3 class="text-xl font-semibold text-heading mb-2">{{ result.title }}</h3>
        <p class="text-sm text-muted mb-3">{{ result.description }}</p>
        <RouterLink :to="result.link" class="cta-sm">View Details</RouterLink>
      </div>
    </div>

    <div v-else class="empty-state text-muted mt-12">
      No results found. Try a different keyword like <strong>"automation"</strong> or
      <strong>"training"</strong>.
    </div>
  </div>
</template>

<style scoped>
.result-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 1.5rem;
}

.result-card {
  border: 1px solid var(--color-border);
  padding: 1.5rem;
  border-radius: 6px;
  background-color: var(--color-light);
  transition: box-shadow 0.3s;
}
.result-card:hover {
  box-shadow: 0 0 0 2px var(--color-accent);
}

.cta-sm {
  color: var(--color-accent);
  font-weight: bold;
  text-decoration: underline;
  font-size: 0.9rem;
}

.empty-state {
  text-align: center;
  font-size: 1rem;
  color: var(--color-muted);
}
</style>
