<script setup lang="ts">
const route = useRoute()
const { enabled, inFrame } = useSanityVisualEditingState()
</script>

<template>
  <a
    v-if="enabled && !inFrame"
    :href="`/preview/disable?redirect=${route.fullPath}`"
    class="preview-toggle"
  >
    <span>Preview Enabled</span>
    <span>Disable Preview</span>
  </a>
</template>

<style lang="postcss" scoped>
.preview-toggle {
  backdrop-filter: blur(12px);
  border-radius: 0.25rem;
  bottom: 1rem;
  box-shadow:
    0 4px 5px -3px rgba(0, 0, 0, 0.1),
    0 2px 3px -1px rgba(0, 0, 0, 0.05);
  color: #1f2937;
  display: block;
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.5rem;
  position: fixed;
  right: 1rem;
  text-align: center;
  text-decoration: none;
  z-index: 50;
  background-color: #ffff00;
}

.preview-toggle:hover {
  background-color: #ef4444;
  color: #ffffff;
}

.preview-toggle span:first-child {
  display: block;
}
.preview-toggle:hover span:first-child {
  display: none;
}

.preview-toggle span:last-child {
  display: none;
}
.preview-toggle:hover span:last-child {
  display: block;
}
</style>
