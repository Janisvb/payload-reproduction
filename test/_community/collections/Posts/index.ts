import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'

import { mediaSlug } from '../Media'

export const postsSlug = 'posts'

export const PostsCollection: CollectionConfig = {
  admin: {
    useAsTitle: 'text',
  },
  defaultSort: 'updatedAt',
  fields: [
    {
      name: 'text',
      type: 'text',
    },
    {
      name: 'post',
      type: 'relationship',
      relationTo: 'posts',
    },
    {
      name: 'associatedMedia',
      access: {
        create: () => true,
        update: () => false,
      },
      relationTo: mediaSlug,
      type: 'upload',
    },
  ],
  slug: postsSlug,
}
