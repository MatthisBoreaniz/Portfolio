<script setup lang="ts">
import { pb } from '@/backend';
import PlusProjetsDefault from '@/components/Btn/btnPlusProjetsDefault.vue'
import CardProjet from '@/components/cardProjet.vue';

const projetslst = await pb.collection('projets').getFullList();
</script>

<template>
    <PlusProjetsDefault>Plus de Projets</PlusProjetsDefault>
    <h1 class="font-calistoga text-2xl">Le text principal</h1>
    <div class="flex flex-wrap justify-center">
        <CardProjet v-for="projet in projetslst" :key="projet.id" v-bind="projet" />
    </div>
</template>