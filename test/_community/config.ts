import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser, regularUser } from '../credentials'
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
  },

  onInit: async (payload) => {
    await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    const englishAuthor = await payload.create({
      collection: 'users',
      data: {
        email: 'english@author.com',
        password: 'test',
      },
    })

    const germanAuthor = await payload.create({
      collection: 'users',
      data: {
        email: 'german@author.com',
        password: 'test',
      },
    })

    // create post 1 in locale en with user1 as author
    const post = await payload.create({
      collection: postsSlug,
      data: {
        text: 'example post 1 (EN)',
        author: englishAuthor.id,
      },
      locale: 'en',
    })

    // update post 1 in locale de with user2 as author
    await payload.update({
      collection: postsSlug,
      id: post.id,
      data: {
        text: 'example post 1 (DE)',
        author: germanAuthor.id,
      },
      locale: 'de',
    })

    // create post 2 in locale en with user1 as author
    await payload.create({
      collection: postsSlug,
      data: {
        text: 'example post 2 (EN)',
        author: englishAuthor.id,
      },
      locale: 'en',
    })
  },
})
