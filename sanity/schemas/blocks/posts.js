import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'posts',
	title: 'Posts',
	type: 'object',
	fields: [
		defineField({
			name: 'limit',
			title: 'Limit',
			type: 'number',
			initialValue: 3,
			validation: (Rule) => Rule.integer().min(3),
		}),
		defineField({
			name: 'pagination',
			title: 'Pagination',
			type: 'boolean',
			initialValue: false,
		}),
	],

	preview: {
		select: {
			limit: 'limit',
		},
		prepare(selection) {
			const { limit } = selection

			return {
				title: `${limit > 99 ? 'All' : limit} articles`,
				subtitle: 'Posts',
			}
		},
	},
})
