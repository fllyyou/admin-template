import { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("/@/layout/index.vue"),
    redirect: { name: "DashBoard" },
    meta: {
      auth: false,
      permission: ["admin", "user"],
      inMenu: true,
      menu: { title: "首页", icon: "Menu" },
    },
    children: [
      {
        path: "DashBoard",
        name: "DashBoard",
        component: () => import("/@/components/HelloWorld.vue"),
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
