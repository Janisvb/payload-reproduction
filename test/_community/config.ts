import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import { MediaCollection } from './collections/Media'
import { PostsCollection, postsSlug } from './collections/Posts'
import { MenuGlobal } from './globals/Menu'

export default buildConfigWithDefaults({
  // ...extend config here
  collections: [
    PostsCollection,
    MediaCollection,
    // ...add more collections here
  ],
  globals: [
    MenuGlobal,
    // ...add more globals here
  ],
  graphQL: {
    schemaOutputFile: './test/_community/schema.graphql',
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    await payload.create({
      collection: postsSlug,
      data: { text: 'post', type: 'post', categories: ['js'], categories_text: ['js'] },
    })
    await payload.create({
      collection: postsSlug,
      data: { text: 'page', type: 'page', categories: ['js', 'ts'], categories_text: ['js', 'ts'] },
    })
  },
})
