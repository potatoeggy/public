/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: [
            {
              hr: {
                marginTop: "1.5em",
                marginBottom: "1.5em",
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
