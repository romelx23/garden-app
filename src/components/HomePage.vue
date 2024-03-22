<script setup lang="ts">
// import { RouterLink } from "vue-router";
import { usePlantsStore, Plant } from "../stores/plants";
import ModalComponent from "./common/ModalComponent.vue";
import CardComponent from "./common/CardComponent.vue";
import { ref } from "vue";

const { plants } = usePlantsStore();
const plantSelected = ref<Plant | null>(null);
const showModal = ref(false);
</script>

<template>
  <!-- view discover plants -->
  <!-- list plants -->
  <div class="w-full flex justify-center min-h-[78vh]">
    <div
      class="flex flex-wrap max-w-6xl place-content-center gap-10 px-4 md:px-10 py-5"
    >
      <!-- cards -->
      <div
        class="flex flex-col gap-3 pb-4 w-72 h-auto bg-gradient-to-b from-transparent to-green-600 rounded-xl shadow-xl shadow-transparent hover:shadow-[#ffffff2b] transition-all cursor-pointer"
        v-for="plant in plants"
        :key="plant.name"
        @click="
          () => {
            plantSelected = plant;
            showModal = true;
          }
        "
      >
        <!-- <RouterLink
          :to="{ name: 'plant', params: { id: plant.id } }"
          class="cursor-pointer"
        >
          <img
            :src="plant.image"
            alt=""
            class="w-72 h-60 object-cover rounded-xl"
          />
        </RouterLink> -->
        <div class="cursor-pointer">
          <img
            :src="plant.image"
            alt=""
            class="w-72 h-60 object-cover rounded-xl"
          />
        </div>
        <!-- </router-link> -->
        <p class="px-5 text-2xl font-semibold">{{ plant.name }}</p>
      </div>
      <ModalComponent
        :showModal="showModal"
        :toggleModal="() => (showModal = !showModal)"
      >
        <CardComponent :plant="plantSelected" />
      </ModalComponent>
    </div>
  </div>
</template>
