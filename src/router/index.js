import { createRouter, createWebHashHistory } from 'vue-router'
import PortfolioView from '../views/PortfolioView.vue'

const router = createRouter({
  // Using hash mode for GitHub Pages compatibility
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'portfolio',
      component: PortfolioView,
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
