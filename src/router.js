import Vue from "vue";
import Router from "vue-router";
// import MainList from "./views/MainList.vue";
// import Drivers from "./views/Drivers.vue";
import newList from "./views/newList.vue";
import offlineList from "./views/offlineList.vue";

Vue.use(Router);

var router = new Router({
  routes: [
    // {
    //   path: "/",
    //   name: "MainList",
    //   component: MainList,
    //   meta: { mainindex: 1, keepAlive: true }
    // },
    // {
    //   path: "/drivers",
    //   name: "Drivers",
    //   component: Drivers,
    //   meta: { mainindex: 2, keepAlive: true }
    // },
    {
      path: "/",
      name: "newList",
      component: newList,
      meta: { mainindex: 1, keepAlive: true }
    },
    {
      path: "/offline",
      name: "offlineList",
      component: offlineList,
      meta: { mainindex: 2, keepAlive: true }
    }

    // {
    //   path: "/new/:order_id?",
    //   name: "newOrder",
    //   component: newOrder,
    //   meta: { mainindex: 9 },
    // },
    // {
    //   path: "/drivers",
    //   name: "drivers",
    //   component: drivers,
    //   meta: { mainindex: 3 },
    // },
    // {
    //   path: "/login",
    //   name: "login",
    //   component: login,
    // },
    // {
    //   path: "/ongoingorders",
    //   name: "ongoingorders",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "ongoing" */ "./views/About.vue"),
    // },
  ]
});

// router.beforeEach((to, from, next) => {
//   if (!global.user && from.name != "login" && to.name != "login") {
//     return next("/login");
//   }
//   return next();
// });

export default router;
