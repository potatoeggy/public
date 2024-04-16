/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': theme('colors.gray[900]'),
              '--tw-prose-invert-body': theme('colors.gray[100]'),
              hr: {
                marginTop: "1.5em",
                marginBottom: "1.5em",
              },
              a: {
                textDecoration: "underline",
                fontWeight: "inherit",
              },
              "h1 a": {
                textDecoration: "inherit",
              },
              "h2 a": {
                textDecoration: "inherit",
              },
              "h3 a": {
                textDecoration: "inherit",
              },
              "h4 a": {
                textDecoration: "inherit",
              },
              "h5 a": {
                textDecoration: "inherit",
              },
              "h6 a": {
                textDecoration: "inherit",
              },
              "h1, h2, h3, h4, h5, h6": {
                fontFamily: "Bitter, sans-serif",
              },
            },
          ],
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
