<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref } from 'vue'
import HeaderMenu from '@/components/HeaderMenu.vue'
import Elipse from '@/components/Elipse.vue'
import { pb } from '@/backend'
const projetslist = await pb.collection('projets').getFullList()
import CardProjetCarousel from '@/components/cardProjetCarousel.vue'
import cardProjet from '@/components/cardProjet.vue'

const carousel = ref<HTMLElement | null>(null)

function scrollLeft() {
  if (carousel.value) {
    carousel.value.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' })
  }
}

function scrollRight() {
  if (carousel.value) {
    carousel.value.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' })
  }
}

const scrollToNextSection = () => {
  const nextSection = document.getElementById('next-section');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
};


</script>

<template>
  <div class="bg-animate bg-smoke overflow-x-hidden" style="min-height: 100vh; position: relative">
    <HeaderMenu class="z-10" />
    <div
      class="my-auto flex flex-col items-center justify-center space-y-1 overflow-x-hidden"
      style="min-height: calc(100vh - 60px); position: relative"
    >
      <h1 class="font-calistoga text-base text-White lg:text-xl">Matthis Boreaniz</h1>
      <h2 class="font-calistoga text-sm text-White lg:text-lg">Développeur web</h2>
      <button
        @click="scrollToNextSection"
        class="font-calistoga text-sm text-White bg-Black border-2 p-2 rounded-lg mt-4 z-20 absolute bottom-32 lg:right-4 lg:bottom-16 flex items-center justify-center"
        style="width: 50px; height: 50px; border-radius: 50%;">
        &#9660;
      </button>
    </div>
    <div class="hidden lg:block">
      <Elipse
        class="absolute right-0 top-0 z-0"
        style="
          width: 1500px;
          height: 1500px;
          background-color: white;
          opacity: 0.05;
          border-radius: 50%;
          transform: translate(10%, -50%);
        "
      />
    </div>

    <section id="next-section" class="relative z-20 bg-black py-20" >
      <div id="apropos">
        <div
          class="mx-auto flex w-11/12 flex-col rounded-3xl bg-white bg-opacity-10 lg:w-2/4 lg:flex-row"
        
        >
          <div
            class="mb-4 flex flex-col items-center justify-between rounded-t-3xl bg-white p-5 lg:mb-0 lg:mr-4 lg:rounded-l-3xl lg:rounded-tr-none"
            style="flex: 1 1 45%"
          >
            <img
              src="../assets/Img/Matthis.jpg"
              alt="Photo Matthis"
              class="h-56 w-56 rounded-full border-4 border-DeepBlue object-cover"
            />
            <div class="flex h-full flex-col justify-end">
              <h1 class="tx-lg text-center font-calistoga text-Black">
                Matthis Boreaniz <br />
                C'est moi !
              </h1>
            </div>
          </div>
          <div class="flex-1 p-4 font-calistoga text-white" style="flex: 1 1 55%">
            <p class="mb-10">
              J'ai 20 ans et je suis actuellement en 2ᵉ année de BUT Métiers du Multimédia et de
              l'Internet à l'IUT de Montbéliard, dans le domaine du développement web.
            </p>
            <p class="mb-10">
              J’ai pour objectif de devenir développeur web et plus spécifiquement développeur
              front-end. Je maîtrise notamment différents langages de programmation tels que HTML, CSS
              et JavaScript. J'ai également beaucoup travaillé durant mon année sur le framework
              Vue.js.
            </p>
            <p>
              Je vous présente donc, à travers ce portfolio, les différents projets auxquels j’ai pu
              prendre part durant ces deux années déjà effectuées au sein de la formation MMI.
            </p>
          </div>
        </div>
      </div>

      <div class="my-24" >
        <div class="z-20 flex justify-center space-x-16 pb-8">
          <div class="group relative z-20 transition-transform duration-300 hover:scale-110">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/css-3 1.png" alt="CSS" />
            <div
              class="absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block"
            >
              <p class="font-calistoga">CSS</p>
            </div>
          </div>
          <div class="group relative z-20 transition-transform duration-300 hover:scale-110">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/html-1 2.png" alt="HTML" />
            <div
              class="absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block"
            >
              <p class="font-calistoga">HTML</p>
            </div>
          </div>
          <div class="group relative z-20 transition-transform duration-300 hover:scale-110">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/javascript-1 1.png" alt="JS" />
            <div
              class="absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block"
            >
              <p class="font-calistoga">JavaScript</p>
            </div>
          </div>
        </div>
        <div class="z-20 flex justify-center space-x-16">
          <div class="group relative z-20 transition-transform duration-300 hover:scale-110">
            <img
              class="h-[100px] lg:h-[150px]"
              src="../assets/Img/icons8-wordpress 1.png"
              alt="WORDPRESS"
            />
            <div
              class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block"
            >
              <p class="font-calistoga">Wordpress</p>
            </div>
          </div>
          <div class="group relative z-20 transition-transform duration-300 hover:scale-110">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/vue-js 1.png" alt="VUEJS" />
            <div
              class="absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block"
            >
              <p class="font-calistoga">VueJS</p>
            </div>
          </div>
        </div>
        <div class="z-20 flex justify-center">
          <div class="group relative z-20 transition-transform duration-300 hover:scale-110">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/SQL.png" alt="SQL" />
            <div
              class="absolute bottom-full left-1/2 z-20 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block"
            >
              <p class="font-calistoga">SQL</p>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-center font-calistoga text-base text-White lg:text-xl">Mes Projets</h2>
      <div class="relative hidden lg:block">
        <div class="no-scrollbar z-10 flex h-screen items-center justify-center px-5">
          <button
            class="absolute left-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-25 p-3 font-calistoga text-white hover:text-black shadow-lg hover:bg-gray-300 hover:bg-opacity-100"
            @click="scrollLeft"
          >
            &#9664;
          </button>

          <div
            class="no-scrollbar flex snap-x snap-mandatory space-x-32 overflow-x-auto px-4"
            ref="carousel"
          >
            <div
              class="no-scrollbar h-[80vh] min-w-[80vw] flex-shrink-0 snap-center"
              v-for="unProjet in projetslist"
              :key="unProjet.id"
            >
              <RouterLink :to="{ name: '/projets/[id]', params: { id: unProjet.id } }">
                <CardProjetCarousel v-bind="unProjet" class="z-10 h-full w-full object-cover" />
              </RouterLink>
            </div>
          </div>

          <button
            class="absolute right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white bg-opacity-25 p-3 font-calistoga text-white shadow-lg hover:bg-gray-300 hover:text-black hover:bg-opacity-100"
            @click="scrollRight"
          >
            &#9654;
          </button>
        </div>
        <div class="hidden lg:block">
          <Elipse
            class="absolute right-0 top-0 z-0"
            style="
              right: 50%;
              transform: translate(50%, -50%);
              width: 1500px;
              height: 1500px;
              background-color: white;
              opacity: 0.05;
              border-radius: 50%;
              transform: translate(10%, -50%);
            "
          />
        </div>
      </div>

      
        <div
          class="flex flex-wrap justify-center lg:hidden"
          v-for="projet in projetslist"
          :key="projet.id"
        >
          <RouterLink :to="{ name: '/projets/[id]', params: { id: projet.id } }">
            <cardProjet class="my-10" v-bind="projet" />
          </RouterLink>
        </div>
    </section>
  </div>
</template>
