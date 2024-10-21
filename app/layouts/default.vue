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
    <SanityPreviewMode />
  </div>
</template>

<style lang="postcss" scoped>
.default-layout {
  font-family:
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Open Sans',
    'Helvetica Neue',
    sans-serif;
  nav {
    display: flex;
    gap: 1ch;
    margin-bottom: 1rem;
  }
}
</style>
