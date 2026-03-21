import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu/Menu.vue'
import ContactUs from '../components/ContactUs/ContactUs.vue'
import store from '../components/Store/Store.vue'
import PrincipalPage from '../components/Kinasis/PrincipalPage.vue'
import AboutUs from '../components/Kinasis/AboutUs.vue'


const routes = [
  {path: '/', name: 'Home', component: Menu},
  {path: '/contact', name: 'Contact', component: ContactUs},
  {path: '/ecommerce', name: 'Ecommerce', component: store},
  {path: '/website', name: 'website', component: PrincipalPage},
  {path: '/website/aboutus', name: 'about', component: AboutUs}
  
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router