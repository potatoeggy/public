<script setup lang="ts">
import type { StoryParsedContent } from "@/shared/types";

useTitle("Stories", "Fantasies and worlds");
//definePageMeta({ layout: "withtop" });

// TODO: paginate stories
const docs = await queryContent<StoryParsedContent>("/stories")
  .sort({ date: -1 })
  .where({ _draft: false })
  .find();

const tags = new Set(
  docs
    .map((p) => p.tags)
    .flat()
    .filter((p) => !p.includes(" ")) // do not include AO3-style tags
    .sort()
);
</script>

<template>
  <main
    class="flex flex-col grow prose dark:prose-invert max-w-3xl gap-6 transition"
  >
    <h1 class="mb-0">Stories</h1>
    <div class="m-0">
      Filter:
      <Tag
        :dest="`/tags/stories/${tag}`"
        v-for="(tag, index) in tags"
        :key="index"
      >
        {{ tag }}
      </Tag>
    </div>
    <PostPreviewCard
      v-for="(story, index) in docs"
      :key="index"
      :post="story"
      type="stories"
    />
  </main>
</template>
