<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
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

.prose {
  /*
  override default tailwind styles

  these have a default specificity of 0, 4, 0 so !important is basically the only way
  */
  h2,
  h3,
  h4,
  h5,
  h6 {
    & > a {
      font-weight: bold !important;
      text-decoration: none !important;
    }
  }
}

.prose article {
  h2,
  h3,
  h4,
  h5,
  h6 {
    & > a:hover {
      @apply hover:text-blue-700 dark:hover:text-blue-400;
      &::before {
        content: "#";
        position: absolute;
        opacity: 0.5;
        left: -2rem;
        font-style: italic;
      }
    }
  }

  a:hover {
    @apply hover:text-blue-700 dark:hover:text-blue-400;
  }
  p {
    font-family: "Source Serif Pro", serif;
    line-height: 1.8;
    color: #111;
    font-size: 1.25rem;
  }
}
</style>
