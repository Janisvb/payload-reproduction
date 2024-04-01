import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  fields: [
    {
      name: 'text',
      type: 'text',
      localized: true,
    },
    {
      name: 'author',
      relationTo: 'users',
      type: 'relationship',
      localized: true,
    },
  ],
  slug: postsSlug,
}
