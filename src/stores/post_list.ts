import { ref, computed } from 'vue'
import { defineStore, type Store } from 'pinia'
import type { Post } from '@/post'

export const usePostListStore = defineStore('postListStore', {
  state: () => ({
    lista: [] as Post[],
  }),

  actions: {
    async getList() {
      const response = await fetch(
        'https://fluighml.rn.sebrae.com.br/fluighub2/rest/service/execute/datasearch',
        {
          method: 'POST',
          body: JSON.stringify({
            endpoint: 'dataset',
            method: 'get',
            params: 'datasetId=dsNovoChangelog'
          })
        }
      )
      const dados = await response.json()
      const parsed = JSON.parse(dados.message)
      this.lista = parsed.values
      this.lista.reverse()
    },
  },
})
