<template>
	<div class="flex">
		<nuxt-link v-if="showPrevious" :to="currentPage - 1 == 1 ? route.path : `${route.path}?page=${currentPage - 1}`">
			&larr;
			<span class="sr-only">Previous</span>
		</nuxt-link>

		<nuxt-link v-if="showNext" :to="`${route.path}?page=${currentPage + 1}`" class="ml-auto">
			&rarr;
			<span class="sr-only">Next</span>
		</nuxt-link>
	</div>
</template>

<script setup>
const route = useRoute()

const props = defineProps({
	currentPage: Number,
	limit: Number,
	total: Number,
})

const showPrevious = computed(() => {
	return props.currentPage > 1
})

const showNext = computed(() => {
	return props.currentPage * props.limit < props.total
})
</script>
