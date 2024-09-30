import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import AccessDenied from '../views/AccessDenied.vue'
import FirebaseSigninView from '@/views/FirebaseSigninView.vue'
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue'
import FirebaseLogout from '@/views/FirebaseLogout.vue'
import AddBookView from '@/views/AddBookView.vue'
import GetBookCountView from '@/views/GetBookCountView.vue'
import WeatherView from '@/views/WeatherView.vue'
import CountBookAPI from '@/views/CountBookAPI.vue'

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
  },
  {
    path: '/addbook',
    name: 'AddBook',
    component: AddBookView
  },
  {
    path: '/getBookCount',
    name: 'GetBookCount',
    component: GetBookCountView
  },
  {
    path: '/weatherView',
    name: 'WeatherView',
    component: WeatherView
  },
  {
    path: '/countBookAPI',
    name: 'CountBookAPI',
    component: CountBookAPI
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router