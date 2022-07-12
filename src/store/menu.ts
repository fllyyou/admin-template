import { defineStore } from "pinia";
import { router } from "../router";

interface IRouterMenu {
  menus: IMenu[];
}

export const useMenusStore = defineStore("menu", {
  state: (): IRouterMenu => {
    return {
      menus: [],
    };
  },
  actions: {
    async reloadMenus() {
      let menus = router
        .getRoutes()
        .filter((route) => route.meta.inMenu)
        .map((route) => {
          console.log(route.children);
          console.log(route.name);

          let menu = { ...route.meta.menu, route: route.name };

          if (route.meta.hasNode == undefined || route.meta.hasNode) {
            let children: IMenu[] = route.children.map((next) => {
              let menu = { ...next.meta?.menu, route: next.name };
              return menu;
            });
            menu.childrens = children;
          }
          console.log(menu);

          return menu;
        });
      this.menus = menus;
    },
  },
});
