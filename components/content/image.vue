<script setup lang="ts">
const { src } = defineProps<{ src: string }>();
</script>

<template>
  <figure>
    <img :src="`/images/posts/${src}`" />
    <figcaption class="text-center"><Markdown /></figcaption>
  </figure>
</template>
