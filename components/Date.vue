<script setup lang="ts">
import { getPrettyDate, getUtcDate } from "~~/shared/metadata";
import type { AnyParsedContent } from "~~/shared/types";

const props = defineProps<{ doc: AnyParsedContent }>();

const prettyDate = getPrettyDate(props.doc);
const utcDate = getUtcDate(props.doc);
</script>

<template>
  <time pubdate :datetime="utcDate">{{ prettyDate }}</time>
</template>
