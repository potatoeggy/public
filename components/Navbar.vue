<script setup lang="ts">
import ColourPicker from "./ColourPicker.vue";
import IconHamburger from "@/assets/images/hamburger.svg?component";
</script>
<template>
  <nav class="flex items-center justify-between">
    <ul>
      <li class="home-text"><a href="/">Eggworld</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/stories">Stories</a></li>
    </ul>
    <div class="flex items-center">
      <ColourPicker />
      <div class="hamburger">
        <IconHamburger />
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
  height: 1px;
  width: 1px;
  opacity: 0;
}

* {
  --trans: 0.2s ease;
  transition: opacity var(--trans), height var(--trans), width var(--trans),
    padding-left var(--trans);
}

@media screen and (max-width: 510px) {
  .hamburger {
    display: flex;
    padding-left: 1rem;
    height: unset;
    width: unset;
    opacity: 1;
  }

  li:not(.home-text) {
    height: 1px;
    width: 1px;
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
