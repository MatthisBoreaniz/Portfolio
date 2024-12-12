<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend'
import HeaderMenu from '@/components/HeaderMenu.vue'
import { useRoute } from 'vue-router'
import ImgPb from '../ImgPb.vue'
import sanitizeHtml from 'sanitize-html'
import { ref } from 'vue'

const route = useRoute('/projets/[id]')

const Projets = await pb.collection('projets').getOne(route.params.id)
const photos = [
  { id: Projets.id, filename: Projets.photo1, record: Projets },
  { id: Projets.id, filename: Projets.photo2, record: Projets },
  { id: Projets.id, filename: Projets.photo3, record: Projets }
].filter(photo => photo.filename)

const currentIndex = ref(1)

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.length
}

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length
}

const goToSlide = (index: number) => {
  currentIndex.value = index
}
</script>

<template>
  <div class="bg-animate">
    <HeaderMenu />
    <div class="p-5 md:p-10 flex flex-col items-center">
      <div class="flex justify-center items-center gap-10">
        <h1 class="text-center font-calistoga text-2xl md:text-4xl text-white mb-4">
          {{ Projets.titre }}
        </h1>
        <ImgPb :record="Projets" :filename="Projets.logo" class=" object-cover  mb-4" />
      </div>
      <div class="w-full h-60 md:h-96">
      <ImgPb
        :record="Projets"
        :filename="Projets.image"
        class="w-full h-full object-cover rounded-lg shadow-lg"
      />
      </div>
    </div>

    <div class="flex flex-col items-center justify-center leading-3">
      <div class="p-5 w-11/12 md:w-2/3 font-calistoga text-white text-xs md:text-sm leading-loose" v-html="sanitizeHtml(Projets.description1)"></div>
      <div class="p-5 w-11/12 md:w-2/3 font-calistoga text-white text-xs md:text-sm leading-loose" v-html="sanitizeHtml(Projets.description2)"></div>
      <div class="p-5 w-11/12 md:w-2/3 font-calistoga text-white text-xs md:text-sm leading-loose" v-html="sanitizeHtml(Projets.description3)"></div>
    </div>
    
    <!-- Carousel -->
    <div class="flex justify-center items-center">
      <div class="relative w-full max-w-4xl mx-auto overflow-hidden pb-10 px-5">
      <!-- Slides -->
      <div class="relative flex items-center justify-center h-60 md:h-96">
        <div
          v-for="(photo, index) in photos"
          :key="photo.id + photo.filename"
          class="absolute transition-transform duration-500 ease-in-out rounded-lg shadow-lg cursor-pointer"
          :style="{ transform: `translateX(${(index - currentIndex) * 100}%)` }"
          @click="goToSlide(index)"
        >
          <ImgPb
            :record="photo.record"
            :filename="photo.filename"
            class="h-full w-[250px] md:w-[500px] object-contain rounded-lg"
          />
        </div>
      </div>

      <!-- Navigation -->
      <div class="flex justify-between items-center mt-5">
        <button
          @click="prevSlide"
          class="bg-gray-100 hover:bg-gray-300 text-black rounded-full p-2 md:p-3 shadow-md"
        >
          ‹
        </button>
        <button
          @click="nextSlide"
          class="bg-gray-100 hover:bg-gray-300 text-black rounded-full p-2 md:p-3 shadow-md"
          >
          ›
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
button {
  transition: background-color 0.3s, transform 0.3s;
}

button:hover {
  background-color: purple;
}
</style>
