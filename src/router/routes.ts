import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("/@/layout/index.vue"),
    redirect: { name: "DashBoard" },
    meta: {
      auth: true,
      permission: ["admin", "user"],
      inMenu: true,
      menu: { title: "首页", icon: "Menu", index: "1" },
    },
    children: [
      {
        path: "DashBoard",
        name: "DashBoard",
        component: () => import("/@/components/HelloWorld.vue"),
        meta: {
          auth: true,
          inMenu: true,
          menu: { title: "主要", index: "1-1" },
        },
      },
      {
        path: "DashBoard1",
        name: "DashBoard1",
        component: () => import("/@/components/HelloWorld.vue"),
        meta: {
          auth: true,
          inMenu: true,
          menu: { title: "次要", index: "1-2" },
        },
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("/@/views/login/LoginPage.vue"),
  },
  {
    path: "/:path(.*)*",
    name: "NotFound",
    component: () => import("/@/views/errors/404.vue"),
  },
];

export default routes;
