// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@unocss/nuxt',
  ],
  css: ["@unocss/reset/tailwind-compat.css"],
  routeRules: {
    "/": { prerender: true }
  }
})
