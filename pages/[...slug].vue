<script setup lang="ts">
import type { BlogParsedContent, StoryParsedContent } from "@/shared/types";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";

dayjs.extend(utc);
dayjs.extend(tz);

type GeneralParsedContent = BlogParsedContent | StoryParsedContent;

const route = useRoute();

// we're not using ContentDoc because i need control
const doc = await queryContent<GeneralParsedContent>(route.path).findOne();
useTitle(doc.title);
</script>

<template>
  <div class="container prose dark:prose-invert w-full">
    <h1>{{ doc.title }}</h1>
    <ContentRenderer tag="article" :value="doc" class="pt-0 w-full">
      <ContentRendererMarkdown :value="doc" />

      <template #empty>
        <p>No description found.</p>
      </template>
      <template #not-found>
        <h1>404 - Not Found</h1>
      </template>
    </ContentRenderer>
  </div>
</template>

<style scoped>
.container {
  width: 80%;
  max-width: 72ch;
  padding-top: 2rem;
}

* {
  transition: color 0.2s ease;
}
</style>
