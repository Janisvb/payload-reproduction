import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  versions: { drafts: true },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
  slug: postsSlug,
}
