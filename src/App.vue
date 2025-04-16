<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SugestaoModal from './components/SugestaoModal.vue';
</script>

<template>
  <router-link to="/">
    <div class="mb-5 mt-20">
      <span class="text-6xl font-bold">HUB SEBRAE RN <br> Changelog </span>

      <p class="text-base font-normal mt-4">
        A <i>sua</i> fonte de informação sobre a <i>nossa</i> entrega.
      </p>

      <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" class="cursor-pointer w-max px-5 py-2.5 mt-3 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
      Sugerir melhoria
    </button>
    </div>
  </router-link>

  <RouterView />

  <SugestaoModal />
</template>

<style scoped></style>
