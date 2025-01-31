<template>
	<div class="mx-auto px-8" :class="widthClasses">
		<slot />
	</div>
</template>

<script setup>
const props = defineProps({
	width: String,
})

const widthClasses = computed(() => {
	const widths = {
		wide: 'max-w-6xl',
		default: 'max-w-4xl',
	}

	return widths[props.width] || widths.default
})
</script>
