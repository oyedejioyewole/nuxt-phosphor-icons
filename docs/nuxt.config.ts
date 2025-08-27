export default defineNuxtConfig({
  extends: [['github:oyedejioyewole/nuxt-pastel-docs', { install: true }]],
  vue: {
    compilerOptions: {
      isCustomElement: tag => tag.startsWith('swiper-'),
    },
  },
  site: {
    url: 'https://nuxt-phosphor-icons.vercel.app',
  },
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
})
