// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: '.',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/rtt.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/rtt.png' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/rtt.png' }
      ]
    }
  }
})


