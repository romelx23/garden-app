<script setup lang="ts">
import { Plant, usePlantsStore } from "../../stores/plants";
import { useCartStore } from "../../stores/cart";
import { useRouter } from "vue-router";
const props = defineProps<{
  plant: Plant | null;
}>();

const useCart = useCartStore();
const plantsStore = usePlantsStore();
const router = useRouter();
</script>

<template>
  <div
    class="flex flex-col gap-3 pb-4 h-[600px] md:w-[500px] sm:w-[300px] w-[250px] max-w-[700px] bg-gradient-to-b from-green-600 to-green-500 rounded-xl shadow-xl shadow-transparent hover:shadow-[#ffffff2b] transition-all border-2 border-gray-800"
  >
    <div class="">
      <img
        :src="props.plant?.image"
        alt=""
        class="w-full h-72 object-cover rounded-xl"
      />
    </div>
    <!-- content -->
    <div class="flex flex-col px-5 gap-4">
      <p class="text-2xl font-semibold">{{ props.plant?.name }}</p>
      <p class="text-lg h-20 overflow-ellipsis line-clamp-3 overflow-hidden">
        {{ props.plant?.description }}
      </p>
      <div class="flex gap-2">
        <div class="flex w-1/2">
          <span class="text-3xl font-semibold">
            ${{ props.plant?.price }}
          </span>
        </div>
        <div class="flex flex-col gap-3 w-1/2">
          <div class="flex justify-between w-5/6">
            <button
              class="bg-gray-200 text-black font-bold rounded-lg p-2 px-5"
              @click="
                () => {
                  console.log(props.plant);
                  useCart.removeQuantity(props.plant);
                }
              "
            >
              -
            </button>
            <span class="text-2xl font-semibold">
              {{
                // useCart.productsCart.find((p) => p.id === props.plant?.id)
                //   ?.quantity || 1
                plant?.quantity || 1
              }}
            </span>
            <button
              class="bg-gray-200 text-black font-bold rounded-lg p-2 px-5"
              @click="
                () => {
                  console.log(props.plant);
                  useCart.addQuantity(props.plant);
                }
              "
            >
              +
            </button>
          </div>
          <div class="flex flex-col">
            <!-- button add cart -->
            <div class="flex w-full">
              <button
                class="bg-green-800 text-white rounded-lg p-2 px-5 flex items-center gap-2"
                @click="
                  () => {
                    console.log(props.plant);
                    useCart.addProduct(props.plant);
                  }
                "
                v-if="
                  useCart.productsCart.findIndex(
                    (p) => p.id === props.plant?.id
                  ) === -1
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-basket"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path
                    d="M5.001 8h13.999a2 2 0 0 1 1.977 2.304l-1.255 7.152a3 3 0 0 1 -2.966 2.544h-9.512a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304z"
                  />
                  <path d="M17 10l-2 -6" />
                  <path d="M7 10l2 -6" />
                </svg>
                <span className="hidden md:block"> Agregar al carrito </span>
              </button>
              <button
                class="bg-red-500 text-white rounded-lg p-2 px-5 flex gap-2 items-center"
                @click="
                  () => {
                    console.log(props.plant);
                    useCart.removeProduct(props.plant);
                  }
                "
                v-else
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-basket-x"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M17 10l-2 -6" />
                  <path d="M7 10l2 -6" />
                  <path
                    d="M13.5 20h-6.256a3 3 0 0 1 -2.965 -2.544l-1.255 -7.152a2 2 0 0 1 1.977 -2.304h13.999a2 2 0 0 1 1.977 2.304l-.532 3.03"
                  />
                  <path d="M10 14a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                  <path d="M22 22l-5 -5" />
                  <path d="M17 22l5 -5" />
                </svg>
                <span className="hidden md:block"> Eliminar del carrito </span>
              </button>
            </div>
            <!-- button add favorite -->
            <button
              @click="
                () => {
                  // console.log(props.plant);
                  plantsStore.addMyPlant(props?.plant?.id || 0);
                }
              "
              class="bg-red-500 rounded-full p-5 flex justify-center items-center gap-2 absolute top-60 right-10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-heart"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
                />
              </svg>
              <!-- <span className="hidden md:block text-sm">
                Agregar a favoritos
              </span> -->
            </button>
            <!-- button go detail -->
            <button
              @click="
                () => {
                  router.push({
                    name: 'plant',
                    params: { id: props.plant?.id },
                  });
                }
              "
              class="bg-violet-500 rounded-lg p-2 px-5 flex items-center gap-2 mr-7 mt-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"
                />
                <path d="M11 13l9 -9" />
                <path d="M15 4h5v5" />
              </svg>
              <span className="hidden md:block"> Ir al Detalle </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
