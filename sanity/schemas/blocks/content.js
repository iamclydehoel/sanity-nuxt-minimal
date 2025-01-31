import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'content',
	title: 'Content',
	type: 'object',
	fields: [
		defineField({
			name: 'copy',
			title: 'Copy',
			type: 'richText',
		}),
	],

	preview: {
		select: {
			copy: 'copy',
		},
		prepare(selection) {
			const { copy } = selection

			return {
				title: copy ? copy[0]?.children[0]?.text : '',
				subtitle: 'Content',
			}
		},
	},
})
