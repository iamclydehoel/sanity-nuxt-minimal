<template>
	<main>
		<blocks :data="post?.blocks" />
	</main>
</template>

<script setup>
const route = useRoute()

const image = useImage()

const query = groq`*[_type == "post" && slug.current == $slug][0] {
  ...,
  blocks[] {
    ...,
    defined(image) => {
      "image": image.asset->
    },
  },
}`

const { data: post } = await useSanityQuery(query, {
	slug: route.params.slug || 'home',
})

useSeoMeta({
	title: () => post?.value?.meta?.title ?? `${post?.value?.name} — Sanity Nuxt Minimal`,
	description: () => post?.value?.meta?.description ?? '',
	ogImage: () => (post?.value?.meta?.image ? image(post.value.meta.image.asset._ref, { width: 1200, height: 630 }) : ''),
})
</script>
