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
        'inline-block text-xs rounded-lg py-1 px-2 mt-1 mr-1 transition border border-pink-200 dark:border-pink-900 border-2 shadow-md',
        { 'bg-pink-200 dark:bg-pink-900': highlight },
      ]"
    >
      <slot />
    </div>
  </a>
</template>
