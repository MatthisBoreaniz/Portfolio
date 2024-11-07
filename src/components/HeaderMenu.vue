<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router/auto'

const isActiveMenu = ref(false)

const toggleMenu = () => {
  isActiveMenu.value = !isActiveMenu.value
}
</script>

<template>
  <nav class="flex items-center lg:justify-between justify-between space-x-5 lg:p-5 lg-w-full mx-auto w-full p-3 lg:rounded-none relative">
    <div>
      <RouterLink to="/"><img src="../assets/Img/maison.png" alt="Logo Du Site" class="w-10 h-10" /></RouterLink>
    </div>

    <div class="mr-10 lg:hidden">
      <button @click="toggleMenu" class="relative h-8 w-8 focus:outline-none">
        <span
          :class="{ 'rotate-45': isActiveMenu, 'translate-y-2': !isActiveMenu }"
          class="absolute block h-1 w-full transform bg-white transition duration-300 ease-in-out"
        ></span>
        <span
          :class="{ '-rotate-45': isActiveMenu, '-translate-y-2': !isActiveMenu }"
          class="absolute block h-1 w-full transform bg-white transition duration-300 ease-in-out"
        ></span>
      </button>
    </div>

    <div class="hidden lg:block">
      <ul class="font-calistoga text-white lg:flex lg:space-x-10 lg:text-base">
        <li>
          <router-link @click.prevent="isActiveMenu = false" to="/">Projets</router-link>
        </li>
        <li>
          <router-link @click.prevent="isActiveMenu = false" to="/">Contact</router-link>
        </li>
        <li>
          <router-link @click.prevent="isActiveMenu = false" to="/">À propos</router-link>
        </li>
      </ul>
    </div>
    <div v-scroll-lock="isActiveMenu" :class="{ 'block': isActiveMenu, 'hidden': !isActiveMenu }" class="lg:hidden absolute left-0 right-0 w-full z-10 p-5 bg-black" style="top: 100%; margin-left: 0px; height: calc(100vh - 100%);">
      <ul class="font-calistoga text-white flex flex-col items-center justify-center space-y-20 my-auto">
      <li class="mt-20" >
        <router-link @click.prevent="isActiveMenu = false" to="/">Projets</router-link>
      </li>
      <li>
        <router-link @click.prevent="isActiveMenu = false" to="/">Contact</router-link>
      </li>
      <li>
        <router-link @click.prevent="isActiveMenu = false" to="/">À propos</router-link>
      </li>
      <li>
        <router-link @click.prevent="isActiveMenu = false" to="/guideStyle">Connexion</router-link>
      </li>
      </ul>
    </div>
    </nav>
  </template>

