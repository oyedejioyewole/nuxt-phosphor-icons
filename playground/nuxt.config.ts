export default defineNuxtConfig({
  css: [
    "floating-vue/dist/style.css",
    "notivue/animations.css",
    "notivue/notifications.css",
  ],
  devtools: { enabled: true },
  googleFonts: {
    families: {
      "Courier Prime": true,
      Lora: [700],
      "Open Sans": [400, 500, 600],
    },
  },
  modules: [
    "../src/module",
    "floating-vue/nuxt",
    "notivue/nuxt",
    "@formkit/auto-animate",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@vueuse/nuxt",
  ],
  notivue: {
    position: "bottom-center",
  },
  phosphor: {
    prefix: "nuxt-icon",
    options: {
      components: {
        expose: true,
      },
    },
  },
  typescript: {
    shim: false,
  },
});
