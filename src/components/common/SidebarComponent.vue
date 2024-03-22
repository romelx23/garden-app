<script setup lang="ts">
import { useThemeStore } from "../../stores/theme";
import { useCartStore } from "../../stores/cart";
// import { defineComponent } from "vue";
const themeStore = useThemeStore();
const cartStore = useCartStore();
// defineComponent({
//   name: "SidebarComponent",
//   setup() {
//     return {
//       themeStore,
//       cartStore,
//     };
//   },
// });
</script>

<template>
  <div
    class="min-h-screen fixed right-0 z-30 transition-all shadow-lg shadow-gray-800"
    :class="[
      themeStore.theme === 'dark'
        ? 'bg-slate-900 text-white'
        : 'bg-slate-100 text-black',
      cartStore.showBar
        ? 'w-72 min-w-72 translate-x-0'
        : 'w-0 min-w-0 translate-x-52',
    ]"
  >
    <div class="flex px-3">
      <h2 class="text-2xl font-semibold text-center py-4">Carrito</h2>
      <button
        @click="
          () => {
            console.log(cartStore.showBar);
            cartStore.showBar = false;
          }
        "
        class="ml-auto p-2"
        :class="themeStore.theme === 'dark' ? 'text-white' : 'text-black'"
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
          class="icon icon-tabler icons-tabler-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
    </div>
    <div class="flex flex-col max-h-[80vh] overflow-y-auto">
      <div class="flex flex-col gap-3">
        <div
          class="flex justify-between items-center px-4 py-2 bg-slate-200"
          :class="
            themeStore.theme === 'dark'
              ? 'bg-slate-700 text-white'
              : 'bg-slate-200 text-black'
          "
        >
          <p>Producto</p>
          <p>Cantidad</p>
          <p>Precio</p>
        </div>
        <div
          v-for="product in cartStore.productsCart"
          :key="product.id"
          class="flex justify-between items-center px-4 py-2"
        >
          <p class="text-sm line-clamp-2 overflow-hidden w-1/4">
            {{ product.name }}
          </p>
          <!-- <p>{{ product.quantity }}</p> -->
          <div class="flex gap-3">
            <button
              class="bg-gray-200 text-black font-bold rounded-lg px-3"
              @click="
                () => {
                  console.log(product);
                  cartStore.removeQuantity(product);
                }
              "
            >
              -
            </button>
            <span class="text-lg font-semibold">
              {{
                // useCart.productsCart.find((p) => p.id === props.plant?.id)
                //   ?.quantity || 1
                product?.quantity || 1
              }}
            </span>
            <button
              class="bg-gray-200 text-black font-bold rounded-lg px-3"
              @click="
                () => {
                  console.log(product);
                  cartStore.addQuantity(product);
                }
              "
            >
              +
            </button>
          </div>
          <p>{{ product.price }}</p>
          <!-- <button
            @click="
              () => {
                cartStore.removeProduct(product);
              }
            "
            class="p-2"
            :class="themeStore.theme === 'dark' ? 'text-white' : 'text-black'"
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
              class="icon icon-tabler icons-tabler-x"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button> -->
        </div>
      </div>
      <div class="flex justify-between items-center px-4 py-2">
        <p>Total</p>
        <p>{{ cartStore.totalProducts() }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
