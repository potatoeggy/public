<script setup lang="ts">
import ColourPicker from "./ColourPicker.vue";
</script>
<template>
  <nav class="flex items-center justify-between">
    <ul>
      <li class="home-text"><a href="/">Eggworld</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/stories">Stories</a></li>
    </ul>
    <ColourPicker />
  </nav>
</template>

<style scoped>
nav {
  height: 5rem;
  width: 100%;
  border: 1px solid red;
  padding: 1rem;
}

ul {
  width: 100%;
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
</style>
