import type { CollectionConfig } from '../../../../packages/payload/src/collections/config/types'
import { mediaSlug } from '../Media'
import { APIError } from '../../../../packages/payload/src/errors'

export const postsSlug = 'posts'

const beforeChangeHook = async ({ data, req, operation, originalDoc }) => {
  if (!data.text) throw new APIError('error while saving', 400, null, true) // public error
}

export const PostsCollection: CollectionConfig = {
  versions: { drafts: { autosave: true } },
  hooks: {
    beforeChange: [beforeChangeHook],
  },
  fields: [
    {
      name: 'text',
      type: 'text',
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
