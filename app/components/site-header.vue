<template>
	<header>
		<container>
			<div class="flex items-center justify-between">
				<div>
					<h1>
						<nuxt-link to="/" aria-label="Home">Sanity Nuxt Minimal</nuxt-link>
					</h1>
				</div>

				<nav class="flex gap-4">
					<template v-for="item in items" :key="item.label">
						<nuxt-link :to="item.to" :target="item.target">{{ item.label }}</nuxt-link>
					</template>
				</nav>
			</div>
		</container>
	</header>
</template>

<script setup>
const items = [
	{ label: 'About', to: '/about/' },
	{ label: 'Posts', to: '/posts/' },
	{ label: 'Admin', to: '/admin/', target: '_blank' },
]
</script>
