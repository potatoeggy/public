<script setup lang="ts">
import type { Project } from "@/data/projects";
const { project, reverse = false } = defineProps<{
  project: Project;
  reverse?: boolean;
}>();
/*
name
description
language
license?
date?

image
*/

const imgUrl = `url(/assets/images/projects/${project.img ?? ""})`;
</script>

<template>
  <a :href="project.href" class="no-underline project-anchor">
    <div class="card flex items-center justify-between">
      <div class="card-text h-full bg-white p-4 pt-2">
        <div>
          <h3 class="m-0">{{ project.name }}</h3>
          <div class="flex gap-1 items-center">
            <img
              class="h-5 w-5 m-0"
              :src="`/assets/images/langs/${lang}.svg`"
              v-for="(lang, index) in project.langs"
              :key="index"
            />
            <span class="text-xs text-gray-500"
              >· {{ project.license ?? "no license" }}</span
            >
          </div>
        </div>
        <p class="desc-text text-gray-600 dark:text-gray-200">
          <slot />
        </p>
      </div>
      <div class="card-img h-full p-4 flex" />
    </div>
  </a>
</template>

<style scoped>
.project-anchor {
  display: inline-block;
  width: 100%;
}

.card {
  border: 0.2rem solid pink;
  background: white;
  border-radius: 1.5rem 0 1.5rem 0;
  height: 12rem;
  line-height: 1.25;
  transition: all 0.2s ease;
  box-shadow: 0 0.1rem 0.5rem 0 gray;
}

html.dark .card {
  border: 0.2rem solid rgb(126, 93, 98);
  background: rgb(110, 90, 92);
  box-shadow: 0 0.1rem 0.5rem 0 black;
}

.card:hover,
.card:active {
  transform: scale(1.03);
}

.card-text {
  width: 25%;
  border-radius: 1.5rem 0 0 0;
}

.card-img {
  width: 75%;
  background: v-bind(imgUrl);
  background-color: rgb(255, 237, 241);
  background-position: right 90% top 15%;
  background-size: 100%;
  border-radius: 0 0 1.5rem 100%;
}

.desc-text {
  font-size: 0.8rem;
  margin: 0;
  text-align: center;
}

a.unclickable {
  pointer-events: none;
}
</style>
