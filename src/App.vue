<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <img alt="WeCr8 Logo" class="logo" src="@/assets/WeCr8 Solutions.png" width="125" height="125" />
    <nav class="navigation">
      <RouterLink to="/" exact-active-class="active">Home</RouterLink>
      <RouterLink to="/about" exact-active-class="active">About</RouterLink>
    </nav>
  </header>

  <main class="main-content">
    <RouterView />
  </main>
</template>

<style scoped>
.app-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1b365d;
  padding: 1rem;
}

.logo {
  margin-bottom: 1rem;
}

.navigation {
  text-align: center;
  font-size: 1rem;
}

.navigation a {
  display: inline-block;
  padding: 0 1rem;
  color: #fff;
  text-decoration: none;
}

.navigation a.active {
  font-weight: bold;
  color: #f05727;
}

@media (min-width: 1024px) {
  .app-header {
    flex-direction: row;
    justify-content: space-between;
  }

  .logo {
    margin: 0;
  }

  .navigation {
    margin-left: 2rem;
  }
}
</style>