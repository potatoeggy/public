<script setup lang="ts">
const props = defineProps<{
  name: string;
  dest: string;
  highlight?: boolean;
}>();

// const isLinkableTag = !props.name.includes(" ");
const isLinkableTag = true;
const tagClass = [
  "inline-block text-xs rounded-lg py-1 px-2 mt-1 mr-1 transition border border-pink-200 dark:border-pink-900 border-2 font-medium",
  { "bg-pink-200 dark:bg-pink-900": props.highlight },
  { "shadow-md": isLinkableTag },
];
</script>

<template>
  <a :href="dest" v-if="isLinkableTag">
    <div :class="tagClass">
      {{ name }}
    </div>
  </a>
  <div v-else>
    <div :class="tagClass">
      {{ name }}
    </div>
  </div>
</template>
