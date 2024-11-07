<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';
import Elipse from '@/components/Elipse.vue';

</script>

<template>
  <div class="overflow-x-hidden" style="background: linear-gradient(196.1deg, #000 24.6%, #3f28f2 85.59%); min-height: 100vh; position: relative;">
    <HeaderMenu />
    <div class="flex flex-col items-center justify-center space-y-1 my-auto overflow-x-hidden" style="min-height: calc(100vh - 60px); position: relative;">
      <h1 class="text-White text-2xl font-calistoga">Matthis Boreaniz</h1>
      <h2 class="text-White text-xl font-calistoga">Développeur web</h2>
    </div>
  <div class="md:block lg:block hidden">
    <Elipse class="absolute top-0 right-0" style="width: 90vw; height: 90vw; background-color: white; opacity: 0.050; border-radius: 50%; transform: translate(10%, -60%);" />
  </div>
  </div>
  
</template>