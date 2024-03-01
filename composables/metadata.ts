/**
 * Set the page title in the format [title] | [site name].
 * @param title The title string.
 */
export function useTitle(title: string, description?: string) {
  useHead({
    title: `${title} | Oeufs?`,
    meta: [
      { name: "viewport", content: " width=device-width,initial-scale=1" },
      { name: "description", content: description ?? "" },
    ],
  });
}
