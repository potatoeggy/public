<script setup lang="ts">
import type { StoryParsedContent, BlogParsedContent } from "@/shared/types";
import { calcReadingTime } from "@/shared/readingTime";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

const { post, type, highlighttags } = defineProps<{
  post: StoryParsedContent | BlogParsedContent;
  type: "stories" | "blog";
  highlighttags?: string[];
}>();

const getPrettyDate = (story: StoryParsedContent) => {
  const date = dayjs(story.date).utc();
  return date.format("DD MMM YYYY");
};

const readingTime = calcReadingTime(post);
const descText =
  type === "stories"
    ? `${readingTime.words.total} words`
    : `${readingTime.minutes} min read`;
</script>

<template>
  <div class="story-card p-4">
    <h3 class="m-0">
      <a
        :href="post._path"
        class="no-underline text-left text-2xl sm:text-2xl font-bold hover:text-blue-700 dark:hover:text-blue-400 leading-tight transition"
      >
        {{ post.title }}
      </a>
    </h3>
    <p class="my-1 text-sm">{{ getPrettyDate(post) }} · {{ descText }}</p>
    <div class="flex flex-wrap">
      <Tag
        :dest="`/tags/${type}/${tag}`"
        v-for="(tag, index) in post.tags"
        :key="index"
        :highlight="highlighttags?.includes(tag)"
      >
        {{ tag }}
      </Tag>
    </div>
    <ContentRenderer :value="post" :excerpt="true" tag="article">
      <template #empty>No excerpt available.</template>
    </ContentRenderer>
    <div class="text-right">
      <a
        :href="post._path"
        class="no-underline hover:underline font-semibold text-blue-700 dark:text-blue-400"
      >
        Continue reading →
      </a>
    </div>
  </div>
</template>

<style scoped>
.story-card {
  border: 0.1rem solid gray;
  max-width: 100%;
  border-radius: 0.5rem;
  overflow-wrap: break-word;
}
</style>
