<script setup lang="ts">
import { revisions } from "@/data/siteRevisions";
useHead({ title: "Oeufs?" });
</script>

<template>
  <div class="flex flex-col items-center w-full h-full justify-between">
    <Navbar />
    <slot />
    <footer
      class="flex items-center justify-between p-3 bg-gray-100 w-full text-sm dark:bg-gray-800 flex-col md:flex-row gap-2"
    >
      <label class="flex items-center gap-2">
        <p>Revision:</p>
        <!--
          the onchange is so bad - i'd rather it be done through vue
          but nuxt is genuinely screwing me over here

          ig r4 has to be in next.js
        -->
        <select
          class="p-2 border rounded-lg dark:bg-[#222]"
          onchange="location = this.value"
        >
          <option v-for="(r, i) in revisions" :key="i" :value="r.url">
            {{ r.title }}
          </option>
        </select>
      </label>
      <div class="flex flex-col items-center">
        <p>
          Licensed under the AGPL-3.0 on
          <a class="underline" href="https://github.com/potatoeggy/public">
            GitHub</a
          >
          and
          <a class="underline" href="https://git.eggworld.me/eggy/public">
            Gitea
          </a>
        </p>
      </div>
      <div class="w-36"></div>
    </footer>
  </div>
  <slot name="top-button" />
</template>

<style>
html {
  background: white;
  color: black;
  transition:
    color 0.2s ease,
    background 0.2s ease;
  overflow-x: hidden;
  overflow-y: scroll;
  scroll-behavior: smooth;
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

/* div#__nuxt {
  min-height: 100vh;
} 

it's better if everything is sort of long but that is not the case
*/

html.dark::before {
  transform: translateX(0);
}

main {
  width: 80%;
  max-width: 60rem;
  margin: auto;
  padding-top: 2rem;
}

footer {
  --footer-drop-color: lightgray;
  transition: background 0.2s ease;
  box-shadow: 0 -0.05rem 0.75rem 0 var(--footer-drop-color);
  margin-top: 2rem;
}

html.dark footer {
  --footer-drop-color: black;
}

@media screen and (max-width: 600px) {
  main {
    width: 90%;
  }
}
</style>
