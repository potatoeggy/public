<script setup lang="ts">
import type { StoryParsedContent } from "@/shared/types";

useTitle("Stories");

const docs = await queryContent<StoryParsedContent>("/stories")
  .sort({ date: 1 })
  .where({ _draft: false })
  .find();
</script>

<template>
  <main class="flex grow prose dark:prose-invert">
    <h1>Stories</h1>
  </main>
</template>
