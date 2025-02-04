<template>
	<section>
		<container :width="data.width">
			<template v-if="data.image._id">
				<nuxt-img :src="data.image._id" :alt="data.caption" sizes="100vw sm:100vw md:100vw lg:100vw xl:100vw" :height="data.image.metadata.dimensions.height" :width="data.image.metadata.dimensions.width" :placeholder="data.image.metadata.lqip" :style="{ 'aspect-ratio': `${data.image.metadata.dimensions.width} / ${data.image.metadata.dimensions.height}` }" placeholder-class="object-cover" class="select-none" loading="lazy" />
			</template>
		</container>
	</section>
</template>

<script setup>
const props = defineProps({
	data: Object,
})
</script>
