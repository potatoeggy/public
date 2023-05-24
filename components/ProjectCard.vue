<script setup lang="ts">
import type { Project } from "@/data/projects";
import { unref as _unref } from "vue";
const props = defineProps<{
  project: Project;
  reverse?: boolean;
}>();

const imgUrl = props.project.img
  ? `url(/images/projects/${props.project.img})`
  : "none";
</script>

<template>
  <a :href="project.href" class="no-underline project-anchor">
    <div class="card flex items-center justify-between">
      <div class="card-text h-full px-4 py-2">
        <div class="h-full flex flex-col justify-between">
          <div>
            <h3 class="m-0 font-bold font-sans">{{ project.name }}</h3>
            <div class="flex gap-1 items-center flex-nowrap">
              <img
                class="h-5 w-5 m-0"
                :src="`/images/langs/${lang}.svg`"
                v-for="(lang, index) in project.langs"
                :key="index"
                :alt="`${lang} logo`"
              />
              <span
                class="text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap"
                >· {{ project.license ?? "no license" }}</span
              >
            </div>
          </div>
          <div class="flex flex-col justify-between grow">
            <p
              class="desc-text text-gray-600 dark:text-gray-200 mt-3 mb-0 text-left text-sm"
            >
              {{ project.description }}
            </p>
            <p
              class="desc-text text-gray-600 dark:text-gray-200 text-left text-sm m-0 whitespace-nowrap"
            >
              {{ project.longDescription }}
            </p>
          </div>
        </div>
      </div>
      <div class="card-img h-full p-4 flex" :style="{ '--imgurl': imgUrl }" />
    </div>
  </a>
</template>

<style scoped>
.project-anchor {
  display: inline-block;
  width: 100%;
}

.project-anchor:hover h3 {
  @apply text-blue-700 dark:text-blue-400;
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
  background: #444;
  box-shadow: 0 0.1rem 0.5rem 0 black;
}

.card:hover,
.card:active {
  transform: scale(1.03);
}

.card-text {
  width: 25%;
  background: white;
  border-radius: 1.5rem 0 0 0;
  transition: width 0.2s ease;
}

html.dark .card-text {
  background: #444;
}

.card-img {
  width: 75%;
  background: var(--imgurl);
  background-color: rgb(255, 237, 241);
  background-position: right 90% top 15%;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 0 0 1.5rem 100%;
  transition: width 0.2s ease;
}

html.dark .card-img {
  background-color: rgb(180, 136, 143);
}

.desc-text {
  width: 140%;
  /* 140% is too close */
  transition: width 0.2s ease;
}

a.unclickable {
  pointer-events: none;
}

@media screen and (max-width: 720px) {
  .card-text {
    width: 30%;
  }

  .card-img {
    width: 70%;
  }

  .desc-text {
    width: 136%;
  }
}

@media screen and (max-width: 540px) {
  .card-text {
    width: 45%;
  }

  .card-img {
    width: 55%;
  }

  .desc-text {
    width: 120%;
    font-size: 0.72rem;
  }
}
</style>
