import { createRouter, createWebHistory } from 'vue-router'

import Carlist from "@/views/CarList/index.vue"
import Layout from "@/views/Layout/index.vue"
import Home from "@/views/Home/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      redirect:'/home',
      children:[
        {
          path:'/home',
          component:Home
        }
      ]
    },
    {
      path:'/carlist',component:Carlist
    }
  ],
})

export default router
