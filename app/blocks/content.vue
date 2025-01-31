<template>
	<section>
		<container>
			<div class="prose">
				<sanity-content :blocks="data.copy" />
			</div>
		</container>
	</section>
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>
