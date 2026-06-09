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
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/rtt.png' },
        { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/rtt.png' },
        { rel: 'apple-touch-icon', href: '/rtt.png' },

        // fallback (recommended)
        { rel: 'icon', href: '/favicon.ico' }
      ]
    }
  }
})


