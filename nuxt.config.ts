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
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_tokens.scss" as *; @use "~/assets/scss/_mixins.scss" as *;'
        }
      }
    }
  },
  modules: ['@nuxtjs/google-fonts', '@nuxt/image', '@nuxt/content'],
})