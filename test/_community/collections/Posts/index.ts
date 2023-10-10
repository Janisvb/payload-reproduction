import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  fields: [
    {
      name: 'text',
      type: 'array',
      fields: [{ type: 'text', name: 'text' }],
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'Tab',
          fields: [
            {
              name: 'text',
              type: 'array',
              fields: [{ type: 'text', name: 'text' }],
            },
          ],
        },
      ],
    },
  ],
}
