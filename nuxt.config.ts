// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  srcDir: '.',
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  pages: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  css: ['~/assets/css/tailwind.css'],
  googleFonts: {
    families: {
      'Plus+Jakarta+Sans': [300, 400, 500, 600, 700, 800],
      'Outfit': [400, 500, 600, 700, 800, 900]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },
  app: {
    head: {
      title: 'RTT Constructors CORP - Construction & Project Management Excellence',
      meta: [
        { name: 'description', content: 'RTT Constructors CORP delivers high-quality civil, structural, and fit-out projects. Certified project management, site safety, and quality assurance for commercial and industrial structures.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/rtt.png' },
        { rel: 'shortcut icon', type: 'image/png', href: '/rtt.png' },
        { rel: 'apple-touch-icon', type: 'image/png', href: '/rtt.png' }
      ]
    }
  }
})


