<script lang="ts" setup></script>
<template>
  <div
    class="bottom-bar bg-gray-900 text-white py-4 px-6 fixed bottom-0 left-0 w-full flex justify-between items-center md:hidden"
  >
    <div class="flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-search"
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
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
        <path d="M21 21l-6 -6" />
      </svg>
      <p class="text-xs">Buscar</p>
    </div>
    <div class="flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-calendar-month"
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
          d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"
        />
        <path d="M16 3v4" />
        <path d="M8 3v4" />
        <path d="M4 11h16" />
        <path d="M7 14h.013" />
        <path d="M10.01 14h.005" />
        <path d="M13.01 14h.005" />
        <path d="M16.015 14h.005" />
        <path d="M13.015 17h.005" />
        <path d="M7.01 17h.005" />
        <path d="M10.01 17h.005" />
      </svg>
      <p class="text-xs">Calendario</p>
    </div>
    <div class="flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-plant-2"
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
        <path d="M2 9a10 10 0 1 0 20 0" />
        <path d="M12 19a10 10 0 0 1 10 -10" />
        <path d="M2 9a10 10 0 0 1 10 10" />
        <path d="M12 4a9.7 9.7 0 0 1 2.99 7.5" />
        <path d="M9.01 11.5a9.7 9.7 0 0 1 2.99 -7.5" />
      </svg>
      <p class="text-xs">Mis Plantas</p>
    </div>
    <div class="flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon icon-tabler icon-tabler-user-circle"
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
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
        <path
          d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"
        />
      </svg>
      <p class="text-xs">Mis Plantas</p>
    </div>
  </div>
</template>
