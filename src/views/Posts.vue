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
    <button data-modal-target="crud-modal" data-modal-toggle="crud-modal" type="button" class="w-max px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      <svg class="w-3.5 h-3.5 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
      </svg>
      Sugerir melhoria
    </button>
    
    <div hidden v-on:click="router.push('/'+post.id)" v-for="post in postList" 
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

    <div v-for="post in postList" class="w-[40em] mt-10 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg" v-bind:src="post.capaPublicacaoLink" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              <span class="text-blue-400">v{{ post.versao }}</span> {{ post.titulo }}
            </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ truncarPorPalavras(post.conteudo, 20) }}</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-800 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Ler mais
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>




    
  </div>


  <div id="crud-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative p-4 w-[40em] max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                    Sugerir melhoria
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Fechar modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form class="p-4 md:p-5">
              <div class="grid gap-4 mb-4 grid-cols-2">
                <div class="col-span-2">
                  <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu nome</label>
                  <input type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite seu nome" required>
                </div>
                <div class="col-span-2">
                  <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Seu email</label>
                  <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Digite seu email" required>
                </div>
                <div class="col-span-2">
                  <label for="problem-description" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descrição do problema</label>
                  <textarea id="problem-description" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Descreva o problema aqui"></textarea>                    
                </div>
              </div>
              <button type="submit" class="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                Enviar sugestão
              </button>
                
            </form>
        </div>
    </div>
</div> 
</template>