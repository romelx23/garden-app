<template>
  <div class="container min-h-[75vh] mx-auto p-4 flex justify-center">
    <div
      class="flex flex-col max-w-4xl bg-slate-500 rounded-lg shadow-lg py-6 px-10"
    >
      <h1 class="text-3xl font-bold mb-4">My Profile</h1>
      <div class="flex items-center mb-4">
        <img
          class="size-36 rounded-full mr-4"
          src="https://media.discordapp.net/attachments/839620709517230081/1190791617997721753/image.png?ex=65a3161d&is=6590a11d&hm=4e2dbd923f404b7d3fb954757e8564142fcdabf09e37c050a4ed860add5298f3&=&format=webp&quality=lossless"
          alt="Profile Image"
        />
        <div>
          <h2 class="text-2xl font-semibold">John Doe</h2>
          <p class="text-gray-500">Software Developer</p>
        </div>
      </div>
      <div>
        <h3 class="text-xl font-semibold mb-2">Bio</h3>
        <p class="text-gray-200 text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae
          justo euismod, aliquet nunc id, aliquam nunc. Nulla facilisi.
        </p>
      </div>
      <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">Skills</h3>
        <ul class="list-disc list-inside">
          <li>JavaScript</li>
          <li>Vue.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
</script>

<style>
/* Add custom styles here */
</style>
