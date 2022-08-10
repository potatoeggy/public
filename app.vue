<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  box-sizing: border-box;
  /* for that cool wave dark mode effect */
  z-index: 1;
  position: relative;
}

html,
body,
div#__nuxt {
  height: 100%;
  width: 100%;
}

:root {
  --text-color: #243746;
  --bg: #f1e7d0;
}

.dark {
  --text-color: #ebf4f1;
  --bg: #091a28;
}
</style>
