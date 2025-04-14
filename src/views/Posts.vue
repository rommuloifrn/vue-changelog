<script lang="ts" setup>
  import type { Post } from '@/post';
import { usePostListStore } from '@/stores/post_list';
import { storeToRefs } from 'pinia';
  import { useRouter } from 'vue-router';

  function truncarPorPalavras(texto: string, n: number): string {
    const palavras = texto.trim().split(/\s+/);

    if (palavras.length <= n) {
        return texto;
    }

    const truncado = palavras.slice(0, n).join(' ');
    return `${truncado}...`;
  }

  let router = useRouter()

  let conteudo: any = null;

  let store = usePostListStore()

  let {postList} = storeToRefs(store)

  let posts: Post[] = store.postList
  
  fetch(
    'https://fluighml.rn.sebrae.com.br/fluighub2/rest/service/execute/datasearch',
    {
      'method':'POST',
      'body':JSON.stringify({
        "endpoint":"dataset",
        "method":"get",
        "params":"datasetId=dsNovoChangelog"
      })
    }
  ).then((response)=>{
    response.json().then((dados)=>{
      let parsed = JSON.parse(dados.message)
      let conteudo: Post[] = parsed.values

      conteudo.reverse()

      store.setValue(conteudo)
    })
  })

</script>
    
<template>
    <div>
    <p>
      A <i>sua</i> fonte de informação sobre a <i>nossa</i> entrega.
    </p>
  </div>
  {{ conteudo }}


  <div class="flex flex-col">
    <button type="button" class="w-max px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
      Sugerir melhoria
    </button>
    
    <div v-on:click="router.push('/'+post.id)" v-for="post in postList" 
    class="mt-4 border border-zinc-700 rounded p-4 bg-zinc-800 w-[35em] shadow cursor-pointer" >
        <div ></div>
        <img class="w-full bg-slate-400 mb-4" v-bind:src="post.capaPublicacaoLink" alt="">
        <div class="font-semibold text-xl">
          <span class="text-blue-400">v{{ post.versao }}</span> {{ post.titulo }}
        </div>
        <div class="pt-2 text-zinc-300">
          {{ truncarPorPalavras(post.conteudo, 20) }}
        </div>
      
    </div>
    
  </div>
</template>