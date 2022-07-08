import { createApp } from "vue";
import App from "./App.vue";

// 引入 tailwindcss 样式
import "/@/style/tailwind.css";
// 引入基础样式
import "/@/style/base.scss";

// 引入 element plus 样式
import "element-plus/dist/index.css";
import ElementPlus from "element-plus";
import * as ElementPlusIcons from "@element-plus/icons-vue";

import VueParticles from "particles.vue3";

import { createPinia } from "pinia";

import { setupRouter } from "/@/router";

const app = createApp(App);

// 使用element plus 组件
app.use(ElementPlus);
Object.entries(ElementPlusIcons).forEach(([key, component]) => {
  app.component(key, component);
});
// 使用粒子效果
app.use(VueParticles);
// 使用数据管理
app.use(createPinia());
// 使用路由管理
setupRouter(app);
app.mount("#app");
