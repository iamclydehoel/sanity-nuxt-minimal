import { defineField, defineType } from 'sanity'

export default defineType({
	name: 'media',
	title: 'Media',
	type: 'object',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'caption',
			title: 'Caption',
			type: 'string',
		}),
		defineField({
			name: 'width',
			title: 'Width',
			type: 'string',
			options: {
				list: [
					{
						title: 'Default',
						value: 'default',
					},
					{
						title: 'Wide',
						value: 'wide',
					},
				],
				layout: 'radio',
				direction: 'horizontal',
			},
			initialValue: 'default',
		}),
	],

	preview: {
		select: {
			caption: 'caption',
		},
		prepare(selection) {
			const { caption } = selection

			return {
				title: caption,
				subtitle: 'Media',
			}
		},
	},
})
