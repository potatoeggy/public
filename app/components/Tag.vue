<script setup lang="ts">
const { highlight } = defineProps<{
  name: string;
  dest: string;
  highlight?: boolean;
}>();

// const isLinkableTag = !props.name.includes(" ");
const isLinkableTag = true;
const tagClass = [
  "inline-block text-xs rounded-lg py-1 px-2 mt-1 mr-1 transition border border-pink-200 dark:border-pink-900 border-2 font-medium no-underline",
  { "bg-pink-200 dark:bg-pink-900": highlight },
  { "shadow-md": isLinkableTag },
];
</script>

<template>
  <div :class="tagClass">
    <a :href="dest" v-if="isLinkableTag">
      {{ name }}
    </a>
    <div v-else>
      {{ name }}
    </div>
  </div>
</template>
