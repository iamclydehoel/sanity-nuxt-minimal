<script lang="ts" setup>
const query = groq`*[_type == "home"][0]`
const { data } = useSanityQuery(query)
</script>
<template>
  <div>
    <h1>{{ data.title }}</h1>
    <p>{{ data.text }}</p>
  </div>
</template>