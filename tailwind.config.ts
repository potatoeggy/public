import { Config } from "tailwindcss";

export default <Config>{
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
