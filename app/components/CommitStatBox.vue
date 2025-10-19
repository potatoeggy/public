<script setup lang="ts">
import type { GithubPushEvent } from "@/shared/github";

const FEED_URL = "https://api.github.com/users/potatoeggy/events";

const { data: results } = await useFetch<GithubPushEvent[]>(FEED_URL, {
  onResponse(res) {
    res.response.json;
  },
});

const latestEvent = results.value?.find(
  (event: GithubPushEvent) => event.type === "PushEvent"
);

const latestCommitSha = latestEvent.payload.head;

const imgUrl = computed(() =>
  results.value
    ? `https://opengraph.githubassets.com/hash/${latestEvent.repo.name}/commit/${latestCommitSha}`
    : ""
);
const href = computed(() =>
  results.value
    ? `https://github.com/${latestEvent.repo.name}/commit/${latestCommitSha}`
    : ""
);
</script>

<template>
  <div class="prose dark:prose-invert">
    <HomeStatBox
      :href
      id="github-commit-a"
      color="lightgray"
      darkcolor="slategray"
      title="Latest commit"
      :clearstyles="true"
    >
      <img
        class="m-0 w-full h-full"
        :src="imgUrl"
        id="github-commit-img"
        alt="Latest GitHub commit"
      />
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
