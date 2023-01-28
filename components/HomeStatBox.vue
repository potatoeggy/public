<script setup lang="ts">
import type { Color, ViewportLength } from "csstype";

const props = withDefaults(
  defineProps<{
    href?: string;
    id?: string;
    color?: Color;
    darkcolor?: Color;
    title?: string;
    clearstyles?: boolean;
    forceheight?: ViewportLength<"rem">;
  }>(),
  { color: "pink", darkcolor: "#c88994", clearstyles: false }
);

const padding = props.clearstyles ? "0" : "1rem";
const height = props.forceheight ?? "100%";

// v-bind DOES NOT WORK on initial render
// so unfortunately we have to use the old way

const cssVars = {
  "--padding": padding,
  "--height": height,
  "--color": props.color,
  "--darkcolor": props.darkcolor,
};
</script>

<template>
  <a
    class="no-underline inline-block flex flex-col items-stretch"
    :href="href"
    :id="id"
  >
    <div class="container box" :style="cssVars">
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
  height: var(--height);
  border: 0.5rem solid var(--color);
  border-radius: 0.5rem;
  transition: transform 0.2s ease;
  box-shadow: 0 0.1rem 0.5rem 0 gray;
}

.container:hover,
.container:active {
  transform: scale(1.05);
}

html.dark .container {
  border: 0.5rem solid var(--darkcolor);
  box-shadow: 0 0.1rem 0.5rem 0 black;
}

.main-content {
  padding: var(--padding);
  padding-top: 0;
  overflow-wrap: break-word;
}

.title {
  background: var(--color);
}

html.dark .title {
  background: var(--darkcolor);
}

@media screen and (max-width: 600px) {
  .container {
    width: 90vw;
  }
}
</style>
