import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  versions: false,
  fields: [
    {
      name: 'category',
      type: 'select',
      hasMany: true,
      options: [
        { value: 'a', label: 'A' },
        { value: 'b', label: 'B' },
      ],
    },
    {
      type: 'group',
      name: 'settings',
      fields: [
        {
          name: 'category',
          type: 'select',
          hasMany: true,
          options: [
            { value: 'a', label: 'A' },
            { value: 'b', label: 'B' },
          ],
        },
      ],
    },
  ],
}
