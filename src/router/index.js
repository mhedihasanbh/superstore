import { createRouter, createWebHistory } from 'vue-router'
 import HomeView from "../components/views/Inventory.vue"
 import ItemDetails from "../components/views/ItemDetails.vue"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/item/:id',
    name: 'item',
    component: ItemDetails
  },
  
  // {
//     path: '/about',
//     name: 'about',
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router