import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

firebase.initializeApp({
  apiKey: 'AIzaSyAxuzSy2vzIO5FhmsGNA4Qmiwfn15EOo1Q',
  authDomain: 'eshop-vue-7b7aa.firebaseapp.com',
  projectId: 'eshop-vue-7b7aa',
  storageBucket: 'eshop-vue-7b7aa.appspot.com',
  messagingSenderId: '977547069112',
  appId: '1:977547069112:web:c63934b323c3e06cfb964d',
  measurementId: 'G-D7CVSJNMLE'
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
