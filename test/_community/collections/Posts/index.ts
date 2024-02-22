import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'type',
      type: 'select',
      options: [
        { value: 'page', label: 'Page' },
        { value: 'post', label: 'Post' },
      ],
    },
    {
      name: 'categories',
      type: 'select',
      hasMany: true,
      options: [
        { value: 'js', label: 'JS' },
        { value: 'ts', label: 'TS' },
      ],
    },
    {
      name: 'categories_text',
      type: 'text',
      hasMany: true,
    },
  ],
  slug: postsSlug,
}
