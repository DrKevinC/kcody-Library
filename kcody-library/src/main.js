// import './assets/main.css'
// import '@/assets/style.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createStore } from 'vuex'

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
// import DataTable from 'primevue/datatable'
// import Column from 'primevue/Column'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVjuCETAHYQak1_FXcPlr-1tPtPzi57ZY",
  authDomain: "week7-kevin.firebaseapp.com",
  projectId: "week7-kevin",
  storageBucket: "week7-kevin.appspot.com",
  messagingSenderId: "49386747393",
  appId: "1:49386747393:web:846d968fcd1368e852f200"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const app = createApp(App) // may need to remove this line
app.use(PrimeVue, { theme: { preset: Aura } })
app.use(router)
app.config.globalProperties.$db = db // makes it global?

const store = createStore({
  state(){
    return {
      db: db
    }
  },
  getters: {
    getDb(state) {
      return state.db
    }
  }
})
app.use(store)

// app.component('DataTable', DataTable)
// app.component('Column', Column)

app.mount('#app')
