<template>
  <section :class="baseClass">
    <div :class="containerClass">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'light',
    validator: (v) =>
      ['light', 'dark', 'white', 'blue', 'accent', 'transparent'].includes(v),
  },
  align: {
    type: String,
    default: 'left',
    validator: (v) => ['left', 'center', 'right'].includes(v),
  },
  maxWidth: {
    type: String,
    default: 'xl',
    validator: (v) => ['sm', 'md', 'xl', '2xl', 'full', 'none'].includes(v),
  },
  padding: {
    type: String,
    default: 'md',
    validator: (v) => ['none', 'sm', 'md', 'lg', 'xl'].includes(v),
  },
  layout: {
    type: String,
    default: '',
    validator: (v) => ['', 'grid', 'flex'].includes(v),
  },
  class: {
    type: [String, Array, Object],
    default: '',
  },
})

const baseClass = computed(() => [
  'section',
  `section-${props.variant}`,
  `align-${props.align}`,
  `pad-${props.padding}`,
  props.class,
])

const containerClass = computed(() => [
  'container',
  `max-${props.maxWidth}`,
  props.layout,
])
</script>

<style scoped>
/* Base padding overrides */
.pad-none { padding: 0; }
.pad-sm { padding: 2rem 1rem; }
.pad-md { padding: 4rem 1rem; }
.pad-lg { padding: 6rem 1rem; }
.pad-xl { padding: 8rem 1.5rem; }

/* Max-width overrides */
.max-sm { max-width: 540px; }
.max-md { max-width: 720px; }
.max-xl { max-width: 960px; }
.max-2xl { max-width: 1140px; }
.max-full { max-width: 100%; }
.max-none { max-width: none; }

/* Alignment */
.align-left { text-align: left; }
.align-center { text-align: center; }
.align-right { text-align: right; }

/* Background variants */
.section-light { background-color: var(--color-light); color: var(--color-text); }
.section-dark { background-color: var(--color-heading); color: white; }
.section-white { background-color: white; color: var(--color-text); }
.section-blue { background-color: var(--color-primary); color: white; }
.section-accent { background-color: var(--color-accent); color: white; }
.section-transparent { background-color: transparent; }

/* Grid/Flex helpers */
.grid { display: grid; gap: 2rem; }
.flex { display: flex; flex-wrap: wrap; gap: 2rem; }
</style>
