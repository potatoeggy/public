<script setup lang="ts">
import { navItems } from "@/data/navItems";

const getSvgIcon = async (name: string) => {
  const module = await import(
    `../assets/images/nav/${name.toLowerCase()}.svg?raw`
  );
  return module.default;
};
</script>

<template>
  <div class="hamburger">
    <input class="checkbox" type="checkbox" id="checkbox" />
    <label class="checkbox-label" for="checkbox">
      <svg class="ham ham-rotate" viewBox="0 0 100 100" width="60">
        <path
          class="line top"
          d="m 30,33 h 40 c 0,0 9.044436,-0.654587 9.044436,-8.508902 0,-7.854315 -8.024349,-11.958003 -14.89975,-10.85914 -6.875401,1.098863 -13.637059,4.171617 -13.637059,16.368042 v 40"
        />
        <path class="line middle" d="m 30,50 h 40" />
        <path
          class="line bottom"
          d="m 30,67 h 40 c 12.796276,0 15.357889,-11.717785 15.357889,-26.851538 0,-15.133752 -4.786586,-27.274118 -16.667516,-27.274118 -11.88093,0 -18.499247,6.994427 -18.435284,17.125656 l 0.252538,40"
        />
      </svg>
    </label>
    <div class="drawer prose dark:prose-invert">
      <li class="m-0" v-for="(item, index) in navItems" :key="index">
        <!-- stupid vite doesn't let require work
          i should have just hardcoded the navbar items -->
        <a :href="item.href" class="p-2 flex gap-2">
          <img
            :src="`/nav/${item.title.toLowerCase()}.svg`"
            class="m-0"
            preload="auto"
          />
          {{ item.title }}
        </a>
        <hr class="m-0 m-2" v-if="index !== navItems.length - 1" />
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

input.checkbox ~ .drawer {
  opacity: 0;
  right: 0;
  top: 0;
  position: absolute;
  transform: scale(0);
}

input.checkbox:checked ~ .drawer,
.drawer:hover {
  /** input.checkbox:focus:not(:checked) ~ .drawer,
    * input.checkbox:hover ~ .drawer,
    *
    * play with focus to make it so that you can click outside
    * of the hamburger to close it
    * problem with focus is that pressing the menu again doesn't close it
    * also so that you can hover over it to open it — these are
    * surprisingly annoying
    */
  opacity: 1;
  transform: scale(1) translate(0.5rem, 3.25rem);
}

.drawer {
  --drawer-bg: white;
  --drawer-border-bg: gray;
  transition: transform var(--trans), opacity var(--trans), border var(--trans),
    background var(--trans);
  padding: 1rem;
  right: 0;
  background: var(--drawer-bg);
  border: 1px solid var(--drawer-border-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.5rem;
  width: 12rem;

  --drawer-drop-color: gray;
  box-shadow: 0 0.25rem 0.5rem 0 var(--drawer-drop-color);
}

html.dark .drawer {
  --drawer-bg: #222;
  --drawer-border-bg: darkslategray;
  --drawer-drop-color: black;
}

.drawer::before {
  content: "";
  width: 0;
  height: 0;
  position: absolute;

  --tri-size: 0.6rem;
  border-left: var(--tri-size) solid transparent;
  border-right: var(--tri-size) solid transparent;
  border-bottom: var(--tri-size) solid var(--drawer-border-bg);
  right: 0.75rem;
  top: calc(-1 * var(--tri-size));
  transition: border var(--trans);
}

.drawer::after {
  content: "";
  width: 0;
  height: 0;
  position: absolute;

  --tri-size: 0.56rem;
  border-left: var(--tri-size) solid transparent;
  border-right: var(--tri-size) solid transparent;
  border-bottom: var(--tri-size) solid var(--drawer-bg);
  right: 0.8rem;
  top: -0.53rem; /*calc(-1 * var(--tri-size));*/
  transition: border var(--trans);
}

.drawer li {
  list-style: none;
  width: 100%;
}

.drawer li a {
  /* overwrite tailwind */
  text-decoration: none;
  width: 100%;
}

/* hamburger animation */

.ham {
  cursor: pointer;
  transition: transform 400ms;
  user-select: none;
  height: 3.75rem;
}

.line {
  fill: none;
  transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  stroke: #000;
  stroke-width: 5.5;
  stroke-linecap: round;
}

html.dark .line {
  stroke: #fff;
}
.ham .top {
  stroke-dasharray: 40 139;
}
.ham .bottom {
  stroke-dasharray: 40 180;
}
input.checkbox:checked ~ label.checkbox-label .ham .top {
  stroke-dashoffset: -98px;
}
input.checkbox:checked ~ label.checkbox-label .ham .bottom {
  stroke-dashoffset: -138px;
}

input.checkbox:checked ~ label.checkbox-label .ham-rotate {
  transform: rotate(45deg);
}
</style>
