import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AccountPage from './views/AccountPage.vue'
import UserVotePage from './views/UserVotePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/account', component: AccountPage },
  { path: '/account/user-votes', component: UserVotePage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
