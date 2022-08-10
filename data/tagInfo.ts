export interface TagData {
  name?: string;
  description?: string;
}

export const tagInfo: Record<string, TagData> = {
  barin: { name: "Barin" },
  bsscc: {
    name: "BSSCC",
    description: "Posts related to Bayview's Computer Club.",
  },
  ibia: { name: "Ibia" },
  misc: { name: "Miscellaneous" },
  poetry: {
    name: "Poetry",
    description:
      "Poetry is interesting in that there is a lot of implied stuff that is normally said directly in prose.",
  },
  primoprod: {
    name: "Primoprod",
    description:
      'Reports following the development of <a href="https://github.com/potatoeggy/primoprod>Primoprod</a>.',
  },
  tech: { name: "Technology" },
  unstagnation: {
    name: "Unstagnation Short",
    description:
      "A collection of very short stories written to do something productive during June–August 2020 and August 2021.",
  },
};
export default tagInfo;
