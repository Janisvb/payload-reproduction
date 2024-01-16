import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  versions: { drafts: true },
  admin: {
    useAsTitle: 'text',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'relation',
      type: 'relationship',
      relationTo: 'posts',
    },
  ],
  slug: postsSlug,
}
