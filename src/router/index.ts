import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Splashscreen from '@/views/Splashscreen.vue';
import DashBoard from '@/views/main/DashBoard.vue';
import AutoRegistro from '@/views/login/AutoRegistro.vue';
import LoginPage from '@/views/login/LoginPage.vue';
import LevantarTicket from '@/components/ticket/LevantarTicket.vue';
import OperacionesCards from './OpcionesCards';

const Local: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "splashscreen",
    component: Splashscreen,
  },
  {
    path: "/autoregistro",
    name: "autoregistro",
    component: AutoRegistro,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
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
        path: "/pagar",
        component: () => import("@/views/main/tabs/Pagar.vue"),
      },
      {
        path: "/configuraciones",
        component: () => import("@/views/main/tabs/Configuraciones.vue"),
      },
      
    ],
    
  },
  {
    path: "/levantarticket",
    name: "levantarticket",
    component: LevantarTicket,
  },
]

const routes: Array<RouteRecordRaw> = [...Local, ...OperacionesCards];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
