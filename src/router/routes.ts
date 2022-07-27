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
      breadcrumb: {
        title: "首页",
      },
    },
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      login: true,
      menu: {},
      breadcrumb: {
        title: "登录",
      },
    },
    component: () => import("/@/views/login/LoginPage.vue"),
  },
  {
    path: "/:path(.*)*",
    name: "NotFound",
    component: () => import("/@/views/errors/404.vue"),
  },
];

export default routes;
