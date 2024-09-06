import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDenied from '../views/AccessDenied.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import FirebaseLogout from '@/views/FirebaseLogout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/denied',
    name: 'Denied',
    component: AccessDenied
  },
  {
    path: '/firebaseSignin',
    name: 'FirebaseSignin',
    component: FirebaseSigninView
  },
  {
    path: '/firebaseRegister',
    name: 'FirebaseRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/firebaseLogout',
    name: 'FirebaseLogout',
    component: FirebaseLogout
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router