<script setup lang="ts">
import type { StoryParsedContent } from "@/shared/types";
import { calcReadingTime } from "@/shared/metadata";

const docs = await queryContent<StoryParsedContent>("/stories")
  .sort({ date: 1 })
  .where({ _draft: false })
  .find();

const latest = docs.at(-1) as StoryParsedContent;
</script>

<template>
  <div class="prose dark:prose-invert flex onhover">
    <HomeStatBox
      :href="latest._path"
      color="lightgreen"
      darkcolor="#2c8a2c"
      title="Latest story"
    >
      <h2 class="m-0 mt-4 mb-1">{{ latest.title }}</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 m-0">
        <Date :doc="latest" /> · {{ calcReadingTime(latest).words.total }} words
      </p>
      <div class="tag-list mt-1">
        <Tag
          v-for="(tag, index) in latest.tags"
          :key="index"
          :dest="`/tags/stories/${tag}`"
          :name="tag"
        />
      </div>
      <ContentRenderer
        tag="article"
        :value="latest"
        :excerpt="true"
        class="text-gray-600 dark:text-gray-300 text-base m-0 mt-5 text-ellipsis"
      >
        <ContentRendererMarkdown :value="latest" :excerpt="true" />
        <template #empty>
          <p>No description found.</p>
        </template>
      </ContentRenderer>
    </HomeStatBox>
  </div>
</template>

<style scoped>
h2 {
  overflow-wrap: break-word;
}

div.onhover:hover h2 {
  @apply text-blue-700 dark:text-blue-400;
}
</style>
