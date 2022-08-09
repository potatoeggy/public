<script setup lang="ts">
import type { Color } from "csstype";

const {
  href,
  color = "pink",
  title,
  clearstyles = false,
} = defineProps<{
  href?: string;
  color?: Color;
  title?: string;
  clearstyles?: boolean;
}>();

const padding = clearstyles ? "0" : "1rem";
</script>

<template>
  <a class="no-underline" :href="href">
    <div class="container box">
      <p class="m-0 w-full title">{{ title }}</p>
      <div class="main-content">
        <slot />
      </div>
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
  height: 16.25rem;
  border: 0.5rem solid v-bind(color);
  border-radius: 0.5rem;
}

.main-content {
  padding: v-bind(padding);
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
