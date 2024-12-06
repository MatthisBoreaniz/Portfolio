<script setup lang="ts">
import { pb } from '@/backend';
import { ref } from 'vue';
import ImgPb from './ImgPb.vue';

const listProjets = await pb.collection('projets').getFullList();
const photos = listProjets.flatMap(projet => [
  { id: projet.id, filename: projet.photo1, record: projet },
  { id: projet.id, filename: projet.photo2, record: projet },
  { id: projet.id, filename: projet.photo3, record: projet }
]).filter(photo => photo.filename); // Filtrer les photos non définies

const currentIndex = ref(0);

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % photos.length;
};

const prevSlide = () => {
  currentIndex.value = (currentIndex.value - 1 + photos.length) % photos.length;
};
</script>

<template>
    <div class="flex justify-center items-center min-h-screen bg-animate">
        <div class="relative w-full max-w-4xl mx-auto overflow-hidden py-10">
            <div class="relative flex items-center justify-center h-96 ">
                <div
                    v-for="(photo, index) in photos"
                    :key="photo.id + photo.filename"
                    class="absolute transition-all duration-500 ease-in-out rounded-lg shadow-lg"
                    :class="{
                        'z-20 scale-100 opacity-100': index === currentIndex,
                        'z-10 scale-90 opacity-80 left-[50%]': index === (currentIndex - 1 + photos.length) % photos.length,
                        'z-10 scale-90 opacity-80 right-[50%]': index === (currentIndex + 1) % photos.length
                    }"
                >
                    <ImgPb
                        :record="photo.record"
                        :filename="photo.filename"
                        class="w-[500px] h-auto object-contain rounded-lg"
                        :class="
                        {
                            'scale-100 opacity-100': index === currentIndex,
                            'scale-90 opacity-80': index !== currentIndex
                        }
                        "
                    />
                </div>
            </div>

            <button
                @click="prevSlide"
                class="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-black rounded-full p-3 shadow-lg z-30"
            >
                ‹
            </button>
            <button
                @click="nextSlide"
                class="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-100 hover:bg-gray-300 text-black rounded-full p-3 shadow-lg z-30"
            >
                ›
            </button>
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