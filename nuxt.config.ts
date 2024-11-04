// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // nuxt.config.js
  build: {
    // vue-toastification - old commonjs module
    transpile: ["vue-toastification"],
  },
});
