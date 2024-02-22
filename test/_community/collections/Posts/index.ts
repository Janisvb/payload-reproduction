import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

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
      name: 'posts',
      type: 'relationship',
      relationTo: postsSlug,
      hasMany: true,
    },
  ],
  slug: postsSlug,
}
