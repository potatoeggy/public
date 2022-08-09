<script setup lang="ts">
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc.js";
import tz from "dayjs/plugin/timezone.js";
import type { GithubCommit, GithubPushEvent } from "@/shared/github";
import type { Ref } from "vue";

const FEED_URL = "https://api.github.com/users/potatoeggy/events";

const results = (await useFetch(FEED_URL)).data as Ref<GithubPushEvent[]>;

const latestEvent = results.value.find(
  (event) => event.type === "PushEvent"
) as GithubPushEvent;
const latestCommit = latestEvent.payload.commits[0];
const imgUrl = `https://opengraph.githubassets.com/hash/${latestEvent.repo.name}/commit/${latestCommit.sha}`;
const href = `https://github.com/${latestEvent.repo.name}/commit/${latestCommit.sha}`;

const [title, description] = latestCommit.message.split("\n\n");
</script>

<template>
  <div class="prose dark:prose-invert">
    <HomeStatBox
      :href="href"
      color="lightgray"
      darkcolor="slategray"
      title="Latest commit"
      :clearstyles="true"
    >
      <img class="m-0 w-full h-full" :src="imgUrl" />
      <!--
        <div>
        <h2>{{ title }}</h2>
        <p v-if="description">{{ description }}</p>
      </div>
      -->
    </HomeStatBox>
  </div>
</template>
