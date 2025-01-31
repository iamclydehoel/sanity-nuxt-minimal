<template>
	<section>
		<container :width="data.width">
			<template v-if="data.image.id">
				<nuxt-img :src="data.image.id" :alt="data.caption" sizes="100vw sm:50vw" :height="data.image.metadata.dimensions.height" :width="data.image.metadata.dimensions.width" :placeholder="data.image.metadata.lqip" :style="{ 'aspect-ratio': `${data.image.metadata.dimensions.width} / ${data.image.metadata.dimensions.height}` }" placeholder-class="placeholder" class="select-none" loading="lazy" />
			</template>
		</container>
	</section>
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>
