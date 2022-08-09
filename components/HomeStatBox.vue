<script setup lang="ts">
import type { Color, ViewportLength } from "csstype";

// fix ReferenceError: _unref is not defined
// https://github.com/nuxt/framework/issues/5546
import { unref as _unref } from "vue";

const {
  href,
  color = "pink",
  title,
  clearstyles = false,
  forceheight,
} = defineProps<{
  href?: string;
  color?: Color;
  title?: string;
  clearstyles?: boolean;
  forceheight?: ViewportLength<"rem">;
}>();

const padding = clearstyles ? "0" : "1rem";
const height = forceheight ?? "auto";
</script>

<template>
  <a class="no-underline inline-block flex" :href="href">
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
  height: v-bind(height);
  border: 0.5rem solid v-bind(color);
  border-radius: 0.5rem;
}

.main-content {
  padding: v-bind(padding);
  padding-top: 0;
  overflow-wrap: break-word;
}

.title {
  background: v-bind(color);
}

@media screen and (max-width: 600px) {
  .container {
    width: 90vw;
  }
}
</style>
