<script setup lang="ts">
import { tagInfo, type TagData } from "@/data/tagInfo";
import type { BlogParsedContent } from "@/shared/types";

const route = useRoute();
//definePageMeta({ layout: "withtop" });

const tag =
  typeof route.params.tag === "string" ? route.params.tag : route.params.tag[0];

const details: TagData = tagInfo[tag] ?? {};

const docs = await queryContent<BlogParsedContent>("/blog")
  .sort({ date: -1 })
  .where({ _draft: false, tags: { $contains: tag } })
  .find();

const title = `${details.name ?? `"${tag}"`} Posts`;
useTitle(title, details.description);
</script>

<template>
  <main
    class="prose dark:prose-invert max-w-3xl flex flex-col grow gap-6 transition"
  >
    <div>
      <h1 class="mb-0">{{ title }}</h1>
      <p
        v-if="details.description"
        v-html="details.description"
        class="mt-2"
      ></p>
    </div>
    <PostPreviewCard
      v-for="(post, index) in docs"
      :key="index"
      :post="post"
      :highlighttags="[tag]"
      type="blog"
    />
  </main>
</template>
