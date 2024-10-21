<script lang="ts" setup>
interface HomePage {
  title: string
  text: string
}
const query = groq`*[_type == "home"][0] {
  title,
  text
}`
const { data } = await useSanityQuery<HomePage>(query)
</script>

<template>
  <div>
    <h1 v-if="data?.title">
      {{ data.title }}
    </h1>
    <p v-if="data?.text">
      {{ data.text }}
    </p>
  </div>
</template>

<style lang="postcss" scoped>
p {
  white-space: pre-wrap;
}
</style>
