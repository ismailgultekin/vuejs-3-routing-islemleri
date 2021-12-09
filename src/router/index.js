import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Takimlar from '../views/Takims.vue'
import TakimDetay from '../views/Takimdetay.vue'
import Error from '../views/Error.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },{
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue')
  },
  {
    path:'/takimlar',
    name:'Takimlar',
    component:Takimlar,
  },
  {
    path:'/takimdetay/:id',
    name:'TakimDetay',
    component:TakimDetay,
    props:true
  },
  {//Yönlendirme Sayfası
    path:'/takimler',
    redirect:'/takimlar'
  },
  {//Hata Sayfası
    path:'/:catchAll(.*)',
    name:'Error',
    component:Error
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
