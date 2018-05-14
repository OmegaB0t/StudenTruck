import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Connexion from '@/components/Connexion'
import Inscription from '@/components/Inscription'
import FoodtruckList from '@/components/FoodtruckList'
import FoodtruckDetails from '@/components/FoodtruckDetails'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/index',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/connexion',
      name: 'Connexion',
      component: Connexion
    },
    {
      path: '/inscription',
      name: 'Inscription',
      component: Inscription
    },
    {
      path: '/foodtruckList',
      name: 'FoodtruckList',
      component: FoodtruckList
    },
    {
      path: '/foodtruckDetails/:id',
      name: 'FoodtruckDetails',
      component: FoodtruckDetails
    }
  ]
})
