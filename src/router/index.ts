import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/setting",
    name: "setting",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/help",
    name: "help",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/profile/password",
    name: "password",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/sign-out",
    name: "signOut",
    component: () => import("@/views/Home.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
