export default defineNuxtConfig({
  colorMode: { classSuffix: "" },
  content: {
    defaultLocale: "en-US",
    highlight: {
      theme: "one-dark-pro",
      preload: ["bash", "ts"],
    },
  },
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
    "@formkit/auto-animate/nuxt",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "notivue/nuxt",
    "nuxt-og-image",
    "nuxt-phosphor-icons",
  ],
  notivue: {
    position: "bottom-center",
  },
  phosphor: {
    expose: true,
    showList: true,
  },
  routeRules: {
    "/**": { isr: true },
  },
  site: {
    url: "https://nuxt-phosphor-icons.vercel.app",
  },
  tailwindcss: { exposeConfig: true },
  typescript: {
    shim: false,
  },
});
