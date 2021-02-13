import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      name: 'Dashboard',
      path: '/dashboard',
      component: () => import('@/components/Dashboard/Dashboard'),
    },
    {
      name: 'Mundo',
      path: '/mundo',
      component: () => import('@/components/Mundo'),
    }
  ],

});