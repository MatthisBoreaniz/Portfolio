<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue'
import Elipse from '@/components/Elipse.vue'
import { pb } from '@/backend'
const projetslist = await pb.collection('projets').getFullList()
import CardProjetCarousel from '@/components/cardProjetCarousel.vue'
import cardProjet from '@/components/cardProjet.vue'
</script>

<template>
  <div class="bg-animate bg-smoke overflow-x-hidden" style="min-height: 100vh; position: relative">
    <HeaderMenu class="z-10"/>
    <div
      class="my-auto flex flex-col items-center justify-center space-y-1 overflow-x-hidden"
      style="min-height: calc(100vh - 60px); position: relative"
    >
      <h1 class="font-calistoga text-base text-White lg:text-xl">Matthis Boreaniz</h1>
      <h2 class="font-calistoga text-sm text-White lg:text-lg">Développeur web</h2>
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

    <section class="bg-black py-20 relative z-10">
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

      <div class="my-24">
        <div class="flex justify-center space-x-16 pb-8 z-20">
          <div class="group relative transition-transform duration-300 hover:scale-110 z-20">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/css-3 1.png" alt="CSS" />
            <div
              class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block z-20"
            >
              <p class="font-calistoga">CSS</p>
            </div>
          </div>
          <div class="group relative transition-transform duration-300 hover:scale-110 z-20">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/html-1 2.png" alt="HTML" />
            <div
              class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block z-20"
            >
              <p class="font-calistoga">HTML</p>
            </div>
          </div>
          <div class="group relative transition-transform duration-300 hover:scale-110 z-20">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/javascript-1 1.png" alt="JS" />
            <div
              class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block z-20"
            >
              <p class="font-calistoga">JavaScript</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center space-x-16 z-20">
          <div class="group relative transition-transform duration-300 hover:scale-110 z-20">
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
          <div class="group relative transition-transform duration-300 hover:scale-110 z-20">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/vue-js 1.png" alt="VUEJS" />
            <div
              class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block z-20"
            >
              <p class="font-calistoga">VueJS</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center z-20">
          <div class="group relative transition-transform duration-300 hover:scale-110 z-20">
            <img class="h-[100px] lg:h-[150px]" src="../assets/Img/SQL.png" alt="SQL" />
            <div
              class="absolute bottom-full left-1/2 mb-2 hidden -translate-x-1/2 transform text-center text-white group-hover:block z-20"
            >
              <p class="font-calistoga">SQL</p>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-center font-calistoga lg:text-xl text-base text-White">Mes Projets</h2>
      <div class="relative hidden lg:block">
        <div class="no-scrollbar flex h-screen items-center justify-center px-5 z-10">
          <div class="no-scrollbar flex snap-x snap-mandatory space-x-32 overflow-x-auto px-4">
            <div
              class="no-scrollbar h-[80vh] min-w-[80vw] flex-shrink-0 snap-center"
              v-for="unProjet in projetslist"
              :key="unProjet.id"
            >
            <RouterLink :to="{ name: '/projets/[id]', params: { id: unProjet.id } }">
              <CardProjetCarousel v-bind="unProjet" class="h-full w-full object-cover  z-10  " />
            </RouterLink>
            </div>
          </div>
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

      <div class="flex flex-wrap justify-center lg:hidden" v-for="projet in projetslist" :key="projet.id" >
        <RouterLink :to="{ name: '/projets/[id]', params: { id: projet.id } }">
          
        <cardProjet v-bind="projet" />
        </RouterLink>

        <div></div>
      </div>

    </section>
  </div>
</template>