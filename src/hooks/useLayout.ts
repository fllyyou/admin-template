import { useStorage, useWindowSize } from "@vueuse/core";
import { RouteLocationNormalizedLoaded } from "vue-router";
import { IBreadcrumb } from "/#/router";

class LayoutHook {
  public close = useStorage("layout-open", false);
  constructor() {}

  flodAction() {
    this.close.value = !this.close.value;
  }

  getBreadcrumb(route: RouteLocationNormalizedLoaded): IBreadcrumb[] {
    let breadcrumb: IBreadcrumb[] = [];

    if (route.meta.breadcrumb) {
      breadcrumb.push(route.meta.breadcrumb);
    }

    return breadcrumb;
  }
}

export default new LayoutHook();
