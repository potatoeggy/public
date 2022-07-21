import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  typescript: {
    shim: false,
  },
  tailwindcss: {},
});
