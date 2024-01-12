import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import AccountPage from './views/AccountPage.vue'
import UserVotePage from './views/UserVotePage.vue'
import RestarantsPage from './views/RestarantsPage.vue'
import RestarantPage from './views/RestarantPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/account', component: AccountPage },
  { path: '/account/user-votes', component: UserVotePage },
  { path: '/restarants/list', component: RestarantsPage },
  { path: '/restarant/Bobs-Burgers', component: RestarantPage }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
