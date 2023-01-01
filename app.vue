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

.prose h2 > a,
.prose h3 > a,
.prose h4 > a,
.prose h5 > a,
.prose h6 > a {
  /*
  override default tailwind styles

  these have a default specificity of 0, 4, 0 so !important is basically the only way
  */
  @apply font-bold no-underline !important;
}

.prose h2 > a:hover::before,
.prose h3 > a:hover::before,
.prose h4 > a:hover::before,
.prose h5 > a:hover::before,
.prose h6 > a:hover::before {
  content: "#";
  position: absolute;
  left: -2rem;
  opacity: 0.5;
  font-style: italic;
}
</style>
