<script setup lang="ts">
const props = defineProps<{
  dest: string;
  highlight?: boolean;
}>();
</script>

<template>
  <a :href="dest">
    <div
      :class="[
        'inline-block text-xs rounded-full py-1 px-2 mt-1 mr-1 bg-gray-300 dark:bg-gray-500 transition',
        { 'bg-yellow-200 dark:bg-yellow-700 shadow-lg': highlight },
      ]"
    >
      <slot />
    </div>
  </a>
</template>
