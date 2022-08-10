import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

interface ReadingTime {
  text: string;
  minutes: number;
  time: number;
  words: number;
}

interface BlogParsedContent extends ParsedContent {
  date: Date;
  title: string;
  tags: string[];
  description?: string;
  readingTime: ReadingTime;
  nopreview?: boolean;
}

interface StoryParsedContent extends ParsedContent {
  date: Date;
  title: string;
  tags: string[];
  description?: string;
  readingTime: ReadingTime;
  nopreview?: boolean;
}
