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
      Hello! It's very nice to meet you — I'm a student who is quite passionate
      about some subjects but is quite lazy in every other.
    </p>
    <p>
      I've dabbled extensively and non-extensively in a variety of topics to
      play with, including:
    </p>
    <ul>
      <li>competitive programming on DMOJ</li>
      <li>Linux and server administration</li>
      <li>web development</li>
      <li>hackathons</li>
      <li>ski instruction</li>
      <li>writing of literature</li>
      <li>video game console emulation</li>
    </ul>
    <p>…and other things that I'm forgetting right now.</p>
    <p>
      I have three server machines at home — a Dell OptiPlex 780, a Dell
      Latitude E5520, and a custom-built PC. One of them is a laptop and
      <s>I'm surprised it hasn't burnt up yet </s>
      <span class="redphasis">it has burnt up.</span>
    </p>
    <h3>Custom PC ("hwaboon")</h3>
    <ul>
      <li><strong>CPU:</strong> AMD Ryzen 7700X (8c/16t)</li>
      <li><strong>GPU:</strong> Integrated</li>
      <li><strong>RAM:</strong> 2× 16 GB DDR5</li>
      <li><strong>Storage:</strong> Crucial P3 1 TB SSD</li>
      <li><strong>OS:</strong> Arch Linux</li>
    </ul>
    <h3>OptiPlex 780 ("asvyn")</h3>
    <ul>
      <li><strong>CPU:</strong> Intel Core 2 Duo E8400 (2c/2t)</li>
      <li><strong>GPU:</strong> AMD ATI Radeon HD 3450</li>
      <li><strong>RAM:</strong> 2× 2 GB DDR3</li>
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
      <li>
        <strong>Status: </strong>
        <span class="redphasis">ON FIRE.</span>
      </li>
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

.redphasis {
  font-weight: bold;
  color: red;
}
</style>
