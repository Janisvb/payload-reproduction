import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'text',
      type: 'text',
      localized: true,
    },
    {
      name: 'date',
      type: 'date',
      localized: true,
    },
  ],
  slug: postsSlug,
}
