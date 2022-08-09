<script setup lang="ts">
const props = defineProps<{
  name: string;
  href: string;
  img: string;
  unclickable?: boolean;
}>();
</script>

<template>
  <a :href="unclickable ? '' : href" :class="['no-underline', { unclickable }]">
    <div class="card flex flex-col items-center justify-around">
      <img class="m-0" :src="img" />
      <h3 class="m-0">{{ props.name }}</h3>
      <p class="desc-text text-gray-600 dark:text-gray-200"><slot /></p>
    </div>
  </a>
</template>

<style scoped>
img {
  width: 6rem;
}

.card {
  padding: 1rem;
  border: 0.2rem solid pink;
  background: rgb(255, 237, 241);
  border-radius: 0.5rem;
  width: 12rem;
  height: 12rem;
  line-height: 1.25;
  transition: all 0.2s ease;
}

html.dark .card {
  border: 0.2rem solid rgb(126, 93, 98);
  background: rgb(110, 90, 92);
}

.card:hover,
.card:active {
  transform: scale(1.05);
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
