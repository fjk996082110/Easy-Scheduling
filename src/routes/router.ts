import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../view/login/index.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/home.vue'),
  },
  {
    path: '/course',
    name: 'Course',
    component: () => import('../view/course/index.vue'),
  }
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
