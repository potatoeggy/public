import { defineNuxtConfig } from "nuxt/config";
import svgLoader from "vite-svg-loader";
// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@funken-studio/sitemap-nuxt-3",
  ],
  nitro: {
    prerender: {
      routes: ["/sitemap.xml"],
    },
  },
  typescript: {
    shim: false,
  },
  /* @ts-expect-error */
  sitemap: {
    hostname: process.env.BASE_URL || "https://eggworld.me",
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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
      },
    ],
    script: [
      {
        defer: true,
        src: "/script.js",
        hid: "stupidEmergencyScript",
        type: "module",
      },
    ],
  },
  content: {
    documentDriven: false,
    highlight: {
      theme: "dracula",
      preload: [
        "python",
        "ts",
        "js",
        "sh",
        "batch",
        "c",
        "cpp",
        "dart",
        "diff",
        "docker",
        "git-commit",
        "git-rebase",
        "go",
        "ini",
        "java",
        "json",
        "jsx",
        "latex",
        "md",
        "nginx",
        "rs",
        "sql",
        "toml",
        "tsx",
        "vue-html",
        "vue",
        "yaml",
        "xml",
      ],
    },
    markdown: {
      remarkPlugins: ["remark-math"],
      rehypePlugins: [["rehype-katex", { output: "html" }]],
    },
  },
  experimental: {
    noScripts: true,
  },
});
