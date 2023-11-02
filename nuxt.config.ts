// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '~/modules/sign-in/module.ts',
    '~/modules/sign-up/module.ts',
    '~/modules/main/module.ts',
    '~/modules/forgot-password/module.ts'
  ]
})
