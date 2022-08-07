<script setup lang="ts"></script>

<template>
  <ContentDoc tag="article" class="prose dark:prose-invert">
    <template #not-found>
      <!-- 404 -->
      <main class="prose dark:prose-invert">
        <h1>404 - Not Found</h1>
        <p>Maybe you can find somewhere else?</p>
      </main>
    </template>
  </ContentDoc>
</template>

<style>
article {
  width: 80%;
  height: 100%;
  padding-top: 2rem;
}
</style>
