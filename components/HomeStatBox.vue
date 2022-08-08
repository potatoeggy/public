<script setup lang="ts">
import type { Color } from "csstype";

const { href, color = "pink" } = defineProps<{
  href?: string;
  color?: Color;
  title?: string;
}>();
</script>

<template>
  <a class="no-underline" :href="href">
    <div class="container box">
      <p class="m-0 w-full title">{{ title }}</p>
      <div class="main-content"><slot /></div>
    </div>
  </a>
</template>

<style scoped>
.container {
  /* make sure width is good for fullscreen 1080p,
   * fullscreen 1080p at 1.25 scaling,
   * mobile
   */
  width: 28rem;
  border: 0.5rem solid v-bind(color);
  border-radius: 0.5rem;
}

.main-content {
  padding: 1rem;
  padding-top: 0;
}

.title {
  background: v-bind(color);
}

@media screen and (max-width: 600px) {
  .container {
    width: 100%;
  }
}
</style>
