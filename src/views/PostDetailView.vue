<script lang="ts" setup>
import type { Post } from '@/post'
import { usePostListStore } from '@/stores/post_list'
import { useRoute } from 'vue-router'

const route = useRoute()

let id: string = route.params.id as string

let postVizualizado: Post

let postList = usePostListStore()

postList.lista.forEach((post) => {
  if (post.id == id) postVizualizado = post
})

</script>

<template>
  <article
    href="#"
    class="block w-[40em] p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      <span class="text-blue-400">v{{ postVizualizado.versao }}</span> {{ postVizualizado.titulo }}
    </h5>

    <img :src="postVizualizado.capaPublicacaoLink" alt="" class="my-4" />

    <div class="font-normal text-gray-700 dark:text-gray-400 whitespace-pre-line">
      {{ postVizualizado.conteudo }}
    </div>
  </article>
</template>
