<script lang="ts" setup>
import config from '~~/sanity/sanity.config'
import { renderStudio } from 'sanity'

const studio = ref<HTMLElement | null>(null)
onMounted(() => {
  if (studio.value) {
    renderStudio(studio.value, config)
  }
})
</script>

<template>
  <div ref="studio" class="studio" />
</template>

<style lang="postcss">
.studio {
  position: fixed;
  inset: 0;
}
</style>
