<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { pb, user } from '@/backend'
import type { ProjetsResponse } from '@/pocketbase-types'
import { useRoute, useRouter } from 'vue-router'
import ImgPb from '@/pages/ImgPb.vue'

const route = useRoute('/projets/edit/[[id]]')
const router = useRouter()

const fichierUploader = ref<HTMLInputElement | null>(null)
const uploadImage1 = ref<HTMLInputElement | null>(null)
const uploadImage2 = ref<HTMLInputElement | null>(null)
const uploadImage3 = ref<HTMLInputElement | null>(null)
const uploadLogo = ref<HTMLInputElement | null>(null)

type Response = ProjetsResponse<{}>

const projet = reactive<Response>(
  route.params.id ? await pb.collection('projets').getOne(route.params.id) : ({} as Response)
)

const submit = async (event: Event) => {
  event.preventDefault()
  console.log('projet', { ...projet })

  const formData = new FormData()
  formData.append('titre', projet.titre)
  formData.append('description1', projet.description1)
  formData.append('description2', projet.description2)
  formData.append('description3', projet.description3)
  formData.append('lien', projet.lien)

  if (fichierUploader.value?.files?.[0]) {
    formData.append('image', fichierUploader.value.files[0])
  }
  if (uploadImage1.value?.files?.[0]) {
    formData.append('photo1', uploadImage1.value.files[0])
  }
  if (uploadImage2.value?.files?.[0]) {
    formData.append('photo2', uploadImage2.value.files[0])
  }
  if (uploadImage3.value?.files?.[0]) {
    formData.append('photo3', uploadImage3.value.files[0])
  }
  if (uploadLogo.value?.files?.[0]) {
    formData.append('logo', uploadLogo.value.files[0])
  }

  const newProjet = projet.id
    ? await pb.collection('projets').update(projet.id, formData)
    : await pb.collection('projets').create(formData)

  router.push({ name: '/projets/[id]', params: { id: newProjet.id } })
}
</script>

<template>
  <div class="bg-animate flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
    <div class="w-full max-w-4xl rounded-lg bg-white p-6 shadow-lg">
      <h1 class="mb-6 text-2xl font-bold" v-if="projet.id">Modifier le projet</h1>
      <h1 class="mb-6 text-2xl font-bold" v-else>Créer le Projet</h1>

      <form @submit.prevent="submit" class="space-y-6">
        <div class="flex flex-col items-center">
          <ImgPb
            v-if="projet.image"
            :filename="projet.image"
            :record="projet"
            class="mb-4 h-20 w-20 rounded-full"
          />
          <p v-else class="text-gray-500">Pas d'image de couverture</p>
          <label class="block">
            <span class="text-gray-700">Nouvel Avatar</span>
            <input
              type="file"
              ref="fichierUploader"
              class="mt-1 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none"
            />
          </label>
        </div>

        <div>
          <label for="titre" class="block text-sm font-medium text-gray-700">Nom du projet</label>
          <input
            type="text"
            id="titre"
            v-model="projet.titre"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label for="description" class="block text-sm font-medium text-gray-700"
            >Description</label
          >
          <textarea
            id="description"
            v-model="projet.description1"
            rows="5"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>

        <div>
          <label for="description2" class="block text-sm font-medium text-gray-700"
            >Description 2</label
          >
          <textarea
            id="description2"
            v-model="projet.description2"
            rows="5"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>

        <div>
          <label for="description3" class="block text-sm font-medium text-gray-700"
            >Description 3</label
          >
          <textarea
            id="description3"
            v-model="projet.description3"
            rows="5"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>

        <div>
          <label for="lien" class="block text-sm font-medium text-gray-700">Lien</label>
          <input
            type="text"
            id="lien"
            v-model="projet.lien"
            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>

        <div>
          <label for="photo1" class="block text-sm font-medium text-gray-700">Photo 1</label>
          <ImgPb
            v-if="projet.photo1"
            :filename="projet.photo1"
            :record="projet"
            class="mb-4 h-20 w-20 rounded-full"
          />
          <input
            type="file"
            ref="uploadImage1"
            class="mt-1 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none"
          />
        </div>

        <div>
          <label for="photo2" class="block text-sm font-medium text-gray-700">Photo 2</label>
          <ImgPb
            v-if="projet.photo2"
            :filename="projet.photo2"
            :record="projet"
            class="mb-4 h-20 w-20 rounded-full"
          />
          <input
            type="file"
            ref="uploadImage2"
            class="mt-1 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none"
          />
        </div>

        <div>
          <label for="photo3" class="block text-sm font-medium text-gray-700">Photo 3</label>
          <ImgPb
            v-if="projet.photo3"
            :filename="projet.photo3"
            :record="projet"
            class="mb-4 h-20 w-20 rounded-full"
          />
          <input
            type="file"
            ref="uploadImage3"
            class="mt-1 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none"
          />
        </div>

        <div>
          <label for="logo" class="block text-sm font-medium text-gray-700">Logo</label>
          <ImgPb
            v-if="projet.logo"
            :filename="projet.logo"
            :record="projet"
            class="mb-4 h-20 w-20 rounded-full"
          />
          <input
            type="file"
            ref="uploadLogo"
            class="mt-1 block w-full cursor-pointer rounded-lg border border-gray-300 bg-gray-50 text-sm text-gray-900 focus:outline-none"
          />
        </div>

        <div class="flex flex-col justify-between space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <button
            v-if="projet.id"
            type="submit"
            @touchstart="submit"
            class="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 sm:w-auto"
          >
            Enregistrer
          </button>
          <button
            v-if="!projet.id"
            type="submit"
            @touchstart="submit"
            class="w-full rounded-md bg-green-600 px-4 py-2 text-white hover:bg-green-700 sm:w-auto"
          >
            Créer
          </button>
          <button
            @click="router.back()"
            @touchstart="router.back()"
            type="button"
            class="rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Annuler
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
