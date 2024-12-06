<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import HeaderMenu from '@/components/HeaderMenu.vue'
import { useRoute } from 'vue-router'
import ImgPb from '../ImgPb.vue'
import sanitizeHtml from 'sanitize-html'
const route = useRoute('/projets/[id]')

const Projets = await pb.collection('projets').getOne(route.params.id)
</script>

<template>
  <div class="bg-animate">
    <HeaderMenu />
    <div class="p-10">
      <h1 class="flex justify-center p-10 font-calistoga text-xl text-white">
        {{ Projets.titre }}
      </h1>
      <ImgPb :record="Projets" :filename="Projets.logo" class="mx-auto max-w-full object-cover" />
    </div>
    <div class="h-screen">
      <ImgPb
        :record="Projets"
        :filename="Projets.image"
        class="h-full w-full max-w-full object-cover"
      />
    </div>
    <div class="p-10 w-2/3 font-calistoga text-white" v-html="sanitizeHtml(Projets.description1)"></div>
    <div class="p-10 w-2/3 font-calistoga text-white" v-html="sanitizeHtml(Projets.description2)"></div>
    <div class="p-10 w-2/3 font-calistoga text-white" v-html="sanitizeHtml(Projets.description3)"></div>

      
  </div>
</template>
