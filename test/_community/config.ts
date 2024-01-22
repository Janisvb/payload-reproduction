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

  localization: {
    locales: [
      { code: 'en', label: 'English' },
      { code: 'de', label: 'German' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    for (let i = 1; i <= 100; i++) {
      const post = await payload.create({
        collection: postsSlug,
        data: {
          text: 'EN ' + i,
          date: new Date(),
        },
        locale: 'en',
      })

      await payload.update({
        id: post.id,
        collection: postsSlug,
        data: {
          text: 'DE ' + i,
          date: new Date(),
        },
        locale: 'de',
      })
    }
  },
})
