export default defineNuxtConfig({
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    'nuxt-og-image',
    '../src/module',
  ],
  devtools: { enabled: true },
  app: {
    head: {
      titleTemplate: '%s · nuxt-phosphor-icons',
      link: [
        { rel: 'icon', href: './favicon.svg' },
      ],
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-'),
    },
  },
  site: {
    url: 'https://nuxt-phosphor-icons.vercel.app',
  },
  colorMode: { classSuffix: '' },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            dark: 'vitesse-dark',
            default: 'vitesse-light',
          },
        },
      },
    },
  },
  compatibilityDate: '2025-07-19',
  phosphorIcons: {
    showList: true,
  },
})
