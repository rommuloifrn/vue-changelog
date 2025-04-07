<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import {posts} from './posts'


</script>

<template>
  Strategi Changelog :)


  <div v-for="post in posts">
    {{ post.titulo }}
  </div>

</template>

<style scoped>

</style>
