<script setup lang="ts">
import { defineProps } from "vue";
const props = defineProps<{
  showModal: boolean;
  toggleModal: () => void;
}>();
// console.log(props.showModal);
// const showModal = ref(props.showModal || false);
</script>

<template>
  <div class="" v-if="props.showModal">
    <div
      class="flex min-h-screen w-full bg-white bg-opacity-45 justify-center items-center fixed top-0 left-0 z-50"
      @click="props.toggleModal"
    ></div>
    <div
      class="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-opacity-95 rounded-xl shadow-xl z-50"
    >
      <slot></slot>
    </div>
  </div>
</template>
