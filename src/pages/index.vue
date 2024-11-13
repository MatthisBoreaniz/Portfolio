<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue'
import Elipse from '@/components/Elipse.vue'
</script>

<template>
  <div
    class="bg-animate bg-smoke  overflow-x-hidden"
    style="min-height: 100vh; position: relative"
  >
    <HeaderMenu />
    <div
      class="my-auto flex flex-col items-center justify-center space-y-1 overflow-x-hidden"
      style="min-height: calc(100vh - 60px); position: relative"
    >
      <h1 class="font-calistoga text-base text-White lg:text-xl">Matthis Boreaniz</h1>
      <h2 class="font-calistoga text-sm text-White lg:text-lg">Développeur web</h2>
    </div>
    <div class="hidden lg:block">
      <Elipse
        class="absolute right-0 top-0"
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

    <section class=" bg-black py-20">
      <div class="mx-auto flex w-11/12 lg:w-2/4 rounded-3xl bg-white bg-opacity-10 flex-col lg:flex-row">
      <div class="flex flex-col items-center justify-between rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none bg-white p-5 mb-4 lg:mb-0 lg:mr-4" style="flex: 1 1 45%;">
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

      <div class="flex-1 p-4 font-calistoga text-white" style="flex: 1 1 55%;">
        <p class="mb-10">
        J’ai 20 ans et je suis actuellement en 2 ème année de But des Métiers du Multimédias et
        de l’internet à l’Iut de Montbéliard dans le domaine du développement web.
        </p>
        <p class="mb-10">
        J’ai pour objectif de devenir développeur web et plus spécifiquement développeur front
        end , je maitrise notamment différents langages de programmations comme HTML, CSS, et
        aussi Javascript, j’ai aussi beaucoup travailler lors de mon année sur le Framework Vues
        JS.
        </p>
        <p>
        Je vous montre donc à travers ce portfolio les différents projets auxquels j’ai pu
        prendre part durant ces deux années déjà effectuer au sein de la formation MMI.
        </p>
      </div>
      </div>


        <div class="my-24">
          <div class="flex space-x-16 justify-center pb-8">
            <img class="h-[150px]" src="../assets/Img/css-3 1.png" alt="CSS">
            <img class="h-[150px]" src="../assets/Img/html-1 2.png" alt="HTML">
            <img class="h-[150px]" src="../assets/Img/javascript-1 1.png" alt="JS">
          </div>
          <div class="flex space-x-16 justify-center">
            <img class="h-[150px]" src="../assets/Img/icons8-wordpress 1.png" alt="WORDPRESS">
            <img class="h-[150px]" src="../assets/Img/vue-js 1.png" alt="VUEJS">
          </div>
          <div class="flex justify-center">
            <img class="h-[150px]" src="../assets/Img/SQL.png" alt="SQL">
          </div>
        </div>
    </section>

  </div>
</template>
