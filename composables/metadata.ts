/**
 * Set the page title in the format [title] | Eggworld.
 * @param title The title string.
 */
export function useTitle(title: string) {
  useHead({ title: `${title} | Eggworld` });
}
