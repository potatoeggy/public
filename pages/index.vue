<script setup lang="ts">
import Services from "@/components/index/services.vue";
import About from "@/components/index/about.vue";

//definePageMeta({ layout: "withtop" });
useTitle("Home", "Personal website!");

const welcomeStrings = ["Welcome!", "Bienvenue!", "欢迎!"];
</script>

<template>
  <main class="flex flex-col items-center justify-around gap-8">
    <div class="flex flex-col items-center">
      <HeaderLoop class="text-bitter font-bold" :strings="welcomeStrings" />
      <p>What are you here to see?</p>
      <p>
        For my portfolio, please visit
        <a class="underline" href="https://github.com/potatoeggy">GitHub</a>
        instead.
      </p>
    </div>
    <div
      class="flex justify-around items-start w-full flex-wrap gap-x-8 gap-y-10"
    >
      <BlogStatBox />
      <StoryStatBox />
      <CommitStatBox />
    </div>

    <Services />
    <About />
  </main>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}
</style>
