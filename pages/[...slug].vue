<script setup lang="ts">
import type { BlogParsedContent, StoryParsedContent } from "@/shared/types";
import { calcReadingTime } from "@/shared/metadata";

type GeneralParsedContent = BlogParsedContent | StoryParsedContent;

const route = useRoute();
definePageMeta({
  layout: "withtop",
});

// we're not using ContentDoc because i need control
const doc = await queryContent<GeneralParsedContent>(route.path).findOne();
const type = route.path.startsWith("/stories")
  ? "stories"
  : route.path.startsWith("/blog")
  ? "blog"
  : "unknown";

const descText =
  type === "stories"
    ? `${calcReadingTime(doc).words.total} words`
    : `${calcReadingTime(doc).minutes} min read`;
useTitle(doc.title, doc.description);

const captionText =
  type === "stories" ? "Story" : type === "blog" ? "Blog post" : "";
</script>

<template>
  <main class="container prose dark:prose-invert w-full">
    <p class="m-0 uppercase font-mono text-sm" v-if="captionText !== ''">
      {{ captionText }}
    </p>
    <h1 class="m-0">{{ doc.title }}</h1>
    <p class="my-2"><Date :doc="doc" /> · {{ descText }}</p>
    <div class="flex flex-wrap">
      <Tag
        v-for="(tag, index) in doc.tags"
        :dest="`/tags/${type}/${tag}`"
        :key="index"
      >
        {{ tag }}
      </Tag>
    </div>
    <ContentRenderer :value="doc" tag="article" class="pt-0 w-full">
      <template #empty>
        <p>No description found.</p>
      </template>
      <template #not-found>
        <h1>404 - Not Found</h1>
        <p>
          Thanks for dropping by! But the page you're looking for can't be
          found.
        </p>
      </template>
    </ContentRenderer>
  </main>
</template>

<style scoped>
.container {
  width: 80%;
  max-width: 80ch;
  padding-top: 2rem;
}

* {
  transition: color 0.2s ease;
}
</style>
