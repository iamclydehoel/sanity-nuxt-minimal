import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'meta',
	title: 'Meta',
	description: ' ',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'description',
			title: 'Description',
			type: 'text',
			rows: 3,
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
		}),
	],
})
