<script setup lang="ts">
import type { StoryParsedContent } from "@/shared/types";

useTitle("Stories");

// TODO: paginate stories
const docs = await queryContent<StoryParsedContent>("/stories")
  .sort({ date: -1 })
  .where({ _draft: false })
  .find();
</script>

<template>
  <main
    class="flex flex-col grow prose dark:prose-invert max-w-3xl gap-6 transition"
  >
    <h1 class="mb-0">Stories</h1>
    <PostPreviewCard
      v-for="(story, index) in docs"
      :key="index"
      :post="story"
      type="stories"
    />
  </main>
</template>
