<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';
import cardProjet from '@/components/cardProjet.vue';

const listProjets = await pb.collection('projets').getFullList();
</script>

<template>

<div>

    <h1>Les projets </h1>
        <div v-for="unProjet in listProjets" :key="unProjet.id">
            <cardProjet v-bind="unProjet" />
        </div>
   
</div>

</template>