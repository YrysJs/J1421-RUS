// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '~/modules/auth/module.ts',
    '~/modules/main/module.ts',
    '~/modules/support/module.ts',
    '~/modules/profile/module.ts',
    '~/modules/my-review/module.ts',
  ]
})
