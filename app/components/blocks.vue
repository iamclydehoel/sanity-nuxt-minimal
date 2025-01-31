<template>
	<component v-for="block in data" :is="block._type" :data="block" :key="block._key" />
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>
