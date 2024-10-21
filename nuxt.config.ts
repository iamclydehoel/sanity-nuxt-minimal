// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-20',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/sanity'],
  runtimeConfig: {
    public: {
      previewUrl: process.env.NUXT_SANITY_PREVIEW_URL,
    },
  },
  sanity: {
    projectId: process.env.NUXT_SANITY_PROJECT_ID,
    dataset: process.env.NUXT_SANITY_DATASET,
    useCdn: true, // `false` if you want to ensure fresh data
    apiVersion: process.env.NUXT_SANITY_API_VERSION || '2024-10-20',
    visualEditing: {
      studioUrl: process.env.NUXT_SANITY_STUDIO_URL || 'http://localhost:3000/admin',
      token: process.env.NUXT_SANITY_API_READ_TOKEN,
      stega: true,
    },
  },
  routeRules: {
    '/admin/**': {
      ssr: false,
    },
  },
})
