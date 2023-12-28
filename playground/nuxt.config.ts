export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["../src/module"],
  phosphor: {
    prefix: "nuxt-icon",
    options: {
      components: {
        expose: true,
      },
    },
  },
});
