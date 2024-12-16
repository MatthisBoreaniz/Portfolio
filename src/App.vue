<script setup lang="ts">
import Footer from './components/Footer.vue';
</script>

  <template>
  <main class="">
    <RouterView v-slot="{ Component }">
      <Suspense>
        <component :is="Component" :key="$route.path" />
      </Suspense>
    </RouterView>
  </main>
  <Footer/>
  </template>


