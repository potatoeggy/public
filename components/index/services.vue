<script setup lang="ts"></script>

<template>
  <div
    class="container prose dark:prose-invert w-full flex flex-col items-center mt-9"
  >
    <h1 class="m-0">Services</h1>
    <p class="prose dark:prose-invert">
      This site is statically generated using
      <a href="https://v3.nuxtjs.org">Nuxt.js</a> with the help of templates and
      Markdown — because really, writing HTML by hand is tedious and I don't
      know why I ever tried — and its source is available
      <a href="https://github.com/potatoeggy/public">here</a>.
    </p>
    <!-- i could make this a list but god i'm so tired with nuxt -->
    <div class="flex justify-around flex-wrap gap-8 items-center">
      <ServiceCard
        name="Gitea"
        href="https://git.eggworld.tk"
        img="/assets/images/services/gitea.png"
      >
        Self-hosted GitHub
      </ServiceCard>
      <ServiceCard
        name="Eifueo"
        href="https://eifueo.eggworld.tk"
        img="/assets/images/services/eifueo.svg"
      >
        Note collection
      </ServiceCard>
      <ServiceCard
        name="Primoprod"
        href="https://primoprod.eggworld.tk"
        img="/assets/images/services/primogem.png"
      >
        Wish simulator
      </ServiceCard>
      <ServiceCard
        name="Calibre"
        href="https://calibre.eggworld.tk"
        img="/assets/images/services/calibre-web.png"
      >
        Kobo Cloud
      </ServiceCard>
      <ServiceCard
        name="Plex"
        href="https://plex.eggworld.tk"
        img="/assets/images/services/plex.png"
      >
        Ad-filled media server
      </ServiceCard>

      <ServiceCard
        name="Jellyfin"
        href="https://jellyfin.eggworld.tk"
        img="/assets/images/services/jellyfin.png"
      >
        FOSS media server
      </ServiceCard>

      <ServiceCard
        name="Minecraft"
        href="minecraft.eggworld.tk"
        img="/assets/images/services/minecraft.png"
        :unclickable="true"
      >
        Whitelisted
      </ServiceCard>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: unset;
}
</style>
