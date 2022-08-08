<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";
import type { BlogParsedContent } from "@/shared/types";

dayjs.extend(utc);
dayjs.extend(tz);

const docs = await queryContent<BlogParsedContent>("/stories")
  .sort({ date: 1 })
  .where({ _draft: false })
  .find();

const latest = docs.at(-1);

const latestDate = dayjs(latest.date).utc();
const prettyDate = latestDate.format("DD MMM YYYY");
</script>

<template>
  <div class="prose dark:prose-invert">
    <HomeStatBox :href="latest._path" color="lightgreen" title="Latest story">
      <h2 class="m-0 mt-4 mb-1">{{ latest.title }}</h2>
      <p class="text-sm text-gray-500 m-0">
        {{ prettyDate }} · {{ latest.readingTime.text }}
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
      <p class="excerpt text-gray-600 text-base m-0 mt-5">
        {{ latest.description }} …
      </p>
    </HomeStatBox>
  </div>
</template>

<style scoped>
article p {
  color: gray;
}
</style>
