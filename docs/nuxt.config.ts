export default defineNuxtConfig({
  modules: [
    '@formkit/auto-animate/nuxt',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
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
  colorMode: { classSuffix: '' },
  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            dark: 'github-dark',
            default: 'github-light',
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
