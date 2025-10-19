<template>
  <a href="#" class="go-top" />
</template>

<style scoped>
.go-top {
  --offset: 20rem;
  position: sticky;
  bottom: 1rem;
  left: 1rem;
  margin-right: 1rem;
  place-self: end;
  margin-top: calc(100vh + var(--offset));
  width: 2rem;
  height: 2rem;
  background: #ff8b24;
  border-radius: 1rem;
  box-shadow: 0 0.1rem 0.5rem 0 gray;
  z-index: 2;
}

html.dark .go-top {
  box-shadow: 0 0.1rem 0.5rem 0 black;
}

.go-top:before {
  content: "";
  position: absolute;
  inset: 30%;
  transform: translateY(20%) rotate(-45deg);
  border-top: 0.35rem solid #fff;
  border-right: 0.35rem solid #fff;
}
</style>
