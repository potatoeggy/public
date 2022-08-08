<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";
import type { BlogParsedContent } from "@/shared/types";

const FEED_URL = "https://api.github.com/users/potatoeggy/events";

const imgUrl = ref("");

dayjs.extend(utc);
dayjs.extend(tz);

const { pending, data: results } = useLazyFetch(FEED_URL);

watch(results, (newResults) => {
  for (const event of newResults) {
  }
});
</script>

<template>
  <div class="prose dark:prose-invert">
    <HomeStatBox
      href="https://github.com"
      color="lightgray"
      title="Latest commit"
    >
      <h2 class="m-0 mt-4 mb-1">Commit name</h2>
      <p class="text-sm text-gray-500 m-0">date · project</p>
      <p class="excerpt text-gray-600 text-base m-0 mt-5">description</p>
      <img :src="imgUrl" v-if="imgUrl !== ''" />
    </HomeStatBox>
  </div>
</template>

<style scoped>
article p {
  color: gray;
}
</style>
