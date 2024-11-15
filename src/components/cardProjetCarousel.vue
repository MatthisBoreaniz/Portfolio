<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types';
import ImgPb from '@/pages/ImgPb.vue';
const props = defineProps<ProjetsResponse<any>>();
</script>

<template>
  <div class="relative w-full h-full">
    <ImgPb
      v-if="props.image"
      :record="props"
      :filename="props.image"
      class="absolute inset-0 w-full max-w-full h-full object-cover blur-[3px]"
    />
    <div v-else class="text-white">Image not available</div>
    <div class="absolute inset-0 bg-black opacity-50"></div>

    <h2 class="absolute inset-0 flex items-center justify-center font-calistoga text-lg text-white">
      {{ props.titre }}
    </h2>
  </div>
</template>

