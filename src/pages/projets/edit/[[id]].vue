<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, reactive } from 'vue';
import { pb, user } from '@/backend';
import type { ProjetsResponse } from '@/pocketbase-types';
import { useRoute, useRouter } from 'vue-router';
import ImgPb from '@/pages/ImgPb.vue';

const route = useRoute('/projets/edit/[[id]]');
const router = useRouter();

const fichierUploader = ref<HTMLInputElement | null>(null);
const uploadImage1 = ref<HTMLInputElement | null>(null);
const uploadImage2 = ref<HTMLInputElement | null>(null);
const uploadImage3 = ref<HTMLInputElement | null>(null);
const uploadLogo = ref<HTMLInputElement | null>(null);

type Response = ProjetsResponse<{}>;

const projet = reactive<Response>(
  route.params.id
    ? await pb.collection('projets').getOne(route.params.id)
    : ({} as Response)
);

const submit = async (event: Event) => {
  event.preventDefault();
  console.log('projet', { ...projet });

  const formData = new FormData();
  formData.append('titre', projet.titre);
  formData.append('description1', projet.description1);
  formData.append('description2', projet.description2);
  formData.append('description3', projet.description3);

  if (fichierUploader.value?.files?.[0]) {
    formData.append('image', fichierUploader.value.files[0]);
  }
  if (uploadImage1.value?.files?.[0]) {
    formData.append('photo1', uploadImage1.value.files[0]);
  }
  if (uploadImage2.value?.files?.[0]) {
    formData.append('photo2', uploadImage2.value.files[0]);
  }
  if (uploadImage3.value?.files?.[0]) {
    formData.append('photo3', uploadImage3.value.files[0]);
  }
  if (uploadLogo.value?.files?.[0]) {
    formData.append('logo', uploadLogo.value.files[0]);
  }

  const newProjet = projet.id
    ? await pb.collection('projets').update(projet.id, formData)
    : await pb.collection('projets').create(formData);

  router.push({ name: '/projets/[id]', params: { id: newProjet.id } });
};
</script>

<template>
  <h1 v-if="projet.id">Modifier le projet</h1>
  <h1 v-if="!projet.id">Créer le Projet</h1>

  <div>
    <form method="post" @submit.prevent="submit" class="flex flex-col items-center gap-y-5">
      <ImgPb
        v-if="projet.image"
        :filename="projet.image"
        :record="projet"
        class="w-10 h-10 rounded-full mb-4"
      />
      <p v-else>Pas d'image de couverture</p>
      <label>
        <span class="block">Nouvel Avatar</span>
        <input type="file" ref="fichierUploader">
      </label>
      <div>
        <label for="titre">Nom du projet</label>
        <input type="text" id="titre" v-model="projet.titre"/>
      </div>
      <div>
        <label for="description">Description</label>
        <textarea type="text" rows="5" id="description" v-model="projet.description1"></textarea>
      </div>
      <div>
        <label for="description2">Description 2</label>
        <textarea type="text" rows="5" id="description2" v-model="projet.description2"></textarea>
      </div>
      <div>
        <label for="description3">Description 3</label>
        <textarea type="text" rows="5" id="description3" v-model="projet.description3"></textarea>
      </div>
      <div>
        <label for="photo1">Photo 1</label>
        <ImgPb
          v-if="projet.photo1"
          :filename="projet.photo1"
          :record="projet"
          class="w-10 h-10 rounded-full mb-4"
        />
        <input type="file" ref="uploadImage1">
      </div>
      <div>
        <label for="photo2">Photo 2</label>
        <ImgPb
          v-if="projet.photo2"
          :filename="projet.photo2"
          :record="projet"
          class="w-10 h-10 rounded-full mb-4"
        />
        <input type="file" ref="uploadImage2">
      </div>
      <div>
        <label for="photo3">Photo 3</label>
        <ImgPb
          v-if="projet.photo3"
          :filename="projet.photo3"
          :record="projet"
          class="w-10 h-10 rounded-full mb-4"
        />
        <input type="file" ref="uploadImage3">
      </div>
      <div>
        <label for="logo">Logo</label>
        <ImgPb
          v-if="projet.logo"
          :filename="projet.logo"
          :record="projet"
          class="w-10 h-10 rounded-full mb-4"
        />
        <input type="file" ref="uploadLogo">
      </div>
      <div>
        <button v-if="projet.id" type="submit">Enregistrer</button>
        <button v-if="!projet.id" type="submit">Créer</button>
        <button @click="router.back()">Annuler</button>
      </div>
    </form>
  </div>
</template>