<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { pb } from '@/backend';


const listProjets = await pb.collection('projets').getFullList()
</script>

<template>

<div>

    <h1>Les projets </h1>
        <p v-for="unProjet in listProjets" :key="unProjet.id">{{ unProjet.titre }}</p>
   
</div>

</template>