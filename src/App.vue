<script setup lang="ts">
import { RouterView } from "vue-router";
// import HelloWorld from "./components/HelloWorld.vue";
import MainLayout from "./components/layouts/MainLayout.vue";
</script>

<template>
  <MainLayout>
    <RouterView />
  </MainLayout>
</template>

<style scoped></style>
