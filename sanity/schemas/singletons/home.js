import {HomeIcon} from '@sanity/icons'

const TITLE = 'Home'

export const home = {
  name: 'home',
  type: 'document',
  title: TITLE,
  icon: HomeIcon,
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Text',
      name: 'text',
      type: 'text',
    },
  ],
  preview: {
    prepare() {
      return {
        title: TITLE,
      }
    },
  },
}
