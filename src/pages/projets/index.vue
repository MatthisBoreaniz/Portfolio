<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import cardProjet from '@/components/cardProjet.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import { RouterLink } from 'vue-router';

const listProjets = await pb.collection('projets').getFullList();
</script>

<template>

<div class="bg-animate min-h-screen">
    <HeaderMenu />
    <h1 class="font-calistoga text-base flex items-center justify-center text-white py-10">Mes projets </h1>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 justify-center">
            <div v-for="unProjet in listProjets" :key="unProjet.id" class="p-2 flex justify-center">
                <RouterLink :to="{
                    name: '/projets/[id]',
                    params: { id: unProjet.id }
                }">
                    <cardProjet v-bind="unProjet" />
                </RouterLink>
            </div>
        </div>
   
</div>

</template>