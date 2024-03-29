export type Language =
  | "python"
  | "javascript"
  | "java"
  | "typescript"
  | "vue"
  | "react"
  | "markdown"
  | "flutter"
  | "android"
  | "rust"
  | "golang";
export interface Project {
  name: string;
  href: string;
  img?: string;
  description?: string;
  longDescription?: string;
  langs: Language[];
  license?: "AGPL-3.0" | "GPL-3.0" | "MIT" | "LGPL-3.0";
  type: "full" | "server" | "client" | "embedded";
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
    type: "client",
  },
  {
    name: "Noveldown",
    href: "https://github.com/potatoeggy/noveldown",
    langs: ["python"],
    license: "LGPL-3.0",
    description:
      "A webnovel downloader and EPUB converter for my Kobo, with lots of metadata!",
    longDescription: "Heavily borrows Mandown's design.",
    type: "client",
  },
  {
    name: "Jeopardy",
    href: "https://github.com/potatoeggy/jeopardy",
    img: "jeopardy.webp",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
    description: "Kahoot-inspired Jeopardy! game, including Final Jeopardy!",
    longDescription: "Created for Bayview's Computer Club.",
    type: "full",
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
    type: "client",
  },
  {
    name: "PillowⓇ",
    href: "https://github.com/potatoeggy/ece198",
    description:
      "A water quality statistics aggregator written for the STM32 microcontroller with a display and keypad.",
    langs: ["rust"],
    license: "GPL-3.0",
    type: "embedded",
    img: "pillow.webp",
  },
  {
    name: "Napbot",
    href: "https://github.com/potatoeggy/napbot",
    langs: ["python"],
    license: "AGPL-3.0",
    description:
      "A Discord music bot with synchronised lyrics, originally a sleep tracking bot to encourage sleeping.",
    img: "napbot.webp",
    type: "server",
  },
  {
    name: "Resketch",
    href: "https://github.com/anyuan-chen/resketch",
    langs: ["typescript", "react"],
    img: "resketch.webp",
    description:
      'A "reverse-Pictionary" where you compete to have an AI recognise your drawings.',
    longDescription: "Written for YRHacks 2022.",
    type: "full",
  },
  {
    name: "Perdiem",
    href: "https://github.com/anyuan-chen/perdiem",
    langs: ["javascript", "react"],
    license: "AGPL-3.0",
    img: "perdiem.webp",
    description:
      "A pretty budgeting app where I learned too much about server-side rendering.",
    longDescription: "Written for StormHacks 2022.",
    type: "client",
  },
  {
    name: "RecipeReady",
    href: "https://github.com/christopherlam888/recipe-ready-frontend",
    langs: ["python", "android", "flutter"],
    img: "recipeready.webp",
    description:
      "App to automagically plan meals and prepare a grocery list so you don't have to.",
    longDescription: "Written for Hack the North 2021.",
    type: "full",
  },
  {
    name: "AutoFicFare",
    href: "https://github.com/potatoeggy/autoficfare",
    langs: ["python"],
    license: "GPL-3.0",
    description:
      "Automatically update fanfiction in a Calibre database to instantly update them on your Kobo.",
    type: "client",
  },
];

const unreleasedProjects: Project[] = [
  {
    name: "Aleister",
    href: "https://github.com/potatoeggy/aleister",
    langs: ["rust"],
    license: "AGPL-3.0",
    type: "server",
  },
  {
    name: "Aoto",
    href: "https://github.com/potatoeggy/aoto",
    langs: ["golang", "typescript", "react"],
    license: "AGPL-3.0",
    type: "full",
  },
];

export default projects;
