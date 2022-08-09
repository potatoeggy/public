<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";
import type { GithubPushEvent } from "@/shared/github";
import type { Ref } from "vue";

const FEED_URL = "https://api.github.com/users/potatoeggy/events";

const results = (await useFetch(FEED_URL)).data as Ref<GithubPushEvent[]>;

const imgUrl = ref("");
const href = ref("");
for (const r of results.value) {
  if (r.type === "PushEvent") {
    {
      const latest = r.payload.commits[0];
      imgUrl.value = `https://opengraph.githubassets.com/hash/${r.repo.name}/commit/${latest.sha}`;
      href.value = `https://github.com/${r.repo.name}/commit/${latest.sha}`;
    }
    break;
  }
}
</script>

<template>
  <div class="prose dark:prose-invert">
    <HomeStatBox
      :href="href"
      color="lightgray"
      title="Latest commit"
      :clearstyles="true"
    >
      <img class="m-0 w-full h-full" :src="imgUrl" v-if="imgUrl !== ''" />
    </HomeStatBox>
  </div>
</template>
