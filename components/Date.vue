<script setup lang="ts">
import { getPrettyDate, getUtcDate } from "~~/shared/metadata";
import { BlogParsedContent, StoryParsedContent } from "~~/shared/types";

const props = defineProps<{ doc: StoryParsedContent | BlogParsedContent }>();

const prettyDate = getPrettyDate(props.doc);
const utcDate = getUtcDate(props.doc);
</script>

<template>
  <time pubdate :datetime="utcDate">{{ prettyDate }}</time>
</template>
