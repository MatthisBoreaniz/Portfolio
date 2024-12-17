<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import HeaderMenu from '@/components/HeaderMenu.vue';


</script>

<template>
    <div class="bg-animate h-screen">
        <HeaderMenu/>
        <div class="text-white font-calistoga text-center flex flex-col justify-center items-center h-full">
            <h1 class="lg:text-xl text-base">Erreur <span class="text-DeepBlue" style="-webkit-text-stroke: 0.5px black;">404</span></h1>
            <p class="lg:text-sm text-xs">Désolé, la page que vous recherchez n'existe pas. Vous pouvez revenir à la page d'accueil en appuyant juste <a href="/" class="underline text-DeepRed">ici.</a></p>
        </div>
    </div>


</template>