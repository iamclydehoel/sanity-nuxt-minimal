// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-10-20',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4,
  },
  modules: ['@nuxtjs/sanity'],
  sanity: {
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: process.env.SANITY_DATASET,
    apiVersion: '2024-10-20',
  },
  routeRules: {
    '/admin/**': {
      ssr: false,
    },
  },
})
