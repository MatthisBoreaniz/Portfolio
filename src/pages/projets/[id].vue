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
].filter(photo => photo.filename);


const currentIndex = ref(1);


const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length;
};

const goToSlide = (index: number) => {
      currentIndex.value = index;
};
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
        class="h-full w-full object-cover "
      />
    </div>
    <div class="flex flex-col justify-center items-center ">
      <div class="p-10 w-2/3 font-calistoga text-white" v-html="sanitizeHtml(Projets.description1)"></div>
      <div class="p-10 w-2/3 font-calistoga text-white" v-html="sanitizeHtml(Projets.description2)"></div>
      <div class="p-10 w-2/3 font-calistoga text-white" v-html="sanitizeHtml(Projets.description3)"></div>
    </div>
    
  </div>


 <div class="flex justify-center items-center min-h-screen bg-animate">
    <div class="relative w-full max-w-4xl mx-auto overflow-hidden py-10">
      <div class="relative flex items-center justify-center h-96">
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
            class="w-[500px] h-auto object-contain rounded-lg"
          />
        </div>
      </div>

      <div class="flex justify-around ">
          <button
            @click="prevSlide"
            class="top-0 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-black rounded-full p-3 shadow-lg z-30"
          >
            ‹
          </button>
          <button
            @click="nextSlide"
            class="top-0  transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-black rounded-full p-3 shadow-lg z-30"
          >
            ›
          </button>
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
