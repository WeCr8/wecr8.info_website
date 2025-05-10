<template>
  <a href="#main-content" class="skip-link">Skip to content</a>
</template>

<style scoped>
.skip-link {
  position: absolute;
  left: -999px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.skip-link:focus {
  position: static;
  width: auto;
  height: auto;
  padding: 1rem;
  background: #1b365d;
  color: white;
  z-index: 9999;
}
</style>