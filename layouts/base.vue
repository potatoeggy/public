<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-right: 10%;
  height: 100%;
  width: 100%;
}

.dark-mode body {
  background-color: #091a28;
  color: #ebf4f1;
}
</style>
