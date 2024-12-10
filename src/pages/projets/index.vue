<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import cardProjet from '@/components/cardProjet.vue';
import HeaderMenu from '@/components/HeaderMenu.vue';
import { RouterLink } from 'vue-router';

const listProjets = await pb.collection('projets').getFullList();
</script>

<template>

<div class="bg-animate">
    <HeaderMenu />
    <h1>Les projets </h1>
        <div v-for="unProjet in listProjets" :key="unProjet.id">
            <RouterLink :to="{
                name: '/projets/[id]',
                params: { id: unProjet.id }
            }">
                <cardProjet v-bind="unProjet" />
            </RouterLink>
                
        </div>
   
</div>

</template>