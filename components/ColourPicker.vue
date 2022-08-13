<script setup lang="ts">
import { ref } from "vue";
import IconSun from "@/assets/images/sun.svg?component";
import IconMoon from "@/assets/images/moon.svg?component";

const colorMode = useColorMode();

const isToggled = ref(colorMode.value === "dark");

const toggle = () => {
  isToggled.value = !isToggled.value;
  colorMode.preference = isToggled.value ? "dark" : "light";
};

/*
// it unchecks on refresh and i can't make it automatically
// check itself

const darkToggleEl: Ref<HTMLInputElement> = ref(null);

onMounted(() => {
  if (isToggled.value) {
    darkToggleEl.value.checked = true;
  }
});
*/
</script>

<template>
  <label for="dark-toggle" :class="['toggle-wrapper']">
    <div :class="['toggle', isToggled ? 'enabled' : 'disabled']">
      <div class="icons">
        <IconMoon />
        <IconSun />
      </div>
      <input
        id="dark-toggle"
        name="dark-toggle"
        type="checkbox"
        :checked="isToggled"
        ref="darkToggleEl"
        @click="toggle"
      />
    </div>
  </label>
</template>

<style scoped>
.toggle-wrapper {
  width: 6rem;
  display: block;
  --black: #333333;
  --white: #f5f5f5;
  --scale: 2rem;
  --transition: 0.2s ease;
  --bg: var(--white);
  --fg: var(--black);
}

html.dark .toggle-wrapper {
  --black: #f5f5f5;
  --white: #333333;
}

.toggle {
  height: var(--scale);
  width: calc(var(--scale) * 2);
  background: var(--fg);
  border-radius: var(--scale);
  padding: calc(var(--scale) * 0.175);
  position: relative;
  margin: auto;
  cursor: pointer;
  transition: background var(--transition);
}

.toggle::before {
  content: "";
  display: block;
  height: calc(var(--scale) * 0.65);
  width: calc(var(--scale) * 0.65);
  border-radius: 50%;
  background: var(--bg);
  position: absolute;
  z-index: 2;
  transform: translate(0);
  transition: transform var(--transition), background var(--transition);
}

.toggle.enabled::before {
  transform: translateX(calc(var(--scale)));
}

.toggle input {
  position: absolute;
  top: 0;
  opacity: 0;
}

.toggle .icons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}

.toggle .icons svg {
  transform: scale(0.7);
  z-index: 0;
  fill: var(--bg);
}
</style>
