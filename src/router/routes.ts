import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    redirect: { name: "DashBoard" },
    meta: {
      auth: true,
      permission: ["admin", "user"],
      inMenu: false,
      menu: { title: "首页", icon: "Menu", index: "1" },
    },
  },
  {
    path: "/login",
    name: "Login",
    meta: { login: true, menu: {} },
    component: () => import("/@/views/login/LoginPage.vue"),
  },
  {
    path: "/:path(.*)*",
    name: "NotFound",
    component: () => import("/@/views/errors/404.vue"),
  },
];

export default routes;
