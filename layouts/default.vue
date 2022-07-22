<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<template>
  <div class="flex flex-col items-center w-full h-full">
    <Navbar />
    <slot />
    <footer
      class="flex flex-col items-center p-3 bg-gray-100 w-full text-sm dark:bg-gray-800"
    >
      <p>Ⓒ 2022 Daniel Chen</p>
      <p>
        Available under the AGPL-3.0 on
        <a class="underline" href="https://github.com/potatoeggy/public">
          GitHub</a
        >
        and
        <a class="underline" href="https://git.eggworld.tk/eggy/public">
          Gitea
        </a>
      </p>
    </footer>
  </div>
</template>

<style>
html {
  background: white;
  color: black;
  transition: color 0.2s ease, background 0.2s ease;
  overflow-x: hidden;
  overflow-y: scroll;
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

main {
  width: 80%;
  max-width: 60rem;
  height: 100%;
  margin: auto;
  padding-top: 2rem;
}

footer {
  transition: background 0.2s ease;
}
</style>
