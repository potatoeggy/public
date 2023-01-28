<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Bitter:wght@300;400;600;700;800;900&display=swap");

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
      font-weight: bold;
      text-decoration: none !important;
    }
  }
}

.prose article {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: Bitter, ui-sans-serif, system-ui, -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Open Sans", "Helvetica Neue",
      sans-serif;
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

    & > a {
      font-weight: 800;
    }
  }

  a:hover {
    @apply hover:text-blue-700 dark:hover:text-blue-400;
  }
  p,
  li {
    font-family: "Source Serif Pro", serif;
    line-height: 1.8;
    color: #111;
    font-size: 1.25rem;
  }
}
</style>
