<template>
	<main>
		<blocks :data="page?.blocks" />
	</main>
</template>

<script setup>
const route = useRoute()

const query = groq`*[_type == "page" && slug.current == $slug][0] {
 ...,
}`

const { data: page } = await useSanityQuery(query, {
	slug: route.params.slug || 'home',
})
</script>
