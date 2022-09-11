/**
 * Set the page title in the format [title] | Eggworld.
 * @param title The title string.
 */
export function useTitle(title: string, description?: string) {
  useHead({
    title: `${title} | Eggworld`,
    meta: [
      { name: "viewport", content: " width=device-width,initial-scale=1" },
      { name: "description", content: description || "" },
      { name: "theme-color", content: "#ffffff" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
      },
    ],
  });
}
