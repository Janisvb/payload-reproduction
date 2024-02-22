import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import { MediaCollection } from './collections/Media'
import { PostsCollection, postsSlug } from './collections/Posts'
import { MenuGlobal } from './globals/Menu'

const locales = ['en', 'de']

const randomNumber = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

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
    locales: locales,
    defaultLocale: 'en',
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    for (let i = 0; i < 100; i++) {
      let en = await payload.create({
        collection: postsSlug,
        data: {
          text: '' + randomNumber(100, 999),
          text_localized: '' + randomNumber(100, 999),
        },
        locale: 'en',
      })

      await payload.update({
        collection: postsSlug,
        id: en.id,
        data: {
          text_localized: '' + randomNumber(100, 999),
        },
        locale: 'de',
      })
    }
  },
})
