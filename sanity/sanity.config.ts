import { visionTool } from '@sanity/vision'
import { schemaTypes } from '~~/sanity/schemas'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

const config = useRuntimeConfig()

export const projectId = config.public.sanity.projectId ?? ''
export const dataset = config.public.sanity.dataset ?? ''

export default defineConfig({
  name: 'default',
  title: 'Nuxt Sanity Embed',

  basePath: '/admin',

  projectId,
  dataset,

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
