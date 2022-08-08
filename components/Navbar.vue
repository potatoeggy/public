<script setup lang="ts">
import ColourPicker from "./ColourPicker.vue";
import { navItems } from "@/data/navItems";
</script>

<template>
  <nav class="flex items-center justify-between">
    <ul>
      <li class="home-text"><a href="/">Eggworld</a></li>
      <li v-for="(item, index) in navItems" :key="index">
        <a :href="item.href">{{ item.title }}</a>
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
  height: 4rem;
  width: 100%;
  border: 1px solid red;
  padding: 1rem;
  /* main stuff is z-index 1 and the hamburger must be above everything else */
  z-index: 2;
}

ul {
  display: flex;
  align-items: center;
  gap: 3rem;
}

li {
  font-size: large;
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
  transition: opacity var(--trans), transform var(--trans), gap var(--trans),
    width var(--trans);
}

@media screen and (max-width: 510px) {
  .hamburger {
    display: flex;
    width: 3rem;
    opacity: 1;
  }

  li:not(.home-text) {
    width: 0;
    opacity: 0;
    /* accessibility? screw accessibility
     * i want my pretty animations
     */
  }

  ul {
    gap: 0rem;
  }
}

html.dark svg {
  fill: white;
}
</style>
