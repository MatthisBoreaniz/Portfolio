<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import PocketBase from 'pocketbase';
import { useRoute } from 'vue-router';
import { user } from '@/backend';
import LogInOut from '@/components/LogInOut.vue';
import  HeaderMenu from '@/components/HeaderMenu.vue';  

let pb: any = null;
const currentUser = ref();
const username = ref("");
const password = ref("");
const fullName = ref("");

const route = useRoute();

const loginMode = ref(true);

onMounted(async () => {
    pb = new PocketBase(import.meta.env.VITE_URL_POCKETBASE);

    pb.authStore.onChange(() => {
        currentUser.value = pb.authStore.model;
    }, true);
});

const doLogout = () => {
    pb.authStore.clear();
    currentUser.value = null;
    window.location.reload();
};

const doLogin = async () => {
    try {
        const authData = await pb.collection('users')
            .authWithPassword(username.value, password.value);

        // Logique de connexion réussie ici
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.model);

        // Rafraîchir la page après la connexion réussie
        window.location.reload();
    } catch (error) {
        alert('Erreur lors de la connexion');
    }
};

const doCreateAccount = async () => {
    try {
        const data = {
            "username": `user_${self.crypto.randomUUID().split("-")[0]}`,
            "email": username.value,
            "emailVisibility": true,
            "password": password.value,
            "passwordConfirm": password.value,
            "name": fullName.value
        };

        const record = await pb.collection('users').create(data);

        await doLogin();
    } catch (error) {
        alert('Erreur lors de la création du compte');
    }
};
</script>

<template>
    <div class="bg-animate">
        <HeaderMenu />
        <div class="flex min-h-screen items-center justify-center bg-Noir px-4 py-12 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-8 font-title">
                <div v-if="currentUser || user">
                    <h1 class="text-white">Bonjour {{ currentUser?.name || user?.username }}</h1>
                    <div>
                        <button type="button" @click="doLogout"
                            class="rounded-md text-white bg-red-600 px-3 py-2 text-sm font-semibold border border-red-600  shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:border hover:border-red-600 hover:text-red-600">Déconnexion</button>
                    </div>
                </div>
                <div v-else class="bg-Noir rounded-lg p-10">
                    <h1 class="text-white">{{ loginMode ? "Se connecter" : "Créer son compte" }}</h1>
                    <div class="mt-4">
                        <label for="username" class="block text-sm font-medium leading-6 text-White">Email</label>
                        <div class="mt-2">
                            <input v-model="username" type="text" name="username" id="username" autocomplete="none"
                                placeholder="Enter Email Address"
                                class="px-2 block w-full rounded-md border-0 py-1.5 text-Noir shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div class="sm:col-span-2 sm:col-start-1 mt-2">
                        <label for="password" class="block text-sm font-medium leading-6 text-White">Password</label>
                        <div class="mt-2">
                            <input v-model="password" type="password" name="password" id="password" autocomplete="none"
                                placeholder="Enter Password"
                                class="px-2 block w-full rounded-md border-0 py-1.5 text-Noir shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                        </div>
                    </div>
                    <div v-if="loginMode">
                        <div class="sm:col-span-2 sm:col-start-1 mt-2">
                            <button type="button" @click="doLogin"
                                class="mr-3 rounded-md bg-Gold px-3 py-2 text-sm font-semibold text-White shadow-sm hover:bg-DeepBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-Gold hover:font-bold hover-text-xl">Se
                                connecter</button>
                            <button type="button" @click="loginMode = false"
                                class="rounded-md bg-Cyan px-3 py-2 text-sm font-semibold text-White shadow-sm hover:bg-DeepBlue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:text-Cyan hover:font-bold hover-text-xl">Créer
                                un compte</button>
                        </div>
                    </div>
                    <div v-else>
                        <div class="sm:col-span-2 sm:col-start-1 mt-2">
                            <label for="fullName" class="block text-sm font-medium leading-6 text-White">Nom</label>
                            <div class="mt-2">
                                <input v-model="fullName" type="text" name="fullName" id="fullName" autocomplete="none"
                                    placeholder="Enter Full Name"
                                    class="px-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                            </div>
                        </div>
                        <div class="sm:col-span-2 sm:col-start-1 mt-2">
                            <button type="button" @click="doCreateAccount" :disabled="!fullName || !username || !password"
                                class="mr-3 rounded-md bg-Gold hover:bg-DeepBlue hover:border-Gold hover:border px-3 py-2 text-sm font-semibold text-White hover:text-Gold hover:font-bold hover-text-xl shadow-sm hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">S'inscrire</button>
                            <button type="button" @click="loginMode = true"
                                class="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-Rose shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 text-White hover:text-red-600 hover:border hover:border-red-600">Annuler</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex justify-center">
            <LogInOut />
        </div>
    </div>
</template>