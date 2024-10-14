<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router/auto'
import  LogInOut from '@/components/LogInOut.vue'

</script>

<template>
 <h1 class="text-indigo-500 text-xl font-bold">C'est la page principale du template (Menu, Footer...)</h1>
  <LogInOut />
 <NAV>
  <UL>
    <RouterLink to="/">Accueil</RouterLink>
    <RouterLink to="/About">About</RouterLink>
  </UL>
 </NAV>
 <main>
  <RouterView v-slot="{ Component }">
    <Suspense>
      <component :is="Component" :key="$route.path" />
    </Suspense>
  </RouterView>
 </main>
  
</template>


