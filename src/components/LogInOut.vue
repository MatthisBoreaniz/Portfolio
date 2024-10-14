<script setup lang="ts">
import { LogInWithGithub, LogInWithGoogle, user, logout } from '@/backend';
</script>


<template>
  <div>
    <div v-if="user">
      <button @click="logout">{{ user.username }} Log out</button>
    </div>
    <div v-else>
      <button @click="LogInWithGithub">Log in with Github</button>
      <button @click="LogInWithGoogle">Log in with Google</button>
    </div> 
  </div>
</template>