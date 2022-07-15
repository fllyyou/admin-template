import { errorRoutes } from "/@/router/modules/error";
import { RouteRecordRaw } from "vue-router";
import { dashBoardRoutes } from "./dashboard";

export const asyncRoutes: RouteRecordRaw[] = [
  ...dashBoardRoutes,
  ...errorRoutes,
];
