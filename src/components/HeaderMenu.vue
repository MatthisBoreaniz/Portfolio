<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router/auto'

const isActiveMenu = ref(false)

const toggleMenu = () => {
  isActiveMenu.value = !isActiveMenu.value
}

const scrollToSection = () => {
  const section = document.querySelector('#apropos');
  if (!section) {
    window.location.href = '/#apropos';
    window.addEventListener('load', () => {
      const section = document.querySelector('#apropos');
      if (section) {
        const yOffset = -80; 
        const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
    return;
  }

}
</script>

<template>
  <nav
    class="lg-w-full relative mx-auto flex w-full items-center justify-between space-x-5 p-3 lg:justify-between lg:rounded-none lg:p-5"
  >
    <div>
      <RouterLink to="/"><p class="mx-10 font-calistoga text-base text-white">MB</p></RouterLink>
    </div>

    <div class="mr-10 lg:hidden">
      <button @click="toggleMenu" class="relative mr-10 h-8 w-8 focus:outline-none">
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
      <ul class="font-calistoga text-white lg:flex lg:space-x-20 lg:text-sm">
        <li>
          <RouterLink @click.prevent="isActiveMenu = false" to="/projets">Projets</RouterLink>
        </li>
        <li>
          <RouterLink @click.prevent="isActiveMenu = false" to="/Contact">Contact</RouterLink>
        </li>
        <li>
          <RouterLink @click.prevent="isActiveMenu = false; scrollToSection" :to="{ path: '/', hash: '#apropos' }">À propos</RouterLink>
        </li>
      </ul>
    </div>
    <div
      v-scroll-lock="isActiveMenu"
      :class="{ block: isActiveMenu, hidden: !isActiveMenu }"
      class="absolute left-0 right-0 z-10 w-full bg-black p-5 lg:hidden"
      style="top: 100%; margin-left: 0px; height: calc(100vh - 100%)"
    >
      <ul
        class="my-auto flex flex-col items-center justify-center space-y-20 font-calistoga text-white"
      >
        <li class="mt-20">
          <RouterLink @click.prevent="isActiveMenu = false" to="/projets">Projets</RouterLink>
        </li>
        <li>
          <RouterLink @click.prevent="isActiveMenu = false" to="/Contact">Contact</RouterLink>
        </li>
        <li>
          <RouterLink @click.prevent="isActiveMenu = false; scrollToSection" :to="{ path: '/', hash: '#apropos' }">À propos</RouterLink>
        </li>
        <li>
          <RouterLink @click.prevent="isActiveMenu = false" to="/guideStyle">Connexion</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>
