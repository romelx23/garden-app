<script setup lang="ts">
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";
console.log("Logo");
defineComponent({
  name: "LogoComponent",
});
</script>

<template>
  <RouterLink to="/" class="flex items-center gap-3">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="size-10"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M7 15h10v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-4z" />
      <path d="M12 9a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3" />
      <path d="M12 11a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3" />
      <path d="M12 15l0 -6" />
    </svg>
    <h1 class="text-lg font-semibold">PlantasRoom</h1>
  </RouterLink>
</template>
