<template>
  <div class="default-layout">
    <nav>
      <NuxtLink to="/">
        Home
      </NuxtLink>
      <NuxtLink to="/admin">
        Admin Panel
      </NuxtLink>
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
