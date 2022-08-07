<script setup lang="ts">
import IconHamburger from "@/assets/images/hamburger.svg?component";
import { navItems } from "@/data/navItems";
</script>

<template>
  <div class="hamburger">
    <label class="checkbox-label" for="checkbox"><IconHamburger /></label>
    <input class="checkbox" type="checkbox" id="checkbox" />
    <div class="drawer">
      <li v-for="(item, index) in navItems" :key="index">
        <a :href="item.href">{{ item.title }}</a>
      </li>
    </div>
  </div>
</template>

<style scoped>
input.checkbox {
  outline: none;
  width: 0;
  opacity: 0;
}

label.checkbox-label {
  cursor: pointer;
}
input.checkbox ~ .drawer {
  opacity: 0;
  position: absolute;
  transform: scale(0);
}

input.checkbox:checked ~ .drawer,
input.checkbox:hover ~ .drawer,
.drawer:hover {
  opacity: 1;
  transform: scale(1) translateY(1rem);
}

.drawer {
  transition: transform var(--trans), opacity var(--trans);
  padding: 1rem;
  margin-right: 1rem;
}
</style>
