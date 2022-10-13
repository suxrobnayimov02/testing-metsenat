import { createRouter, createWebHistory } from 'vue-router'

export const routes = [
  {
    path: "/",
    component: () => import("@/layout/main"),
    children: [
      {
        name: 'home',
        path: '/home',
        component: () => import("@/views/sponsors/index.vue"),
        meta: {
          title: "Bosh sahifa",
        },
      }
    ],
  },
  {
    name: "login",
    path: "/auth/login",
    component: () => import("@/views/login/index.vue"),
    hidden: true,
  },
  {
    path: "/404",
    component: () => import("@/views/errors/404"),
    hidden: true,
  },
  {
    path: "/403",
    component: () => import("@/views/errors/403"),
    hidden: true,
  },
  // { path: "*", redirect: "/404", hidden: true },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
