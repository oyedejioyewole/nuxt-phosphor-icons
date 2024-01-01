export default defineNuxtConfig({
  css: ["notivue/animations.css", "notivue/notifications.css"],
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
    expose: true,
    prefix: "nuxt-icon",
    showList: true,
  },
  typescript: {
    shim: false,
  },
});
