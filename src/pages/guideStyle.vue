<script setup lang="ts">
import { pb } from '@/backend'
import PlusProjetsDefault from '@/components/Btn/btnPlusProjetsDefault.vue'
import CardProjet from '@/components/cardProjet.vue'
import HeaderNav from '@/components/HeaderMenu.vue'
import { ref } from 'vue'
import ImgPb from './ImgPb.vue'
const projetslist = await pb.collection('projets').getFullList()
import { useRoute } from 'vue-router/auto'
import CardProjetCarousel from '@/components/cardProjetCarousel.vue'
import Footer from '@/components/Footer.vue'



</script>

<template>
  <HeaderNav />
  <PlusProjetsDefault>Plus de Projets</PlusProjetsDefault>
  <h1 class="font-calistoga text-2xl">Le text principal</h1>
  <div class="flex flex-wrap justify-center">
    <CardProjet v-for="projet in projetslist" :key="projet.id" v-bind="projet" />
  </div>

  <div
    class="h-[500px] w-full"
    style="background: linear-gradient(196.1deg, #000 24.6%, #3f28f2 85.59%)"
    ></div>
    
    
    <div class="flex h-screen items-center justify-center bg-gray-100 px-5 no-scrollbar">
      <div class="flex snap-x snap-mandatory space-x-80 overflow-x-auto px-4 no-scrollbar">
        <div
        class="min-w-[80vw] h-[80vh] flex-shrink-0 snap-center no-scrollbar"
      v-for="unProjet in projetslist"
      :key="unProjet.id"
    >
      <RouterLink :to="
        {
          name: '/projets/[id]',
          params: { id: unProjet.id }
        }
      ">
        <CardProjetCarousel v-bind="unProjet" class="object-cover w-full h-full" />
      </RouterLink>
    </div>
  </div>
</div>
<Footer/>
</template>
