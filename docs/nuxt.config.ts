export default defineNuxtConfig({
  content: {
    defaultLocale: "en-US",
    highlight: {
      theme: "one-dark-pro",
      preload: ["bash", "ts"],
    },
  },
  css: ["floating-vue/dist/style.css"],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Courier Prime": true,
      Lora: [700],
      "Open Sans": [400, 500, 600],
    },
  },
  modules: [
    "floating-vue/nuxt",
    "nuxt-og-image",
    "nuxt-phosphor-icons",
    "@formkit/auto-animate/nuxt",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
  ],
  phosphor: {
    options: {
      components: {
        expose: true,
      },
    },
  },
  routeRules: {
    "/**": { isr: true },
  },
  site: {
    url: "https://nuxt-phosphor-icons.vercel.app",
  },
  typescript: {
    shim: false,
  },
});
