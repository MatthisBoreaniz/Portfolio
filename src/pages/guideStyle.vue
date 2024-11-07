<script setup lang="ts">
import { pb } from '@/backend';
import PlusProjetsDefault from '@/components/Btn/btnPlusProjetsDefault.vue'
import CardProjet from '@/components/cardProjet.vue';
import HeaderNav from '@/components/HeaderMenu.vue';

const projetslst = await pb.collection('projets').getFullList();
</script>

<template>
    <HeaderNav />
    <PlusProjetsDefault>Plus de Projets</PlusProjetsDefault>
    <h1 class="font-calistoga text-2xl">Le text principal</h1>
    <div class="flex flex-wrap justify-center">
        <CardProjet v-for="projet in projetslst" :key="projet.id" v-bind="projet" />

    </div>
    <div class="bg-DeepBlue">
    </div>


    <div class="h-[500px] w-full" style="background: linear-gradient(196.1deg, #000 24.6%, #3f28f2 85.59%);">


    </div>
</template>