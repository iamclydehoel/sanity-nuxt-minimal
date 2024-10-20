<script lang="ts" setup>
import { renderStudio } from "sanity";
import config from "~~/sanity/sanity.config";

const studio = ref<HTMLElement | null>(null)
onMounted(() => {
  if (studio.value) {
    renderStudio(studio.value, config);
  }
})
</script>

<template>
  <div class="studio" ref="studio" />
</template>
<style lang="css">
html, 
body,
#__nuxt,
.studio {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>