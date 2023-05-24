<script setup lang="ts">
import type { AnyParsedContent } from "@/shared/types";
import { calcReadingTime } from "@/shared/metadata";

const props = defineProps<{
  post: AnyParsedContent;
  type: "stories" | "blog";
  highlighttags?: string[];
}>();

const readingTime = calcReadingTime(props.post);
const descText =
  props.type === "stories"
    ? `${readingTime.words.total} words`
    : `${readingTime.minutes} min read`;
</script>

<template>
  <div
    class="break-words max-w-full rounded-lg p-4 shadow-md border border-2 border-gray-300"
  >
    <h3 class="m-0">
      <a
        :href="post._path"
        class="no-underline text-left text-2xl sm:text-2xl font-bold hover:text-blue-700 dark:hover:text-blue-400 leading-tight transition"
      >
        {{ post.title }}
      </a>
    </h3>
    <p class="my-1 text-sm"><Date :doc="post" /> · {{ descText }}</p>
    <div class="flex flex-wrap">
      <Tag
        :dest="`/tags/${type}/${tag}`"
        v-for="(tag, index) in post.tags"
        :key="index"
        :highlight="highlighttags?.includes(tag)"
      >
        {{ tag }}
      </Tag>
    </div>
    <ContentRenderer :value="post" :excerpt="true" tag="section">
      <template #empty>No excerpt available.</template>
    </ContentRenderer>
    <!--<p v-if="!post.nopreview" class="m-0">…</p>-->
    <div class="text-right" v-if="!post.nopreview">
      <a
        :href="post._path"
        class="no-underline hover:underline font-semibold text-blue-700 dark:text-blue-400"
      >
        Continue reading →
      </a>
    </div>
  </div>
</template>
