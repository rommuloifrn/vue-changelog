<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <router-link to="/">
    <div class="mb-5 mt-20">
      <span class="text-6xl font-bold">HUB SEBRAE RN <br> Changelog </span>

      <p class="text-base font-normal mt-4">
        A <i>sua</i> fonte de informação sobre a <i>nossa</i> entrega.
      </p>
    </div>
  </router-link>

  <RouterView />
</template>

<style scoped></style>
