import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import about_me from "../components/about_me";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },


]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,

  routes
})

export default router
