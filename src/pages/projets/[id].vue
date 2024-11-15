<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import HeaderMenu from '@/components/HeaderMenu.vue';
import { useRoute } from 'vue-router';
const route = useRoute('/projets/[id]')

const Projets = await pb.collection('projets').getOne(route.params.id)
</script>


<template>
    <div class="bg-animate h-screen">
        <HeaderMenu />
        <h1 class="font-calistoga text-white text-xl text-center"> Voici le projet {{ Projets.titre }}</h1>


    </div>
</template>