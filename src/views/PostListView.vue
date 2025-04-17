<script lang="ts" setup>
import { usePostListStore } from '@/stores/post_list'
import { useRouter } from 'vue-router'

function truncarPorPalavras(texto: string, n: number): string {
  const palavras = texto.trim().split(/\s+/)

  if (palavras.length <= n) {
    return texto
  }

  const truncado = palavras.slice(0, n).join(' ')
  return `${truncado}...`
}

let router = useRouter()


let store = usePostListStore()
store.getList()

function linkParaPost(id: string) {
  return '/' + id
}
</script>

<template>


  <form class="max-w-sm block w-60">
  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ordenar</label>
  <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">

    <option selected value="US">Mais recentes primeiro</option>
    <option value="CA">Mais antigos primeiro</option>
  </select>
</form>

  <div class="flex flex-col mt-10 ">
    <div
      v-for="post in store.lista"
      class="w-[60em] mb-10 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
    >
      <img
        v-on:click="router.push('/' + post.id)"
        class="cursor-pointer rounded-t-lg"
        v-bind:src="post.capaPublicacaoLink"
        alt=""
      />

      <div class="p-5">
        <h5
          v-on:click="router.push('/' + post.id)"
          class="cursor-pointer mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          <span class="text-blue-400">v{{ post.versao }}</span> {{ post.titulo }}
        </h5>

        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {{ truncarPorPalavras(post.conteudo, 20) }}
        </p>
        <a
          v-on:click="router.push('/' + post.id)"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-zinc-800 rounded-lg hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Ler mais
          <svg
            class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>
