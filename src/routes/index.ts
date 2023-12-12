import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import LoginVue from "../pages/Login/Login.vue";
import RechargesVue from "../pages/Recharges/Recharges.vue";
import RechargesPaymentsVue from "../pages/PaymentsRecharges/RechargesPayments.vue";
import { ROUTE_LOGIN, ROUTE_RECHARGES, ROUTE_RECHARGES_PAYMENTS } from "../toolbox/constants/allRoutes";
import { useAuthStore } from "../toolbox/stores/auth";
import NoFoundVue from "../pages/NoFound/NoFound.vue";
import ErrorVue from "../components/Error/Error.vue";



const routes: RouteRecordRaw[] =[
  {
    path:ROUTE_LOGIN,
    name : 'login',
    component: LoginVue,
    
  },
  {
    path:ROUTE_RECHARGES,
    name : 'recharges',
    component: RechargesVue,
    beforeEnter: (_to, _from, next) => {
      const authStore = useAuthStore();

      if (!authStore.token) {
        next('/notfound401');
      } else {
        next()
      }
    },
  },
  {
    path:ROUTE_RECHARGES_PAYMENTS,
    name : 'recharges-payments',
    component: RechargesPaymentsVue,
    beforeEnter: (_to, _from, next) => {
      const authStore = useAuthStore();

      if (!authStore.token ) {
        next('/notfound401');
      } else {
        next();
      }
    },
    
  },
  {
    path:'/:NotFound(.*)*', component: NoFoundVue
  },
  {
    path:'/notfound401', component: ErrorVue, name : 'error401'
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

