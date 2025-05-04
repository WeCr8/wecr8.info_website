<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav class="navigation">
        <RouterLink to="/" exact-active-class="active">Home</RouterLink>
        <RouterLink to="/about" exact-active-class="active">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
.app-header {
  line-height: 1.5;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.logo {
  margin: 0 auto 2rem;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.navigation {
  font-size: 14px;
  margin-top: 1rem;
  text-align: center;
}

.navigation a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  color: inherit;
  text-decoration: none;
}

.navigation a:first-of-type {
  border-left: none;
}

.navigation a.active {
  color: var(--color-text);
  font-weight: bold;
}

@media (min-width: 1024px) {
  .app-header {
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem 2rem;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  .wrapper {
    flex-direction: row;
    align-items: center;
  }

  .navigation {
    margin-top: 0;
    font-size: 1rem;
    margin-left: 2rem;
  }
}
</style>