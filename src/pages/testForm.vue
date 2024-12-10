<script setup lang="ts">
import { ref } from 'vue'
import HeaderMenu from '@/components/HeaderMenu.vue'

const WEB3FORMS_ACCESS_KEY = '0a317027-cefc-41e5-979e-0c70315e3f4d'

interface FormData {
  firstName: string
  lastName: string
  email: string
  message: string
}

const form = ref<FormData>({
  firstName: '',
  lastName: '',
  email: '',
  message: ''
})

const submitForm = async () => {
  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        ...form.value
      })
    })

    const result = await response.json()

    if (result.success) {
      console.log('Form submitted successfully:', result)
      // Reset the form if needed
      form.value = { firstName: '', lastName: '', email: '', message: '' }
    } else {
      console.error('Form submission failed:', result)
    }
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
</script>

<template>
  <div class="min-h-screen bg-black">
    <HeaderMenu />

    <div class="flex w-full flex-col p-4">
      <div class="flex items-center mb-4">
        <h1 class="inline-block whitespace-nowrap rounded-r-3xl bg-DeepBlue p-5 font-calistoga lg:text-lg text-base text-white">
          Contactez moi
        </h1>
        <div class="h-1 w-full bg-white"></div>
      </div>
      <section class="flex flex-col lg:flex-row justify-center gap-10">
        <div class="flex flex-col justify-center items-center mb-10 lg:mb-0">
          <h2 class="font-calistoga text-base text-white py-10">via mes réseaux </h2>
          <div>
            <ul class="flex flex-col items-center justify-center space-y-5">
              <li class="flex items-center justify-center space-x-3">
                <img class="h-[50px] w-[50px]" src="/src/assets/Img/DossierIcons/icons8-linkedin 1.png" alt="LinkedinIcon" />
                <a href="https://www.linkedin.com/in/matthis-boreaniz-70879a281/" class="font-calistoga text-sm text-white">MatthisBoreaniz</a>
              </li>
              <li class="flex items-center justify-center space-x-3">
                <img class="h-[50px] w-[50px]" src="/src/assets/Img/DossierIcons/icons8-github 1.png" alt="GithubIcon" />
                <a href="https://github.com/MatthisBoreaniz" class="font-calistoga text-sm text-white">MatthisBoreaniz</a>
              </li>
              <li class="flex items-center justify-center space-x-3">
                <img class="h-[50px] w-[50px]" src="/src/assets/Img/DossierIcons/icons8-insta 1.png" alt="InstagramIcon" />
                <a href="https://www.instagram.com/matthisboreaniz/" class="font-calistoga text-sm text-white">MatthisBoreaniz</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full lg:w-2/4 rounded-r-lg p-6 shadow-lg">
          <h2 class="font-calistoga text-base text-center text-white py-10">Ou mon formulaire ! </h2>
          <form @submit.prevent="submitForm" class="flex flex-col gap-6">
            <input
              type="text"
              name="firstName"
              v-model="form.firstName"
              placeholder="Votre Prénom"
              class="border-2px w-full rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="lastName"
              v-model="form.lastName"
              placeholder="Votre Nom"
              class="border-2px w-full rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              v-model="form.email"
              placeholder="Votre Email"
              class="border-2px w-full rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            />
            <textarea
              name="message"
              v-model="form.message"
              placeholder="Votre Message"
              class="border-2px h-32 w-full resize-none rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            ></textarea>
            <button
              type="submit"
              class="self-end rounded-lg bg-DeepBlue px-2 py-1 font-calistoga text-sm text-white transition hover:bg-purple-700"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>
    </div>
  </div>
</template>