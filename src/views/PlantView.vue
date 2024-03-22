<template>
  <div class="container mx-auto">
    <div
      class="animation-enter-active bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-amber-200 via-violet-600 to-sky-900 shadow-md rounded-lg p-8 min-h-[70vh]"
    >
      <div class="flex justify-between">
        <h1 class="text-2xl font-bold mb-4">Detalle de la planta</h1>
        <template v-if="isExist">
          <button
            class="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            @click="handleDeletePlant(plantId)"
          >
            Delete Plant
          </button>
        </template>
        <template v-if="!isExist">
          <button
            class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
            @click="handleAddPlant(plantId)"
          >
            Add Plant
          </button>
        </template>
      </div>
      <h1 class="text-2xl font-bold mb-4">{{ plant?.name }}</h1>
      <div class="flex items-center mb-4">
        <img
          :src="plant?.image"
          alt="Plant Image"
          class="w-32 h-32 rounded-full mr-4"
        />
        <div>
          <p class="text-white font-semibold text-xl">
            Scientific Name: {{ plant?.name }}
          </p>
          <p class="text-white font-semibold text-xl">
            Watering Frequency: {{ plant?.wateringFrequency }}
          </p>
        </div>
      </div>
      <p class="text-white font-semibold text-xl">{{ plant?.description }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute, useRouter } from "vue-router";

import { ref } from "vue";
import { usePlantsStore } from "../stores/plants";

const { plants, existPlant, myPlants, addMyPlant, deleteMyPlant } =
  usePlantsStore();
console.log(plants);

const router = useRoute();
const navigation = useRouter();

const plantId = Number(router.params.id);

if (!router.params.id || myPlants.find((p) => p.id !== plantId)) {
  // throw new Error('No plant id');
  navigation.push("/not-found");
}

const plant = plants.find((plant) => plant.id === plantId);

const isExist = ref(myPlants.some((p) => p.id === plantId));

// const plantRef = ref(plant);

const handleAddPlant = (id: number) => {
  console.log({ id });
  addMyPlant(id);
  isExist.value = true;
};

// watch(myPlants, (value) => {
//   console.log({ value });
//   isExist.value = value.some((p) => p.id === plantId);
// });

const handleDeletePlant = (id: number) => {
  console.log({ id });

  isExist.value = false;

  deleteMyPlant(id);
};

console.log(existPlant(plantId));
console.log(myPlants);

// console.log(plantRef.value);
</script>

<style>
/* Add your custom styles here */

.animation-enter-active {
  animation: enter 0.5s ease-out;
}

.animation-leave-active {
  animation: leave 0.5s ease-out;
}

@keyframes enter {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes leave {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
}
</style>
