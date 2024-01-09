import { RouteRecordRaw } from 'vue-router';
import InformacionCardsPrincipalVue from '@/views/opcionescards/InformacionCardsPrincipal.vue';

const OperacionesCards: Array<RouteRecordRaw> = [
  {
    path: "/informacion",
    name: "informacion",
    component: InformacionCardsPrincipalVue,
    children: [
      {
        path: "",
        name:"redireccionar",
        redirect: "saldos",
      },
      {
        path: "/empresa",
        component: () => import("@/views/opcionescards/tabscards/CardsEmpresa.vue"),
      },
      {
        path: "/grupo",
        component: () => import("@/views/opcionescards/tabscards/CardsGrupo.vue"),
      },
      {
        path: "/pagos",
        component: () => import("@/views/opcionescards/tabscards/CardsPagos.vue"),
      },
      {
        path: "/referencias",
        component: () => import("@/views/opcionescards/tabscards/CardsReferencias.vue"),
      },
      {
        path: "/saldos",
        component: () => import("@/views/opcionescards/tabscards/CardsSaldos.vue"),
      },
    ],
    
  },
]


export default OperacionesCards
