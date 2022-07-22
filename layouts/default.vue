<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col items-center w-full h-full">
    <Navbar />
    <slot />
  </div>
</template>

<style>
html {
  background: white;
  color: black;
  transition: color 0.2s ease, background 0.2s ease;
}

html.dark {
  background: #222;
  color: white;
}

html::before {
  content: "";
  position: fixed;
  height: 100%;
  width: 100%;
  background: #222;
  transform: translateX(-100%);
  transition: transform 0.2s ease;
  z-index: 0;
}

html.dark::before {
  transform: translateX(0);
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
