<script setup lang="ts">
import type { StoryParsedContent } from "@/shared/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";

dayjs.extend(utc);

useTitle("Stories");

// TODO: paginate stories
const docs = await queryContent<StoryParsedContent>("/stories")
  .sort({ date: 1 })
  .where({ _draft: false })
  .find();

const getPrettyDate = (story: StoryParsedContent) => {
  const date = dayjs(story.date).utc();
  return date.format("DD MMM YYYY");
};
</script>

<template>
  <main
    class="flex flex-col grow prose dark:prose-invert max-w-3xl gap-6 transition"
  >
    <h1 class="mb-0">Stories</h1>
    <div
      class="story-card p-4 pb-2"
      v-for="(story, index) in docs"
      :key="index"
    >
      <h3 class="m-0">
        <a
          :href="story._path"
          class="no-underline text-left text-2xl sm:text-2xl font-bold hover:text-blue-700 dark:hover:text-blue-400 leading-tight transition"
        >
          {{ story.title }}</a
        >
      </h3>
      <p class="my-1 text-sm">
        {{ getPrettyDate(story) }} · {{ story.readingTime.text }}
      </p>
      <div class="flex flex-wrap">
        <Tag
          :dest="`/stories/tags/${tag}`"
          v-for="(tag, index) in story.tags"
          :key="index"
        >
          {{ tag }}
        </Tag>
      </div>
      <p class="mb-1">{{ story.description }} ...</p>
      <div class="text-right">
        <a
          :href="story._path"
          class="no-underline hover:underline font-semibold text-blue-700 dark:text-blue-400"
        >
          Continue reading →
        </a>
      </div>
    </div>
  </main>
</template>

<style scoped>
.story-card {
  border: 0.1rem solid gray;
  max-width: 100%;
  border-radius: 0.5rem;
}
</style>
