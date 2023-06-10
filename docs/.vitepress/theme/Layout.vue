<script setup lang="ts">
import DefaultTheme from "vitepress/theme"
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <img src="/favicon.svg">
    </template>
  </DefaultTheme.Layout>
</template>

<style scoped>
img {
  width: 100%;
  padding: 4rem;
}

@media (min-width: 960px) {
  img {
    max-width: 400px;
  }
}
</style>
