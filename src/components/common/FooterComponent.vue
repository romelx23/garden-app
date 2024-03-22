<script setup lang="ts">
import { useThemeStore } from "../../stores/theme";
import LogoComponent from "./LogoComponent.vue";

const curentYear = new Date().getFullYear();
const themeAction = useThemeStore();
console.log(themeAction.theme);
</script>

<template>
  <footer
    class="flex flex-wrap justify-between w-full max-w-7xl mb-5 mx-auto rounded-lg pt-10 pb-10 mt-5 px-5 transition-colors"
    :class="{
      'bg-green-800 text-white': themeAction.theme === 'dark',
      'bg-green-300 text-gray-700': themeAction.theme === 'light',
    }"
  >
    <div class="flex flex-col text-lg">
      <LogoComponent />
    </div>
    <span class="flex items-center flex-col gap-1 text-sm lg:text-xl">
      <p class="">{{ curentYear }}</p>
      <p class="max-w-20 lg:max-w-72 text-center">
        Todos los derechos reservados
      </p>
    </span>
    <div class="flex flex-col gap-2">
      <h3 class="text-xl font-bold">Redes Sociales</h3>
      <div class="flex flex-wrap justify-between">
        <a
          href="https://www.facebook.com/romel.rom.5"
          target="_blank"
          rel="noopener"
          class="text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-meta"
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
            <path
              d="M12 10.174c1.766 -2.784 3.315 -4.174 4.648 -4.174c2 0 3.263 2.213 4 5.217c.704 2.869 .5 6.783 -2 6.783c-1.114 0 -2.648 -1.565 -4.148 -3.652a27.627 27.627 0 0 1 -2.5 -4.174z"
            />
            <path
              d="M12 10.174c-1.766 -2.784 -3.315 -4.174 -4.648 -4.174c-2 0 -3.263 2.213 -4 5.217c-.704 2.869 -.5 6.783 2 6.783c1.114 0 2.648 -1.565 4.148 -3.652c1 -1.391 1.833 -2.783 2.5 -4.174z"
            />
          </svg>
        </a>
        <a
          href="https://www.instagram.com/romelrom/"
          target="_blank"
          rel="noopener"
          class="text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-instagram"
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
            <path
              d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"
            />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M16.5 7.5l0 .01" />
          </svg>
        </a>
        <a
          href="https://twitter.com/romelrom"
          target="_blank"
          rel="noopener"
          class="text-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brand-x"
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
            <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
