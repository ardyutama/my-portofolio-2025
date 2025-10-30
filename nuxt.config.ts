// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  googleFonts: {
    preload: true,
    families: {
      Sora: [400, 600, 700],
      "IBM Plex Sans": [400, 600, 700]
    },
    display: 'swap',
    download: true,
    inject: true
  },
  css: [
    '~/assets/scss/main.scss'
  ],
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],
})