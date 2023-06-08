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
  max-height: 400px;
}
</style>