<template>
  <div class="default-layout">
    <nav>
      <NuxtLink to="/">Home</NuxtLink>
      <!-- Nuxt Link had troubles -->
      <a href="/admin">Admin Panel</a>
    </nav>
    <NuxtPage />
  </div>
</template>
<style lang="css">
.default-layout {
  nav {
    display: flex;
    gap: 1ch;
    margin-bottom: 1rem;
  }
}
</style>