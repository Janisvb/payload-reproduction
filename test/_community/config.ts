import type { Media, Menu, Post, User } from './payload-types'

import { buildConfigWithDefaults } from '../buildConfigWithDefaults'
import { devUser } from '../credentials'
import { MediaCollection } from './collections/Media'
import { PostsCollection, postsSlug } from './collections/Posts'
import { MenuGlobal } from './globals/Menu'

declare module '../../packages/payload/src/index' {
  export interface GeneratedTypes {
    collections: {
      media: Media
      posts: Post
      users: User
    }
    globals: {
      menu: Menu
    }
  }
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

  onInit: async (payload) => {
    const user = await payload.create({
      collection: 'users',
      data: {
        email: devUser.email,
        password: devUser.password,
      },
    })

    const post = await payload.create({
      collection: postsSlug,
      data: {
        text: 'example post',
        authors: [user.id],
      },
    })

    // not working
    await payload.update<Post>({
      collection: postsSlug,
      id: post.id,
      data: {
        authors: [],
      },
    })

    // also not working
    await payload.update<Post>({
      collection: postsSlug,
      id: post.id,
      data: {
        authors: null,
      },
    })
  },
})
