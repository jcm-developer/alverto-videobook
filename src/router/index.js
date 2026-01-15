import { createRouter, createWebHashHistory } from 'vue-router'
import BookView from '../views/BookView.vue'

const router = createRouter({
  // Using hash mode for GitHub Pages compatibility
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'book',
      component: BookView,
    },
    {
      path: '/videobook',
      name: 'videobook',
      component: () => import('../views/VideobookView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
