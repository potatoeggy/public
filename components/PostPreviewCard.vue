<script setup lang="ts">
import type { AnyParsedContent } from "@/shared/types";
import { calcReadingTime } from "@/shared/metadata";
import { SpecialTags } from "@/data/specialTags";
import IconStar from "@/assets/images/star.svg?component";

const { post, type } = defineProps<{
  post: AnyParsedContent;
  type: "stories" | "blog";
  highlighttags?: string[];
}>();

const readingTime = calcReadingTime(post);
const descText =
  type === "stories"
    ? `${readingTime.words.total} words`
    : `${readingTime.minutes} min read`;
</script>

<template>
  <div
    class="break-words max-w-full rounded-lg p-4 shadow-md border border-2 border-gray-300 dark:border-gray-600"
  >
    <h3 class="m-0 flex items-center gap-1.5">
      <a :href="`/tags/${type}/featured`" v-if="post.tags.includes('featured')">
        <IconStar class="fill-yellow-500 outline-none" />
      </a>
      <a
        :href="post._path"
        class="no-underline text-left text-2xl sm:text-2xl font-bold hover:text-blue-700 dark:hover:text-blue-400 leading-tight transition"
      >
        {{ post.title }}
      </a>
    </h3>
    <p class="my-1 text-sm"><Date :doc="post" /> · {{ descText }}</p>
    <div class="flex flex-wrap">
      <template v-for="(tag, index) in post.tags" :key="index">
        <Tag
          :dest="`/tags/${type}/${tag}`"
          :name="tag"
          :highlight="highlighttags?.includes(tag)"
          v-if="!SpecialTags.includes(tag)"
        />
      </template>
    </div>
    <ContentRenderer :value="post" :excerpt="true" tag="section">
      <template #empty>No excerpt available.</template>
    </ContentRenderer>
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
