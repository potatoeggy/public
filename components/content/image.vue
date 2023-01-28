<script setup lang="ts">
const props = defineProps<{ src: string }>();

const src = props.src;
const imgSrc =
  src.startsWith("http://") || src.startsWith("https://")
    ? src
    : `/images/posts/${src}`;
</script>

<template>
  <figure class="flex flex-col items-center">
    <img :src="imgSrc" />
    <figcaption class="text-center"><slot /></figcaption>
  </figure>
</template>
