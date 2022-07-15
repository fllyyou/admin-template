import { RouteRecordRaw } from "vue-router";

export const dashBoardRoutes: RouteRecordRaw[] = [
  {
    path: "/DashBoard",
    name: "DashBoard",
    component: () => import("/@/layout/index.vue"),
    redirect: { name: "Panel" },
    meta: {
      auth: true,
      permission: ["admin", "user"],
      inMenu: true,
      menu: { title: "首页", icon: "Menu", index: "1" },
    },
    children: [
      {
        path: "/DashBoard",
        name: "Panel",
        component: () => import("/@/views/test/test01.vue"),
        meta: {
          auth: true,
          menu: { title: "主要", index: "1-1" },
        },
      },
      {
        path: "Panel1",
        name: "Panel1",
        component: () => import("/@/views/test/test02.vue"),
        meta: {
          auth: true,
          menu: { title: "次要", index: "1-2" },
        },
      },
    ],
  },
];
