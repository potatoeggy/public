import { defineNuxtConfig } from "nuxt";
import svgLoader from "vite-svg-loader";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxtjs/sitemap",
  ],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  typescript: {
    shim: false,
  },
  sitemap: {
    hostname: process.env.BASE_URL || "https://eggworld.tk",
  },
  tailwindcss: {},
  colorMode: {
    classSuffix: "",
  },
  vite: {
    plugins: [svgLoader()],
  },
  head: {
    meta: [
      { name: "viewport", content: " width=device-width,initial-scale=1" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  content: {
    documentDriven: false,
    highlight: {
      theme: "dracula",
    },
  },
});
