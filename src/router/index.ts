import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Splashscreen from '@/views/Splashscreen.vue';
import DashBoard from '@/views/main/DashBoard.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "splashscreen",
    component: Splashscreen,
  },
  {
    path: "/dashboard",
    component: DashBoard,
    children: [
      {
        path: "",
        redirect: "generales",
      },
      {
        path: "/generales",
        component: () => import("@/views/main/tabs/Generales.vue"),
      },
      {
        path: "/sucursales",
        component: () => import("@/views/main/tabs/Sucursales.vue"),
      },
      {
        path: "/notificaciones",
        component: () => import("@/views/main/tabs/Notificaciones.vue"),
      },
      {
        path: "/tickets",
        component: () => import("@/views/main/tabs/Tickets.vue"),
      },
      {
        path: "/configuraciones",
        component: () => import("@/views/main/tabs/Configuraciones.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
