import type { BlogParsedContent, StoryParsedContent } from "./types";
import readingTime from "reading-time";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

function countWords(str: string) {
  let words = 0;
  for (const c of str) {
    if (c === " " || c === "/") {
      words++;
    }
  }
  return words;
}

function search(obj: Record<string, any>, results: string[] = []) {
  if (obj.value) {
    results.push(obj.value);
  }

  if (obj.children) {
    for (const el of obj.children) {
      search(el, results);
    }
  }
  return results;
}

export function calcReadingTime(doc: BlogParsedContent | StoryParsedContent) {
  let body: string[] = search(doc.body);
  return readingTime(body.join(" "));
}

export function getPrettyDate(doc: BlogParsedContent | StoryParsedContent) {
  const date = dayjs(doc.date).utc();
  return date.format("DD MMM YYYY");
}

export function getUtcDate(doc: BlogParsedContent | StoryParsedContent) {
  const date = dayjs(doc.date).utc();
  return date.format("YYYY-MM-DD");
}
