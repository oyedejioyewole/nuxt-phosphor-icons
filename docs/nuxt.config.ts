export default defineNuxtConfig({
  content: {
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
    "nuxt-phosphor-icons",
    "@formkit/auto-animate/nuxt",
    "@nuxt/content",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
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
  typescript: {
    shim: false,
  },
});
