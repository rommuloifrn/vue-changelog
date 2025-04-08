<script lang="ts" setup>
    import type { Post } from '@/post';
import { posts } from '@/posts';
    import { useRoute } from 'vue-router';

    const route = useRoute()
    
    let id: string = route.params.id as string

    let mapost: Post
    
    posts.forEach((p)=>{
      if (p.id == id) mapost = p
    })

    console.log(mapost!);
    
    let post: Post = mapost!
    
    
</script>
    
<template>
  <div>
    <p>
      A <i>sua</i> fonte de informação sobre a <i>nossa</i> entrega.
    </p>
  </div>


  <div class="flex flex-col">
    <div class="mt-4 p-4  w-[35em]">
      <div class="font-semibold text-xl">
        <span class="text-zinc-500">v{{ post.versao }}</span> {{ post.titulo }}
      </div>
      <div class="pt-2 whitespace-pre-line text-zinc-300">
        {{ post.conteudo }}
      </div>
    </div>
  </div>
</template>