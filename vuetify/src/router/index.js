import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage'
import FetchJoke from '../views/FetchJoke'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage

  },
  {
    path: '/fetchJoke',
    name: 'FetchJoke',
    component: FetchJoke

  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
