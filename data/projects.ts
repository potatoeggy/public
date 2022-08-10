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
  langs: Language[];
  license?: "AGPL-3.0" | "GPL-3.0" | "MIT" | "LGPL-3.0";
}

export const projects: Project[] = [
  {
    name: "Mandown",
    href: "https://github.com/potatoeggy/mandown",
    description: "I couldn't find one so I made one",
    langs: ["python"],
    license: "LGPL-3.0",
  },
  {
    name: "Noveldown",
    href: "https://github.com/potatoeggy/noveldown",
    langs: ["python"],
    license: "LGPL-3.0",
  },
  {
    name: "Jeopardy",
    href: "https://github.com/potatoeggy/jeopardy",
    img: "jeopardy.webp",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
  },
  {
    name: "Primoprod",
    href: "https://github.com/potatoeggy/primoprod",
    img: "primoprod.webp",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
  },
  {
    name: "Eifueo",
    href: "https://github.com/potatoeggy/eifueo",
    langs: ["markdown"],
    license: "GPL-3.0",
  },
  {
    name: "Napbot",
    href: "https://github.com/potatoeggy/napbot",
    langs: ["python"],
    license: "AGPL-3.0",
  },
  {
    name: "Resketch",
    href: "https://github.com/anyuan-chen/resketch",
    langs: ["typescript", "react"],
  },
  {
    name: "Perdiem",
    href: "https://github.com/anyuan-chen/perdiem",
    langs: ["javascript", "react"],
    license: "AGPL-3.0",
  },
  {
    name: "RecipeReady",
    href: "https://github.com/christopherlam888/recipe-ready-frontend",
    langs: ["python", "android", "flutter"],
  },
  {
    name: "Flashnote",
    href: "https://github.com/potatoeggy/flashnote",
    langs: ["java", "android"],
    license: "GPL-3.0",
  },
  {
    name: "Rooster",
    href: "https://github.com/potatoeggy/rooster",
    langs: ["python"],
    license: "GPL-3.0",
  },
  {
    name: "AutoFicFare",
    href: "https://github.com/potatoeggy/autoficfare",
    langs: ["python"],
    license: "GPL-3.0",
  },
  {
    name: "public",
    href: "https://github.com/potatoeggy/public",
    description: "This website!",
    langs: ["typescript", "vue"],
    license: "AGPL-3.0",
  },
];

export default projects;
