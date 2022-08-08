<script setup lang="ts">
import Services from "@/components/index/services.vue";
import About from "@/components/index/about.vue";

useTitle("Home");
</script>

<template>
  <main class="flex flex-col items-center justify-around gap-8">
    <h1>Welcome!</h1>
    <p>What are you here to see?</p>
    <div class="flex justify-around items-center w-full flex-wrap gap-y-10">
      <HomeStatBox> Latest blog post </HomeStatBox>
      <HomeStatBox>Latest story</HomeStatBox>
      <HomeStatBox>Latest commit w/details</HomeStatBox>
    </div>
    <Services />
    <br />
    <br />
    <br />
    <About />
  </main>
</template>

<style scoped>
h1 {
  font-size: 3rem;
}
</style>
