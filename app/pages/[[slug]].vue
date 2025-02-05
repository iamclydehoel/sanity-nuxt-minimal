<template>
	<main>
		<blocks :data="page?.blocks" />
	</main>
</template>

<script setup>
const route = useRoute()

const image = useImage()

const query = groq`*[_type == "page" && slug.current == $slug][0] {
  ...,
  blocks[] {
    ...,
    defined(image) => {
      "image": image.asset->
    },
  },
}`

const { data: page } = await useSanityQuery(query, {
	slug: route.params.slug || 'home',
})

useSeoMeta({
	title: () => page?.value?.meta?.title ?? `${page?.value?.name} — Sanity Nuxt Minimal`,
	description: () => page?.value?.meta?.description ?? '',
	ogImage: () => (page?.value?.meta?.image ? image(page.value.meta.image.asset._ref, { width: 1200, height: 630 }) : ''),
})
</script>
