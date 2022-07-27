<script setup lang="ts">
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue";

//设置属性
interface IMenuProps {
  menu?: IMenu;
  index: string;
}
withDefaults(defineProps<IMenuProps>(), {
  index: "",
});

let router = useRouter();

let itemClick = (menu?: IMenu) => {
  let route = menu?.route;
  if (route) {
    router.push({ name: route.toString() });
  }
};
</script>

<template>
  <el-sub-menu v-if="menu && menu.childrens?.length" :index="index">
    <template #title>
      <el-icon v-if="menu.icon || menu.customIcon"
        ><component v-if="menu.icon" :is="menu.icon" />
        <Icon v-if="menu.customIcon" :icon="menu.customIcon" />
      </el-icon>
      <span>{{ menu.title }}</span>
    </template>
    <MenuItem
      v-for="item of menu.childrens"
      :menu="item"
      :index="item.index"
    ></MenuItem>
  </el-sub-menu>
  <el-menu-item v-else-if="menu" :index="index" @click="itemClick(menu)">
    <el-icon v-if="menu.icon || menu.customIcon"
      ><component v-if="menu.icon" :is="menu.icon" />
      <Icon v-if="menu.customIcon" :icon="menu.customIcon" />
    </el-icon>
    <span>{{ menu.title }}</span>
  </el-menu-item>
</template>
