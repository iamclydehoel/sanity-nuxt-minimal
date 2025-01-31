<template>
	<div ref="studio" class="fixed inset-0">
		<nuxt-page />
	</div>
</template>

<script setup>
import config from '~~/sanity/sanity.config'
import { renderStudio } from 'sanity'

const studio = ref(null)

onMounted(() => {
	if (studio.value) {
		renderStudio(studio.value, config)
	}
})
</script>
