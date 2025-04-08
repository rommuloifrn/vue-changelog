<script lang="ts" setup>
  import type { Post } from '@/post';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
  //import {posts} from '../posts'

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

  let posts: Post[] = []
  
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
      conteudo = parsed.values

      posts = conteudo

      console.log(conteudo);
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
    
    <div v-on:click="router.push('/'+post.id)" v-for="post in posts" 
    class="mt-4 border border-zinc-700 rounded p-4 bg-zinc-800 w-[35em] shadow cursor-pointer" >
        <div class="w-full h-[20em] bg-slate-400 mb-4"></div>
        <div class="font-semibold text-xl">
          <span class="text-blue-400">v{{ post.versao }}</span> {{ post.titulo }}
        </div>
        <div class="pt-2 text-zinc-300">
          {{ truncarPorPalavras(post.conteudo, 20) }}
        </div>
      
    </div>
    
  </div>
</template>