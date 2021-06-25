import { createRouter, createWebHistory } from '@ionic/vue-router';

import Home from '../views/Home.vue'
import Contact from "@/views/Contact";
import Product from "@/views/Product";
import News from "@/views/News";
import User from "@/views/User";
import Products from "@/views/Products";
import Connexion from "@/views/Connexion";

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/news',
    name: 'News',
    component: News
  },
  {
    path: '/produit',
    name: 'Product',
    component: Product
  },
  {
    path: '/produits',
    name: 'Products',
    component: Products
  },
  {
    path: '/login',
    name: 'Connexion',
    component: Connexion
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
