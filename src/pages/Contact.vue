<!-- eslint-disable vue/multi-word-component-names -->
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

const notification = ref<string | null>(null)

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
      notification.value = 'Votre message a été envoyé avec succès.'
      form.value = { firstName: '', lastName: '', email: '', message: '' } // Reset the form
    } else {
      notification.value = "Une erreur est survenue lors de l'envoi du message."
    }
  } catch (error) {
    notification.value = "Une erreur est survenue lors de l'envoi du message."
  }
  setTimeout(() => {
    notification.value = null
  }, 2000)
}
</script>

<template>
  <div
    class="min-h-screen overflow-x-hidden bg-black"
    style="min-height: 100vh; position: relative"
  >
    <HeaderMenu class="z-50" />

    <div class="hidden lg:block">
      <Elipse
        class="top-50 absolute z-0"
        style="
          width: 1500px;
          height: 1500px;
          background-color: white;
          opacity: 0.05;
          border-radius: 50%;
          transform: translate(10%, -50%);
        "
      />
    </div>

    <div class="z-10 flex w-full flex-col ">
      <div class="mb-4 flex items-center">
        <h1
          class="inline-block whitespace-nowrap rounded-r-3xl bg-DeepBlue p-5 font-calistoga text-base text-white lg:text-lg"
        >
          Contactez moi
        </h1>
        <div class="h-1 w-full bg-white"></div>
      </div>
      <section class="flex flex-col justify-center lg:flex-row lg:gap-24">
        <div class="mb-10 flex flex-col items-center justify-center lg:mb-0">
          <h2 class="py-10 font-calistoga text-base text-white">Via mes réseaux</h2>
          <div>
            <ul class="flex flex-col items-center justify-center space-y-5">
              <li class="flex items-center justify-center space-x-3">
                <img
                  class="h-[50px] w-[50px]"
                  src="/src/assets/Img/DossierIcons/icons8-linkedin 1.png"
                  alt="LinkedinIcon"
                />
                <a
                  href="https://www.linkedin.com/in/matthis-boreaniz-70879a281/"
                  class="z-10 font-calistoga text-sm text-white"
                  >MatthisBoreaniz</a
                >
              </li>
              <li class="flex items-center justify-center space-x-3">
                <img
                  class="h-[50px] w-[50px]"
                  src="/src/assets/Img/DossierIcons/icons8-github 1.png"
                  alt="GithubIcon"
                />
                <a
                  href="https://github.com/MatthisBoreaniz"
                  class="z-10 font-calistoga text-sm text-white"
                  >MatthisBoreaniz</a
                >
              </li>
              <li class="flex items-center justify-center space-x-3">
                <img
                  class="h-[50px] w-[50px]"
                  src="/src/assets/Img/DossierIcons/icons8-insta 1.png"
                  alt="InstagramIcon"
                />
                <a
                  href="https://www.instagram.com/matthisboreaniz/"
                  class="z-10 font-calistoga text-sm text-white"
                  >MatthisBoreaniz</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full rounded-r-lg p-6 shadow-lg lg:w-[700px]">
          <h2 class="py-10 text-center font-calistoga text-base text-white">Ou mon formulaire !</h2>
          <form @submit.prevent="submitForm" class="flex flex-col gap-6">
            <input
              type="text"
              name="firstName"
              v-model="form.firstName"
              placeholder="Votre Prénom"
              class="border-2px z-10 w-full rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            />
            <input
              type="text"
              name="lastName"
              v-model="form.lastName"
              placeholder="Votre Nom"
              class="border-2px z-10 w-full rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            />
            <input
              type="email"
              name="email"
              v-model="form.email"
              placeholder="Votre Email"
              class="border-2px z-10 w-full rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            />
            <textarea
              name="message"
              v-model="form.message"
              placeholder="Votre Message"
              class="border-2px z-10 h-32 w-full resize-none rounded-2xl border border-DeepBlue bg-white p-2 text-black placeholder-gray-500"
            ></textarea>
            <button
              type="submit"
              class="z-10 self-end rounded-lg bg-DeepBlue px-2 py-1 font-calistoga text-sm text-white transition hover:bg-purple-700"
            >
              Envoyer
            </button>
          </form>
            <div v-if="notification" class="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 flex items-center justify-center w-full">
            <div class="rounded-lg bg-DeepBlue p-4 text-white shadow-lg">
              {{ notification }}
            </div>
            </div>
        </div>
      </section>
    </div>
  </div>
</template>
