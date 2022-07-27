import { RouteRecordRaw } from "vue-router";

export const errorRoutes: RouteRecordRaw[] = [
  {
    path: "/errors",
    name: "errors",
    redirect: { name: "404" },
    component: () => import("/@/layout/index.vue"),
    meta: {
      auth: true,
      inMenu: false,
      breadcrumb: {
        title: "错误页面",
      },
      menu: {
        title: "错误页面",
        icon: "QuestionFilled",
      },
    },
    children: [
      {
        path: "404",
        name: "404",
        component: () => import("/@/views/errors/404.vue"),
        meta: {
          breadcrumb: {
            title: "404",
          },
          menu: { title: "404" },
        },
      },
    ],
  },
];
