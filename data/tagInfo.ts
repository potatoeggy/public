export interface TagData {
  name?: string;
  description?: string;
}

export const tagInfo: Record<string, TagData> = {
  barin: {
    name: "Barin",
    description:
      "Welcome to Barin — a world in constant conflict between productivity and procrastination.",
  },
  bsscc: {
    name: "BSSCC",
    description: "Posts related to Bayview's Computer Club.",
  },
  ibia: {
    name: "Ibia",
    description:
      "A Kurious child struggles to fight the misinformation brought by the Six Goddesses of the Subjects.",
  },
  misc: { name: "Miscellaneous" },
  poetry: {
    name: "Poetry",
    description:
      "Poetry is interesting in that there is a lot of implied stuff that is normally said directly in prose.",
  },
  primoprod: {
    name: "Primoprod",
    description:
      'Reports following the development of <a href="https://github.com/potatoeggy/primoprod">Primoprod</a>.',
  },
  tech: { name: "Technology" },
  unstagnation: {
    name: "Unstagnation Short",
    description:
      "A collection of very short stories written to do something productive during June–August 2020 and August 2021.",
  },
  albatross: {
    name: "The FOSS Albatross",
    description:
      'Articles about free and open source software. Also available on <a href="https://medium.com/the-foss-albatross">Medium</a>.',
  },
  birds: {
    name: "Bird Family",
    description:
      "A large, loving family of birds who have found in each other a kindred soul for eternal suffering.",
  },
  uoft: {
    name: "University of Teyvat",
    description: "A <em>Genshin Impact</em> university AU.",
  },
  nanowrimo: {
    name: "NaNoWriMo",
    description:
      "Story snippets written during National Novel Writing Month as part of a larger work.",
  },
  skyprojections: {
    name: "Projections in the Sky",
    description: "Dreams or reality — what is the difference?",
  },
};
export default tagInfo;
