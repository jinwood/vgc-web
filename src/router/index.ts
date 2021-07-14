import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      component: () => import("../views/Home.vue"),
      path: "/",
    },
    {
      component: () => import("../views/Register.vue"),
      path: "/register",
    },
    {
      component: () => import("../views/SignIn.vue"),
      path: "/sign-in",
    },
    {
      component: () => import("../views/MyVehicle.vue"),
      path: "/my-vehicle",
    },
  ],
});

export default router;
