import Vue from 'vue'
import VueRouter from 'vue-router'
import Homepage from "@/views/Homepage";
import Form from "@/views/Form";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Homepage
  },
  {
    path: '/form',
    name : 'Form',
    component: Form
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
