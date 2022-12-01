<script setup lang="ts">
import type { BlogParsedContent } from "@/shared/types";
import { calcReadingTime } from "@/shared/metadata";

const docs = await queryContent<BlogParsedContent>("/blog")
  .sort({ date: 1 })
  .where({ _draft: false })
  .find();

const latest = docs.at(-1) as BlogParsedContent;
</script>

<template>
  <div class="prose dark:prose-invert flex">
    <HomeStatBox
      :href="latest._path"
      color="lightblue"
      darkcolor="#497482"
      title="Latest blog post"
    >
      <h2 class="m-0 mt-4 mb-1">{{ latest.title }}</h2>
      <p class="text-sm text-gray-500 dark:text-gray-400 m-0">
        <Date :doc="latest" /> · {{ calcReadingTime(latest).minutes }} min read
      </p>
      <div class="tag-list mt-1">
        <Tag
          v-for="(tag, index) in latest.tags"
          :key="index"
          :dest="`/tags/blog/${tag}`"
        >
          {{ tag }}
        </Tag>
      </div>
      <ContentRenderer
        tag="article"
        :value="latest"
        :excerpt="true"
        class="text-gray-600 dark:text-gray-300 text-base m-0 mt-5"
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
</style>
