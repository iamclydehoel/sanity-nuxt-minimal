import { defineField, defineType } from 'sanity'
import meta from '../groups/meta'

export default defineType({
	name: 'page',
	title: 'Page',
	type: 'document',
	groups: [
		{
			name: 'content',
			title: 'Content',
			default: true,
		},
		{
			name: 'seo',
			title: 'SEO',
		},
	],
	fields: [
		defineField({
			name: 'name',
			title: 'Name',
			type: 'string',
			group: 'content',
		}),
		defineField({
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: {
				source: 'name',
				maxLength: 96,
			},
			group: 'content',
		}),
		defineField({
			name: 'blocks',
			title: 'Blocks',
			description: ' ',
			type: 'array',
			of: [{ type: 'content' }, { type: 'media' }, { type: 'posts' }],
			group: 'content',
		}),
		defineField({
			...meta,
			group: 'seo',
		}),
	],
})
