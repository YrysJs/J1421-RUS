// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: { 
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'ru'
      },
      title: 'asd',
      meta: [
        { name: 'description', content: 'pages for jobSolutions'},
        { name: 'keywords', content: 'pages for jobSolutions'},
      ]
    },
    pageTransition: {
      name: 'page', mode: 'out-in'
    }
  },
  ssr: true,
  modules: [
    '@pinia/nuxt',
    '~/modules/auth/module.ts',
    '~/modules/main/module.ts',
    '~/modules/support/module.ts',
    '~/modules/profile/module.ts',
    '~/modules/my-review/module.ts',
    '~/modules/add-review/module.ts',
  ]
})
