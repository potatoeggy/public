export type Language =
  | "python"
  | "javascript"
  | "java"
  | "typescript"
  | "vue"
  | "react"
  | "markdown"
  | "flutter"
  | "android";
export interface Project {
  name: string;
  href: string;
  img?: string;
  description?: string;
  longDescription?: string;
  langs: Language[];
  license?: "AGPL-3.0" | "GPL-3.0" | "MIT" | "LGPL-3.0";
}

export const projects: Project[] = [
  {
    name: "Mandown",
    href: "https://github.com/potatoeggy/mandown",
    description:
      "A comic downloader and converter to CBZ / EPUB / PDF for my Kobo.",
    longDescription: "Available via CLI and a Qt GUI!",
    langs: ["python"],
    license: "AGPL-3.0",
    img: "mandown.webp",
  },
  {
    name: "Noveldown",
    href: "https://github.com/potatoeggy/noveldown",
    langs: ["python"],
    license: "LGPL-3.0",
    description:
      "A webnovel downloader and converter to EPUB for my Kobo, with lots of metadata!",
    longDescription: "Heavily borrows Mandown's design.",
  },
  {
    name: "Jeopardy",
    href: "https://github.com/potatoeggy/jeopardy",
    img: "jeopardy.webp",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
    description: "Kahoot-inspired Jeopardy! game, including Final Jeopardy!",
    longDescription: "Created for Bayview's Computer Club.",
  },
  {
    name: "Primoprod",
    href: "https://github.com/potatoeggy/primoprod",
    img: "primoprod.webp",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
    description:
      "A game simulator to increase productivity with quests and gambling.",
    longDescription: "My first project with a JS framework!",
  },
  {
    name: "Eifueo",
    href: "https://github.com/potatoeggy/eifueo",
    langs: ["markdown"],
    license: "GPL-3.0",
    img: "eifueo.webp",
    description: "A collection of rewritten notes to remember things better.",
    longDescription: "THIS IS NOT A TEXTBOOK.",
  },
  {
    name: "Napbot",
    href: "https://github.com/potatoeggy/napbot",
    langs: ["python"],
    license: "AGPL-3.0",
    description:
      "A Discord bot initially to track sleep hours as friendly competition but is now a local music bot with synchronised lyrics!",
    img: "napbot.webp",
  },
  {
    name: "Resketch",
    href: "https://github.com/anyuan-chen/resketch",
    langs: ["typescript", "react"],
    img: "resketch.webp",
    description:
      'A "reverse-Pictionary" where you compete to have an AI recognise your drawings.',
    longDescription: "Written for YRHacks 2022.",
  },
  {
    name: "Perdiem",
    href: "https://github.com/anyuan-chen/perdiem",
    langs: ["javascript", "react"],
    license: "AGPL-3.0",
    img: "perdiem.webp",
    description:
      "A pretty budget tracking app where I learned too much about server-side rendering.",
    longDescription: "Written for StormHacks 2022.",
  },
  {
    name: "RecipeReady",
    href: "https://github.com/christopherlam888/recipe-ready-frontend",
    langs: ["python", "android", "flutter"],
    img: "recipeready.webp",
    description:
      "Android app to automagically plan meals and prepare a shopping list so you don't have to.",
    longDescription: "Written for Hack the North 2021.",
  },
  {
    name: "AutoFicFare",
    href: "https://github.com/potatoeggy/autoficfare",
    langs: ["python"],
    license: "GPL-3.0",
    description:
      "Automatically update fanfiction in a Calibre database to instantly update them on your Kobo.",
  },
  {
    name: "Website",
    href: "https://github.com/potatoeggy/public",
    description:
      "This website! It's gone through three iterations before this one, and this one's the first to use a framework.",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
    img: "public.webp",
  },
];

export default projects;
