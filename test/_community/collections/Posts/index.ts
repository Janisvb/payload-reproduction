import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  slug: postsSlug,
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
}
