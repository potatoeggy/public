<script setup lang="ts">
const { src, alt = "" } = defineProps<{ src: string; alt?: string }>();

const imgSrc =
  src.startsWith("http://") || src.startsWith("https://")
    ? src
    : `/images/posts/${src}`;
</script>

<template>
  <figure class="flex flex-col items-center">
    <img :src="imgSrc" class="drop-shadow-lg" :alt="alt" />
    <figcaption class="text-center" v-if="alt">{{ alt }}</figcaption>
  </figure>
</template>
