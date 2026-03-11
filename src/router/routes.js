import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu/Menu.vue'
import ContactUs from '../components/ContactUs/ContactUs.vue'
import store from '../components/Store/Store.vue'


const routes = [
  {path: '/', name: 'Home', component: Menu},
  {path: '/contact', name: 'Contact', component: ContactUs},
  {path: '/ecommerce', name: 'Ecommerce', component: store}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router