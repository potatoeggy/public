<script setup lang="ts">
import Default from "./base.vue";
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div>
    <Navbar />
    <Default>
      <slot />
    </Default>
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
</style>
