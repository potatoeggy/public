<script setup lang="ts">
import Default from "./default.vue";
</script>

<template>
  <Default>
    <slot />
    <template #top-button> <ButtonToTop /> </template>
  </Default>
</template>

<style>
div#__nuxt {
  display: grid;
  grid-template-columns: auto 0;
}
</style>
