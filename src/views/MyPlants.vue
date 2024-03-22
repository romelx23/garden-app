<template>
  <div class="container min-h-[75vh] mx-auto">
    <div class="flex justify-between items-center mb-4">
      <input
        v-model="searchTerm"
        type="text"
        placeholder="Search plants..."
        class="p-2 border border-gray-300 rounded-md w-1/2 text-black"
      />
      <div class="flex space-x-2">
        <button
          v-for="tag in tags"
          :key="tag"
          @click="toggleTag(tag)"
          :class="{
            'bg-blue-500 text-white': selectedTags.includes(tag),
            'bg-gray-400': !selectedTags.includes(tag),
          }"
          class="px-4 py-2 rounded-md"
        >
          {{ tag }}
        </button>
      </div>
    </div>
    <ul class="grid grid-cols-3 gap-4">
      <li
        v-for="plant in filteredPlants"
        :key="plant.id"
        class="border border-gray-300 rounded-md p-4"
      >
        <div class="flex justify-between pb-3">
          <h3 class="text-lg font-semibold">{{ plant.name }}</h3>
          <img
            :src="plant.image"
            alt="Plant Image"
            class="w-16 h-16 rounded-full mr-4"
          />
        </div>
        <p class="text-gray-500">{{ plant.description }}</p>
        <div class="mt-2">
          <span
            v-for="tag in plant.tags"
            :key="tag"
            class="inline-block bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm mr-2"
          >
            {{ tag }}
          </span>
        </div>
      </li>
    </ul>
    <!-- si no hay plantas -->
    <div class="flex flex-col" v-if="filteredPlants.length <= 0">
      <h1 class="text-2xl font-semibold">No hay plantas</h1>
      <p class="text-gray-500">Agrega una planta para comenzar</p>
      <router-link to="/" class="mt-4">
        <button class="bg-blue-500 text-white px-4 py-2 rounded-md">
          Agregar planta
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import { usePlantsStore } from "../stores/plants";
const searchTerm = ref("");
const tags = ref<string[]>(["Indoor", "Outdoor", "Flowering", "Foliage"]);
const selectedTags = ref<string[]>([]);

const { myPlants: plants } = usePlantsStore();

// const plants = ref([
//   {
//     id: 1,
//     name: "Snake Plant",
//     image:
//       "https://media.discordapp.net/attachments/839620709517230081/1191486151182274590/pNug7bBksRVsL54EEE5Wu9.png?ex=65a59cf3&is=659327f3&hm=d1d2f8852c6e5ea8cdcfa560aedd3eebfa12086144dcf9035f6455ac67b2906a&=&format=webp&quality=lossless&width=895&height=671",
//     description: "A popular indoor plant with long, upright leaves.",
//     tags: ["Indoor", "Foliage"],
//   },
//   {
//     id: 2,
//     name: "Peace Lily",
//     image:
//       "https://media.discordapp.net/attachments/839620709517230081/1191485925855854602/1566417254329_20190821-1566417255317-b9314f1d9f7a4668a466c5ffb1913a8f.png?ex=65a59cbd&is=659327bd&hm=685edfc60c859f75f5a0e891e821eb95de011b231344755df5dafe8ede2b8ec8&=&format=webp&quality=lossless&width=671&height=671",
//     description: "A beautiful flowering plant that thrives in shade.",
//     tags: ["Indoor", "Flowering"],
//   },
//   {
//     id: 3,
//     name: "Monstera",
//     image:
//       "https://media.discordapp.net/attachments/839620709517230081/1191485733303754912/MONSTERA-IMG_0835-scaled-e1684962544867.png?ex=65a59c8f&is=6593278f&hm=660e1fa92caa1a91ca67b49eb1796713ebb8c1ca4bb8e809f5ca4a095e943f9e&=&format=webp&quality=lossless&width=568&height=671",
//     description: "A trendy indoor plant with large fenestrated leaves.",
//     tags: ["Indoor", "Foliage"],
//   },
// ]);

const filteredPlants = computed(() => {
  return plants.filter((plant) => {
    const searchTermMatch = plant.name
      .toLowerCase()
      .includes(searchTerm.value.toLowerCase());
    const tagMatch =
      selectedTags.value.length === 0 ||
      selectedTags.value.some((tag) => plant.tags.includes(tag));
    return searchTermMatch && tagMatch;
  });
});

function toggleTag(tag: string) {
  if (selectedTags.value.includes(tag)) {
    selectedTags.value = selectedTags.value.filter(
      (selectedTag) => selectedTag !== tag
    );
  } else {
    selectedTags.value.push(tag);
  }
}
</script>

<style>
/* Add any custom styles here */
</style>
