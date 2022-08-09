<script setup lang="ts">
const { dest } = defineProps<{ dest: string }>();
</script>

<template>
  <a :href="dest">
    <div
      class="inline-block text-xs rounded-full py-1 px-2 mt-1 mr-1 bg-gray-300 dark:bg-gray-500"
    >
      <slot />
    </div>
  </a>
</template>
