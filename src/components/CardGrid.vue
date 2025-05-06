<script setup>
defineProps({
  cards: {
    type: Array,
    required: true,
    validator: (arr) =>
      arr.every(
        (card) =>
          'title' in card &&
          'description' in card &&
          'link' in card &&
          'cta' in card
      ),
  },
})
</script>

<template>
  <section class="grid-wrapper" role="region" aria-label="WeCr8 Services Grid">
    <div class="container">
      <div class="grid-header">
        <h2 class="section-heading">Our Expertise</h2>
        <p class="section-subtext">
          Elevating performance across tooling, automation, and technical training — one project at a time.
        </p>
      </div>

      <div class="card-grid" role="list">
        <RouterLink
          v-for="(card, index) in cards"
          :key="index"
          :to="card.link"
          class="card"
          role="listitem"
          :aria-label="card.title"
          data-cookieconsent="ignore"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <div class="card-content">
            <div class="card-header">
              <slot name="icon" :index="index" />
              <h3 class="card-title">{{ card.title }}</h3>
            </div>
            <p class="card-description">{{ card.description }}</p>
            <div class="card-footer">
              <span class="card-cta" tabindex="0">{{ card.cta }}</span>
            </div>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
.grid-wrapper {
  padding: 4rem 1rem;
  background: linear-gradient(to right, #f7f9fc, #e9eff5);
}

.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 0 2rem;
  }
}

.grid-header {
  text-align: center;
  margin-bottom: 2.5rem;
}

.section-heading {
  font-size: 2.25rem;
  font-weight: 800;
  color: var(--color-heading);
  margin-bottom: 0.5rem;
}

.section-subtext {
  font-size: 1.1rem;
  color: var(--color-muted);
  max-width: 680px;
  margin: 0 auto;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 1rem 0;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  animation: fadeInUp 0.6s ease forwards;
  opacity: 0;
  transform: translateY(20px);
}

.card:hover {
  transform: scale(1.025);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.card-content {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.card-header {
  text-align: center;
  margin-bottom: 1rem;
}

.card-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: var(--color-heading);
}

.card-description {
  color: var(--color-text);
  font-size: 0.95rem;
  margin: 1rem 0;
  flex-grow: 1;
  text-align: center;
}

.card-footer {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.card-cta {
  background: var(--color-accent);
  color: white;
  font-weight: 600;
  padding: 0.5rem 1.25rem;
  border-radius: 6px;
  font-size: 0.9rem;
  transition: background 0.3s ease;
  cursor: pointer;
}

.card-cta:hover,
.card-cta:focus {
  background-color: #d9481f;
  outline: none;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
