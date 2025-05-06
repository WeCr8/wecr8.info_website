<template>
  <section class="section-blue" role="region" aria-label="Page Hero">
    <div class="container hero-content text-center">
      <h1 class="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow">
        <slot name="title">Your Title Here</slot>
      </h1>
      <p class="text-lg text-white/90 max-w-2xl mx-auto mb-4">
        <slot name="subtext">Add a short supporting message for this page.</slot>
      </p>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.section-blue {
  position: relative;
  background-color: var(--color-primary);
  padding: 5rem 1rem 6rem;
  color: white;
  text-align: center;
  overflow: hidden;
}
.section-blue::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.25);
  z-index: 0;
}
.section-blue > * {
  position: relative;
  z-index: 1;
}
.hero-content {
  position: relative;
  z-index: 1;
  max-width: 960px;
  margin: 0 auto;
}
</style>
