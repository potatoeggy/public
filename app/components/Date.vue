<script setup lang="ts">
import { getPrettyDate, getUtcDate } from "@/shared/metadata";
import type { AnyParsedContent } from "@/shared/types";

const { doc } = defineProps<{ doc: AnyParsedContent }>();

const prettyDate = getPrettyDate(doc);
const utcDate = getUtcDate(doc);
</script>

<template>
  <time pubdate :datetime="utcDate">{{ prettyDate }}</time>
</template>
