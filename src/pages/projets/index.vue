<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import { useRoute, useRouter } from 'vue-router';
import cardProjet from '@/components/cardProjet.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import { RouterLink } from 'vue-router';
import { user, } from '@/backend';

const route = useRoute('/projets/[id]')
const router = useRouter()

const listProjets = await pb.collection('projets').getFullList();
function edit () {
    router.push({
        name: '/projets/edit/[[id]]',
        params: { id: route.params.id }
    })
}

</script>

<template>

<div class="bg-animate min-h-screen">
    <HeaderMenu />
    <h1 class="pt-28 font-calistoga text-base flex items-center justify-center text-white py-10">Mes projets </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-4 p-4 justify-center">
        <div v-for="unProjet in listProjets" :key="unProjet.id" class="p-2 flex justify-center">
            <RouterLink :to="{
                name: '/projets/[id]',
                params: { id: unProjet.id }
            }">
                <cardProjet v-bind="unProjet" />
            </RouterLink>
        </div>
    </div>
   
        
        <div class="flex justify-center" v-if="user">
            <button @click="edit" class="text-white font-calistoga hover:bg-white hover:text-black text-sm bg-Black border-2 p-2 rounded-lg mt-4">Créer un projet</button>
        </div>
        
    </div>
</template>