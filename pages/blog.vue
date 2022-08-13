<script setup lang="ts">
import type { BlogParsedContent } from "@/shared/types";

useTitle("Blog", "Ramblings and ideas");
definePageMeta({ layout: "withtop" });

// TODO: paginate stories
const docs = await queryContent<BlogParsedContent>("/blog")
  .sort({ date: -1 })
  .where({ _draft: false })
  .find();
</script>

<template>
  <main
    class="flex flex-col grow prose dark:prose-invert max-w-3xl gap-6 transition"
  >
    <h1 class="mb-0">Blog</h1>
    <PostPreviewCard
      v-for="(post, index) in docs"
      :key="index"
      :post="post"
      type="blog"
    />
  </main>
</template>
