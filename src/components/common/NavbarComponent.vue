<script setup lang="ts">
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useThemeStore } from "../../stores/theme";
import LogoComponent from "./LogoComponent.vue";
import { useCartStore } from "../../stores/cart";
// import { storeToRefs } from "pinia";

const themeAction = useThemeStore();
// console.log({ themeAction });
const mobileMenuOpen = ref(false);
const cartStore = useCartStore();

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
console.log(themeAction.theme);
</script>

<template>
  <!-- <nav
    :class="{
      'bg-gray-800 text-white': themeAction.theme === 'dark',
      'bg-slate-200 text-black': theme === 'light',
    }"
  > -->
  <nav
    :class="[
      themeAction.theme === 'dark'
        ? 'bg-gray-800 text-white'
        : 'bg-slate-200 text-black',
    ]"
    class="transition-colors"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center w-full">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <LogoComponent />
          </div>
          <!-- Navigation Links -->
          <div class="justify-between items-center hidden md:flex w-full">
            <div class="ml-10 flex items-baseline space-x-4">
              <RouterLink
                to="/"
                class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >Descubir</RouterLink
              >
              <!-- <RouterLink
                to="/about"
                class="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >Calendario</RouterLink
              > -->
              <RouterLink
                to="/my-plants"
                class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >Mis Plantas</RouterLink
              >
              <!-- <RouterLink
                to="/my-profile"
                class="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-xl font-medium"
                >Mi Perfil</RouterLink -->
              <!-- > -->
            </div>
            <div class="flex gap-2">
              <!-- theme button -->
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 border-2 transition-colors"
                :class="{
                  'border-yellow-600 bg-yellow-500 hover:bg-yellow-400':
                    themeAction.theme !== 'dark',
                }"
                @click="themeAction.toggleTheme"
              >
                <svg
                  v-if="themeAction.theme === 'dark'"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-moon"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path
                    d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="icon icon-tabler icons-tabler-outline icon-tabler-sun"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
                  <path
                    d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"
                  />
                </svg>
              </button>
              <!-- cart button -->
              <button
                class="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-green-700 bg-green-800 border-2 transition-colors"
                :class="{
                  'border-green-500 bg-green-200 hover:bg-green-300 ':
                    themeAction.theme !== 'dark',
                }"
                @click="
                  () => {
                    cartStore.showBar = !cartStore.showBar;
                  }
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
                  class="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                  <path d="M17 17h-11v-14h-2" />
                  <path d="M6 5l14 1l-1 7h-13" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <!-- Mobile Menu Button -->
        <div class="-mr-2 flex md:hidden">
          <button
            @click="toggleMobileMenu"
            type="button"
            class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <!-- Heroicon name: menu -->
            <svg
              class="block h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <!-- Heroicon name: x -->
            <svg
              class="hidden h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <!-- Mobile Menu -->
    <div
      :class="{ block: mobileMenuOpen, hidden: !mobileMenuOpen }"
      class="md:hidden"
    >
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <!-- <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink> -->
        <RouterLink
          to="/"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Home</RouterLink
        >
        <RouterLink
          to="/about"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >About</RouterLink
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Services</a
        >
        <a
          href="#"
          class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >Contact</a
        >
      </div>
    </div>
  </nav>
</template>

<style scoped>
/* Add your custom styles here */
</style>
