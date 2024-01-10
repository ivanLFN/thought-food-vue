import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AccountPage from './views/AccountPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/account', component: AccountPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
