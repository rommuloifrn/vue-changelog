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