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
    
    <div class="w-[200px] h-[81.6px] absolute left-[77px] top-[137px] group-hover:bg-white group-hover:border-black">
      <div class="flex flex-col justify-center items-center w-full h-full ">
        <ImgPb 
          :record="props"
          :filename="image"
          class="w-[200px] object-cover"
        />

        <p class="mt-10">{{ titre }}</p>
        
      </div>
    
    </div>
  </div>
</template>
