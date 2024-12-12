<script setup lang="ts">
import type { ProjetsResponse } from '@/pocketbase-types'
import ImgPb from '@/pages/ImgPb.vue'

const props = defineProps<ProjetsResponse<any>>()
</script>

<template>
<div class="w-full sm:w-[400px] h-[280px] relative border-2 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
    <ImgPb
        :record="props"
        :filename="props.image"
        class="w-full h-[202px] object-cover transition-transform duration-300 hover:scale-110"
    />
    <div class="w-full h-[78px] absolute bottom-0 flex items-center justify-center bg-gradient-to-t from-black to-transparent p-2 transition-opacity duration-300 hover:opacity-100">
        <p class="text-sm text-center text-white font-calistoga">
            {{ props.titre }}
        </p>
    </div>
</div>

</template>
