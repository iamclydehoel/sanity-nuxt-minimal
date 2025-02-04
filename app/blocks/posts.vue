<template>
	<section>
		<container>
			<div class="grid">
				<template v-for="item in post?.items">
					<article class="relative">
						<time :datetime="$dateFns.format(new Date(item.publishedAt), 'yyyy-MM-dd')">
							{{ $dateFns.format(new Date(item.publishedAt), 'do MMMM, y') }}
						</time>

						<h2>
							<nuxt-link :to="`/post/${item.slug.current}/`">
								{{ item.name }}
								<span class="absolute inset-0" />
							</nuxt-link>
						</h2>

						<template v-if="item.excerpt">
							<div class="prose">
								<sanity-content :blocks="item.excerpt" />
							</div>
						</template>

						<template v-if="item.category">
							<div class="flex">
								<template v-for="category in item.category">
									<span>{{ category.name }}</span>
								</template>
							</div>
						</template>
					</article>
				</template>

				<template v-if="data.pagination && data.limit < post?.total">
					<pagination :current-page="parseInt(route.query.page || 1)" :limit="data.limit" :total="post?.total" />
				</template>
			</div>
		</container>
	</section>
</template>

<script setup>
const props = defineProps({
	data: Object,
})

const route = useRoute()

const start = ref()
const end = ref()

const setStartEnd = () => {
	start.value = props.data.limit * (parseInt(route.query.page) || 1) - props.data.limit
	end.value = props.data.limit * (parseInt(route.query.page) || 1) - 1
}

setStartEnd()

watch(
	() => route.query,
	() => {
		setStartEnd()
	},
)

const query = groq`{
	"items": *[_type == "post"] | order(publishedAt desc)[$start..$end] {
	  ...,
		"category": category[]->
	},
	"total": count(*[_type == "post"])
}`

const { data: post } = useSanityQuery(query, {
	start: start,
	end: end,
})
</script>
