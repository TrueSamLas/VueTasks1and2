<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="wrapper">
    <header>
      <nav>
        <RouterLink to="/">Главная</RouterLink>
        <RouterLink to="/toggle">toggle</RouterLink>
        <RouterLink to="/toggle2">toggle2</RouterLink>
        <RouterLink to="/toggle3">toggle3</RouterLink>
        <RouterLink to="/summ">summ</RouterLink>
        <RouterLink to="/threeArgs">threeArgs</RouterLink>
        <RouterLink to="/multipleNumber">multipleNumber</RouterLink>
        <RouterLink to="/hipotenuse">hipotenuse</RouterLink>
        <RouterLink to="/cycles">cycles</RouterLink>
        <RouterLink to="/cyclesANDmassives">cyclesANDmassives</RouterLink>
      </nav>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  min-width: 1024px;
  width: 100%;
  display: grid;
  justify-items: start;
  grid-template-columns: 1fr 1fr 3fr;
  align-items: flex-start;
  align-content: space-evenly;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.main {
  text-align: center;
  margin-top: 2rem;
  text-transform: uppercase;
  font-weight: 600;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
