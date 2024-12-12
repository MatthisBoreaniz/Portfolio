<script setup lang="ts">
import { LogInWithGithub, LogInWithGoogle, user, logout } from '@/backend';
</script>


<template>
  <div>
    <div v-if="user">
      <button @click="logout" style="padding: 10px 20px; background-color: #f44336; color: white; border: none; border-radius: 5px; cursor: pointer;">
        {{ user.username }} Log out
      </button>
    </div>
    <div v-else>
      <button @click="LogInWithGithub" style="padding: 10px 20px; background-color: #333; color: white; border: none; border-radius: 5px; cursor: pointer; margin-right: 10px;">
        Log in with Github
      </button>
      <button @click="LogInWithGoogle" style="padding: 10px 20px; background-color: #4285F4; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Log in with Google
      </button>
    </div> 
  </div>
</template>