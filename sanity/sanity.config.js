import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from '~~/sanity/schemas'
import './sanity.css'

const config = useRuntimeConfig()

export const projectId = config.public.sanity.projectId ?? ''
export const dataset = config.public.sanity.dataset ?? ''

export default defineConfig({
	name: 'default',
	title: 'Sanity Nuxt Minimal',

	basePath: '/admin',

	projectId,
	dataset,

	plugins: [structureTool(), visionTool()],

	schema: {
		types: schemaTypes,
	},
})
