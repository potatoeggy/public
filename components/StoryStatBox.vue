<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";
import { type StoryParsedContent } from "@/shared/types";

dayjs.extend(utc);
dayjs.extend(tz);

const docs = await queryContent<StoryParsedContent>("/stories")
  .sort({ date: 1 })
  .where({ _draft: false })
  .find();

const latest = docs.at(-1) as StoryParsedContent;

const latestDate = dayjs(latest.date).utc();
const prettyDate = latestDate.format("DD MMM YYYY");
</script>

<template>
  <div class="prose dark:prose-invert flex">
    <HomeStatBox
      :href="latest._path"
      color="lightgreen"
      darkcolor="#2c8a2c"
      title="Latest story"
    >
      <h2 class="m-0 mt-4 mb-1">{{ latest.title }}</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 m-0">
        {{ prettyDate }} · {{ latest.readingTime.words }} words
      </p>
      <div class="tag-list mt-1">
        <Tag
          v-for="(tag, index) in latest.tags"
          :key="index"
          :dest="`/stories/tags/${tag}`"
        >
          {{ tag }}
        </Tag>
      </div>
      <!--
      <ContentRenderer
        tag="article"
        :value="latest"
        :excerpt="true"
        class="pt-0 w-full"
      >
        <ContentRendererMarkdown :value="latest" :excerpt="true" />
        <template #empty>
          <p>No description found.</p>
        </template>
      </ContentRenderer>
      -->
      <p
        class="excerpt text-gray-600 dark:text-gray-300 text-base m-0 mt-5 text-ellipsis"
      >
        {{ latest.description }} ...
      </p>
    </HomeStatBox>
  </div>
</template>

<style scoped>
h2 {
  overflow-wrap: break-word;
}
</style>
