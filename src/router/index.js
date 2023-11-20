import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useQuizStore } from '../stores/quiz'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/play',
      name: 'play',
      component: () => import('../views/PlayView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const store = useQuizStore()
  if (to.name === 'play' && !store.questions.length) {
    router.push({ name: 'home' })
  }
  next()
})

export default router
