import { RouteRecordRaw } from "vue-router";
import { IBreadcrumb } from "/#/router";
import { defineStore } from "pinia";
import { router } from "../router";
import { el } from "element-plus/es/locale";

interface IRouterMenu {
  menus: IMenu[];
  breadcrumb: Map<string | symbol, IBreadcrumb[]>;
}

// 从子列表中处理面包屑展示数据
function dealNestedBreadcrumbByRoute(
  childrens: RouteRecordRaw[],
  breadcrumb: Map<string | symbol, IBreadcrumb[]>,
  parents: IBreadcrumb[]
) {
  childrens.forEach((next) => {
    let newBreadcrumbs = [...parents];
    if (next.meta?.breadcrumb) {
      newBreadcrumbs.push(next.meta.breadcrumb);
    }
    if (next.children && next.children.length > 0) {
      dealNestedBreadcrumbByRoute(next.children, breadcrumb, newBreadcrumbs);
    } else {
      if (next.name) {
        breadcrumb.set(next.name, newBreadcrumbs);
      }
    }
  });
}

export const useMenusStore = defineStore("menu", {
  state: (): IRouterMenu => {
    return {
      menus: [],
      breadcrumb: new Map(),
    };
  },
  getters: {
    getCurrentBreadcrumb(state, name?: string | symbol): IBreadcrumb[] {
      if (name) {
        return state.breadcrumb.get(name) ?? [];
      }
      return [];
    },
  },
  actions: {
    async reloadMenus() {
      let menus = router
        .getRoutes()
        .filter((route) => route.meta.inMenu)
        .map((route) => {
          let menu = { ...route.meta.menu, route: route.name };

          if (route.meta.hasNode == undefined || route.meta.hasNode) {
            let children: IMenu[] = route.children.map((next) => {
              let menu = { ...next.meta?.menu, route: next.name };
              return menu;
            });
            menu.childrens = children;
          }

          return menu;
        });
      this.menus = menus;
    },
    async reloadBreadcrumb() {
      let breadcrumb = new Map<string | symbol, IBreadcrumb[]>();
      router.getRoutes().forEach((next) => {
        let breadcrumbs: IBreadcrumb[] = [];
        if (next.meta.breadcrumb) {
          breadcrumbs.push(next.meta.breadcrumb);
        }
        if (next.children && next.children.length) {
          dealNestedBreadcrumbByRoute(next.children, breadcrumb, breadcrumbs);
        } else {
          if (next.name) {
            breadcrumb.set(next.name, breadcrumbs);
          }
        }
      });
      this.breadcrumb = breadcrumb;
    },
  },
});
