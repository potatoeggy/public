<script setup lang="ts">
import Services from "@/components/index/services.vue";
import About from "@/components/index/about.vue";

definePageMeta({ layout: "withtop" });
useTitle("Home", "Personal website!");
</script>

<template>
  <main class="flex flex-col items-center justify-around gap-8">
    <div class="flex flex-col items-center">
      <h1 class="text-bitter font-bold">Welcome!</h1>
      <p>What are you here to see?</p>
    </div>
    <div
      class="flex justify-around items-stretch w-full flex-wrap gap-x-8 gap-y-10"
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
