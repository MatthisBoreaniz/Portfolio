<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import Elipse from '@/components/Elipse.vue';

</script>

<template>
  <div class="overflow-x-hidden bg-animate bg-smoke h-screen" style=" min-height: 100vh; position: relative;" >
    <HeaderMenu />
    <div class="flex flex-col items-center justify-center space-y-1 my-auto overflow-x-hidden" style="min-height: calc(100vh - 60px); position: relative;">
      <h1 class="text-White lg:text-xl font-calistoga text-base">Matthis Boreaniz</h1>
      <h2 class="text-White lg:text-lg font-calistoga text-sm">Développeur web</h2>
    </div>
  <div class="hidden lg:block ">
    <Elipse class="absolute top-0 right-0" style="width: 1500px; height: 1500px; background-color: white; opacity: 0.050; border-radius: 50%; transform: translate(10%, -50%);" />
  </div>
  </div>
  
</template>