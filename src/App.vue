<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router'
  import {posts} from './posts'

  function truncarPorPalavras(texto: string, n: number): string {
    const palavras = texto.trim().split(/\s+/);

    if (palavras.length <= n) {
        return texto;
    }

    const truncado = palavras.slice(0, n).join(' ');
    return `${truncado}...`;
}

</script>

<template>
  <div>
    <span class="text-4xl font-medium">
    Changelog
    </span>
    <p>
      A <i>sua</i> fonte de informação sobre a <i>nossa</i> entrega.
    </p>
  </div>


  <div class="flex flex-col">
    <div class="mt-4 border border-zinc-200 rounded p-4 bg-white w-[35em]" v-for="post in posts">
      <div class="font-semibold text-xl">
        <span class="text-zinc-500">v{{ post.versao }}</span> {{ post.titulo }}
      </div>
      <div class="pt-2">
        {{ truncarPorPalavras(post.conteudo, 20) }}
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>
