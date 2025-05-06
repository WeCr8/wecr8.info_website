<template>
  <section class="section-blue">
    <div class="container text-center">
      <h1>{{ title }}</h1>
      <p v-if="subtext">{{ subtext }}</p>
      <slot /> <!-- Optional custom content -->
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, required: true },
  subtext: { type: String, default: '' },
})
</script>

<style scoped>
/* Uses global styles for .section-blue */
</style>
