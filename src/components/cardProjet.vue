<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from '@/pages/ImgPb.vue'

const props = defineProps<ProjetsResponse<any>>()
</script>

<template>
  <div class="w-[355px] h-[355px] relative group hover:bg-white ">
    <div
      class="w-[355px] h-[355px] absolute left-[-3px] top-[-3px] rounded-[25px] bg-black border-[5px] border-white group-hover:bg-white group-hover:border-black"
    ></div>
    <p class="w-[355px] h-[78px] absolute left-0 top-[355px]  text-center text-Black group-hover:bg-white opacity-0 group-hover:opacity-100">
      {{ titre }}
    </p>
    <div class="w-[200px] h-[81.6px] absolute left-[77px] top-[137px] group-hover:bg-white group-hover:border-black">
      <div class="flex justify-center items-center w-full h-full">
        <ImgPb 
          :record="props"
          :filename="image"
          class="w-[200px] object-cover"
        />
      </div>
    </div>
  </div>
</template>
