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
    "@formkit/auto-animate",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "notivue/nuxt",
  ],
  notivue: {
    position: "bottom-center",
  },
  phosphor: {
    expose: true,
    showList: true,
  },
  tailwindcss: {
    exposeConfig: true,
  },
  typescript: {
    shim: false,
  },
});
