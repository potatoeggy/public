<script setup lang="ts">
import ColourPicker from "./ColourPicker.vue";
import { navItems } from "@/data/navItems";

const props = defineProps<{ activeItem?: string }>();
</script>

<template>
  <nav class="flex items-center justify-between">
    <ul>
      <li class="home-text"><a href="/">Eggworld</a></li>
      <li v-for="(item, index) in navItems" :key="index">
        <a :href="item.href" class="flex gap-2">
          <img
            :src="`/nav/${item.title.toLowerCase()}.svg`"
            :alt="`${item.title} logo`"
          />
          {{ item.title }}</a
        >
      </li>
    </ul>
    <div class="flex items-center">
      <ColourPicker />
      <div class="hamburger">
        <HamburgerMenu />
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  --nav-drop-color: lightgray;
  height: 4rem;
  width: 100%;
  box-shadow: 0 0.25rem 0.5rem 0 var(--nav-drop-color);
  padding: 1rem;
  /* main stuff is z-index 1 and the hamburger must be above everything else */
  z-index: 2;
}

html.dark nav {
  --nav-drop-color: black;
}

html.dark nav img {
  filter: invert(1);
}

ul {
  display: flex;
  align-items: center;
  gap: 1rem;
}

li {
  font-size: large;
  border-radius: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
}

li:hover:not(.home-text),
li:active:not(.home-text) {
  --nav-active-color: lightgray;
  background: var(--nav-active-color);
}

html.dark li:hover,
html.dark li:active {
  --nav-active-color: darkslategray;
}

li.home-text {
  font-size: x-large;
  font-weight: bold;
}

.hamburger {
  width: 0rem;
  opacity: 0;
}

* {
  --trans: 0.2s ease;
  --box-trans-time: 0.4s;
  transition: opacity var(--trans), transform var(--trans), gap var(--trans),
    width var(--trans), box-shadow var(--box-trans-time) ease,
    filter var(--trans), padding-left var(--trans), padding-right var(--trans);
}

@media screen and (max-width: 600px) {
  .hamburger {
    display: flex;
    width: 4rem;
    opacity: 1;
  }

  li:not(.home-text) {
    width: 0;
    opacity: 0;
    padding: 0;
    padding-left: 0;
    padding-right: 0;
    /* accessibility? screw accessibility
     * i want my pretty animations
     */
  }

  ul {
    gap: 0rem;
  }

  nav {
    padding-left: 0;
    padding-right: 0;
  }
}

html.dark svg {
  fill: white;
}
</style>
