import { Progress } from "/@/libs/progress/index";
import { RouteLocationNormalized, RouteLocationRaw, Router } from "vue-router";

class Guard {
  constructor(private router: Router) {
    this.run();
  }

  private run() {
    this.router.beforeEach(async (to, form) => {
      return this.beforeEach(to, form);
    });
    this.router.afterEach(async () => {
      Progress.done();
    });
  }

  private beforeEach(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ): RouteLocationRaw | undefined {
    Progress.start();
    try {
      if (to.meta.auth) {
        // 登录鉴权 并且动态添加路由
        return { name: "Login" };
      }
      if (to.meta.login) {
        // 如果前往登录页 但是登录授权未失效的时候不做任何处理
        return from;
      }
    } catch (error) {
      return { name: "Login" };
    }
  }
}

export default (router: Router) => {
  return new Guard(router);
};
