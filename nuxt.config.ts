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
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
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
    reactivityTransform: true,
  },
  target: "static",
  ssr: true,
});
