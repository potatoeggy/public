<script setup lang="ts">
const props = defineProps<{
  name: string;
  href: string;
  img: string;
  unclickable?: boolean;
  broken?: boolean;
}>();

const imgUrl = `/images/services/${props.img}`;
</script>

<template>
  <a
    :href="unclickable ? '' : href"
    :class="['no-underline', { unclickable: unclickable || broken, broken }]"
  >
    <div class="card flex flex-col items-center justify-around">
      <img class="m-0" :src="imgUrl" />
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
  box-shadow: 0 0.1rem 0.5rem 0 gray;
}

a.broken::before {
  content: "PANQUIA IS ON FIRE";
  position: absolute;
  color: red;
  transform: rotate(-45deg);
  font-size: 1.5rem;
  text-align: center;
  z-index: 2;
  top: 40%;
  left: -12.5%;
  width: 125%;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
}

a.broken > .card {
  filter: grayscale(100%);
  opacity: 0.4;
}

html.dark .card {
  border: 0.2rem solid rgb(126, 93, 98);
  background: rgb(110, 90, 92);
  box-shadow: 0 0.1rem 0.5rem 0 black;
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

a.unclickable .card {
  box-shadow: none;
}
</style>
