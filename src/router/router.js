import Vue from "vue";
import Router from "vue-router";
import AppLayout from "@/components/AppLayout.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: AppLayout,
      props: true,
      children: [
        {
          path: "Dashboard",
          component: () => import('@/components/Dashboard/Dashboard'),
        },
        {
          path: "search",
          component: () => import('@/components/Search'),
        }
      ]
    }
  ],
  mode: "history"
});
