<script setup lang="ts">
import FooterComponent from "../../components/common/FooterComponent.vue";
import NavbarComponent from "../../components/common/NavbarComponent.vue";
import BottomBar from "../../components/common/BottomBarComponent.vue";
import SidebarComponent from "../../components/common/SidebarComponent.vue";
import { useThemeStore } from "../../stores/theme.ts";
import { Toaster } from "vue-sonner";
const themeAction = useThemeStore();
</script>

<template>
  <div
    class="flex flex-col w-full min-h-screen transition-colors"
    :class="{
      'bg-gray-800 text-white': themeAction.theme === 'dark',
      'bg-slate-200 text-black': themeAction.theme === 'light',
    }"
  >
    <header>
      <!-- HTML Meta Tags -->
      <title>Plants APP - Rom</title>
      <meta
        name="description"
        content="Administrador de cuidado para las plantas de tu hogar"
      />

      <!-- Facebook Meta Tags -->
      <meta
        property="og:url"
        content="https://tailwindcss.com/docs/guides/vite"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Plants App - Rom" />
      <meta
        property="og:description"
        content="Administrador de cuidado para las plantas de tu hogar."
      />
      <meta
        property="og:image"
        content="https://tailwindcss.com/api/og?path=/docs/guides/vite"
      />

      <!-- Twitter Meta Tags -->
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="tailwindcss.com" />
      <meta
        property="twitter:url"
        content="https://tailwindcss.com/docs/guides/vite"
      />
      <meta
        name="twitter:title"
        content="Install Tailwind CSS with Vite - Tailwind CSS"
      />
      <meta
        name="twitter:description"
        content="Setting up Tailwind CSS in a Vite project."
      />
      <meta
        name="twitter:image"
        content="https://tailwindcss.com/api/og?path=/docs/guides/vite"
      />

      <!-- Meta Tags Generated via https://www.opengraph.xyz -->
      <NavbarComponent />
    </header>

    <main class="flex-1 w-full max-w-7xl mx-auto px-5">
      <slot></slot>
    </main>

    <FooterComponent />
    <BottomBar />
    <SidebarComponent />
    <Toaster />
  </div>
</template>
