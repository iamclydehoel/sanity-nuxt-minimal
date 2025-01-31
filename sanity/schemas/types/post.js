import { defineField, defineType } from 'sanity'
import meta from '../groups/meta'

export default defineType({
	name: 'post',
	title: 'Post',
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
			name: 'publishedAt',
			title: 'Published at',
			type: 'datetime',
			group: 'content',
		}),
		defineField({
			name: 'excerpt',
			title: 'Excerpt',
			type: 'richText',
			group: 'content',
		}),
		defineField({
			name: 'category',
			title: 'Category',
			type: 'array',
			of: [{ type: 'reference', to: [{ type: 'category' }] }],
			group: 'content',
		}),
		defineField({
			name: 'blocks',
			title: 'Blocks',
			description: ' ',
			type: 'array',
			of: [{ type: 'content' }, { type: 'media' }],
			group: 'content',
		}),
		defineField({
			...meta,
			group: 'seo',
		}),
	],

	orderings: [
		{
			title: 'Published at',
			by: [
				{
					field: 'publishedAt',
					direction: 'desc',
				},
			],
		},
	],
})
