<script setup lang="ts">
import { projects } from "@/data/projects";
</script>

<template>
  <div class="prose dark:prose-invert w-full flex flex-col mt-9">
    <h1 class="text-center mb-0">Fun things</h1>
    <p class="text-center">(aka my programming projects)</p>
    <div class="flex flex-col items-center justify-around gap-5 mt-6">
      <ProjectCard
        v-for="(proj, index) in projects"
        :project="proj"
        :key="index"
      />
    </div>

    <h1 id="about" class="text-center mb-4 mt-8">About</h1>

    <!-- this could be in markdown but eh -->
    <p>
      Hello! It's very nice to meet you — I'm a student and Linux enthusiast who
      is quite passionate about some subjects but is quite lazy in every other.
    </p>

    <p>
      I've dabbled extensively and non-extensively in a variety of topics to
      play with, including:
    </p>
    <ul>
      <li>competitive programming on DMOJ</li>
      <li>GUI toolkits very very briefly in GTK, Qt, and Swing</li>
      <li>Linux and server administration</li>
      <li>web development in the form of a Chrome extension and my sites</li>
      <li>Godot Engine Cat Simulator DX</li>
      <li>ski instruction</li>
      <li>writing of literature</li>
      <li>emulation</li>
    </ul>
    <p>…and other things that I'm forgetting right now.</p>
    <p>
      I have two server machines at home — a Dell OptiPlex 780 and a Dell
      Latitude E5520. Yes, one of them is a laptop.
    </p>
    <h3>OptiPlex 780 ("asvyn")</h3>
    <ul>
      <li><strong>CPU:</strong> Intel Core 2 Duo E8400 (2c/2t)</li>
      <li><strong>GPU:</strong> AMD ATI Radeon HD 3450</li>
      <li><strong>RAM:</strong> 2× 1 GB DDR + 1× 2 GB DDR2</li>
      <li><strong>Storage:</strong> Western Digital 150 GB hard drive</li>
      <li><strong>OS:</strong> Arch Linux</li>
    </ul>
    <h3>Latitude E5520 ("panquia")</h3>
    <ul>
      <li><strong>CPU:</strong> Intel Core i5-3320M (2c/4t)</li>
      <li><strong>GPU:</strong> Integrated</li>
      <li><strong>RAM:</strong> 10 GB</li>
      <li><strong>Storage:</strong> 300 GB hard drive</li>
      <li><strong>OS:</strong> Arch Linux</li>
    </ul>
  </div>
</template>

<style scoped>
p {
  margin: 0.5rem;
}

ul {
  margin: 0;
  line-height: 1.35;
}
</style>
