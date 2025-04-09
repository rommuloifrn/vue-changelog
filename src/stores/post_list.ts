import { ref, computed } from 'vue'
import { defineStore, type Store } from 'pinia'
import type { Post } from '@/post'

export const usePostListStore = defineStore('postList', () => {
  const postList = ref<Post[]>([])
  
  function setValue(list: Post[]):void {
    postList.value = list;
  }
  

  return { postList, setValue }
})
