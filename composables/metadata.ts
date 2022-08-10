/**
 * Set the page title in the format [title] | Eggworld.
 * @param title The title string.
 */
export function useTitle(title: string) {
  useHead({
    title: `${title} | Eggworld`,
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css",
      },
    ],
  });
}
