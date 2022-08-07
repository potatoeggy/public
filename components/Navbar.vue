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
        <Hamburger />
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
  transform: scale(0);
  opacity: 0;
}

* {
  --trans: 0.2s ease;
  transition: opacity var(--trans), transform var(--trans);
}

@media screen and (max-width: 510px) {
  .hamburger {
    display: flex;
    transform: none;
    opacity: 1;
  }

  li:not(.home-text) {
    transform: scale(0);
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
