import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
	nitro: { preset: 'netlify-static' },
	devtools: { enabled: false },
	future: { compatibilityVersion: 4 },

	components: [
		{
			global: true,
			path: '~/blocks/',
			pathPrefix: false,
		},
		{
			path: '~/components/',
			pathPrefix: false,
		},
	],

	css: ['~/assets/styles/app.css'],

	vite: {
		plugins: [tailwindcss()],
	},

	modules: ['nuxt-date-fns', '@nuxt/image', '@nuxtjs/sanity'],

	image: {
		provider: 'sanity',
		sanity: {
			projectId: process.env.NUXT_SANITY_PROJECT_ID,
		},
		domains: ['cdn.sanity.io'],
		densities: [1, 2],
		quality: 100,
	},

	sanity: {
		projectId: process.env.NUXT_SANITY_PROJECT_ID,
		dataset: process.env.NUXT_SANITY_DATASET || 'production',
		apiVersion: process.env.NUXT_SANITY_API_VERSION || '2025-01-31',
		useCdn: false,
	},

	routeRules: {
		'/admin/**': {
			ssr: false,
		},
	},
})
