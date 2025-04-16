import { createRouter, createWebHistory } from 'vue-router'
import Posts from '../views/PostListView.vue'
import PostView from '@/views/PostDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Posts,
    },
    {
      path: '/:id',
      name: 'post',
      component: PostView,
    },
  ],
})

export default router
