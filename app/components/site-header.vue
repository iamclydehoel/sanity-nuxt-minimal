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
					<nuxt-link to="/about/" aria-label="About">About</nuxt-link>
					<nuxt-link to="/posts/" aria-label="Posts">Posts</nuxt-link>
					<nuxt-link to="/admin/" aria-label="Admin" target="_blank">Admin</nuxt-link>
				</nav>
			</div>
		</container>
	</header>
</template>
