<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb, user } from '@/backend'
import HeaderMenu from '@/components/HeaderMenu.vue'
import { useRoute, useRouter } from 'vue-router'
import ImgPb from '../ImgPb.vue'
import sanitizeHtml from 'sanitize-html'
import { ref } from 'vue'

const route = useRoute('/projets/[id]')
const router = useRouter()

const Projets = ref( await pb.collection('projets').getOne(route.params.id))
const photos = [
  { id: Projets.value.id, filename: Projets.value.photo1, record: Projets.value },
  { id: Projets.value.id, filename: Projets.value.photo2, record: Projets.value },
  { id: Projets.value.id, filename: Projets.value.photo3, record: Projets.value }
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

function edit() {
  router.push({
    name: '/projets/edit/[[id]]',
    params: { id: Projets.value.id }
  })
}

async function deleteProjetById() {
  const confirmation = confirm('voulez vous vraiment supprimer ce projet ?')
  if (confirmation) {
    await pb.collection('projets').delete(route.params.id)
    router.push({ name: '/projets/' })
  }
}
</script>

<template>
  <div class="bg-animate">
    <HeaderMenu />
    <div class="p-5 md:p-10 flex flex-col items-center">
      <div class="flex  justify-center items-center gap-10">
        <h1 class="text-center font-calistoga md:text-4xl text-white mb-4">
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
          class="bg-gray-100 hover:bg-gray-300 hover:text-white text-black rounded-full p-2 md:p-3 shadow-md h-10 w-10 flex justify-center items-center"
        >
          ‹
        </button>
        <button
          @click="nextSlide"
          class="bg-gray-100 hover:bg-gray-300 hover:text-white text-black rounded-full p-2 md:p-3 shadow-md h-10 w-10 flex justify-center items-center"
          >
          ›
        </button>
      </div>
    </div>
  </div>
  <div>
    <button
      @click="edit"
      class="font-calistoga text-white text-center text-xs md:text-sm bg-purple-600 hover:bg-purple-800 py-4 px-4 rounded-full transition-colors duration-300 shadow-lg"
    >
      Modifier
    </button>
    <button
      @click="deleteProjetById"
      class="font-calistoga text-white text-center text-xs md:text-sm bg-red-600 hover:bg-red-800 py-4 px-4 rounded-full transition-colors duration-300 shadow-lg"
    >
      Supprimer
    </button>
  </div>
  <div class="py-10 flex justify-center">
    <a 
      :href="Projets.lien" 
      target="_blank" 
      class="font-calistoga text-white text-center text-xs md:text-sm bg-purple-600 hover:bg-purple-800 py-4 px-4 rounded-full transition-colors duration-300 shadow-lg"
    >
      Voir le site
    </a>

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
