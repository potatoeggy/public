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
  description?: Record<string, any>;
  readingTime: ReadingTime;
}

interface StoryParsedContent extends ParsedContent {
  date: Date;
  title: string;
  tags: string[];
  readingTime: ReadingTime;
}
