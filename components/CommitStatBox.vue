<script setup lang="ts">
import type { GithubPushEvent } from "@/shared/github";
import type { Ref } from "vue";

const FEED_URL = "https://api.github.com/users/potatoeggy/events";
const imgUrl = ref("");
const href = ref("");

onMounted(async () => {
  const results = (await useFetch(FEED_URL)).data as Ref<GithubPushEvent[]>;
  const latestEvent = results.value.find(
    (event) => event.type === "PushEvent"
  ) as GithubPushEvent;
  const latestCommit = latestEvent.payload.commits[0];
  imgUrl.value = `https://opengraph.githubassets.com/hash/${latestEvent.repo.name}/commit/${latestCommit.sha}`;
  href.value = `https://github.com/${latestEvent.repo.name}/commit/${latestCommit.sha}`;
});
</script>

<template>
  <div class="prose dark:prose-invert">
    <HomeStatBox
      :href="href"
      id="github-commit-a"
      color="lightgray"
      darkcolor="slategray"
      title="Latest commit"
      :clearstyles="true"
    >
      <img class="m-0 w-full h-full" :src="imgUrl" id="github-commit-img" />
      <!--
        <div>
        <h2>{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
      </div>
      -->
      <noscript> Enable JavaScript to see the latest commit! </noscript>
    </HomeStatBox>
  </div>
</template>
