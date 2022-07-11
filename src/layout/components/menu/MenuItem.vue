<script setup lang="ts">
//设置属性
interface IMenuProps {
  menu?: IMenu;
  index: string;
}
withDefaults(defineProps<IMenuProps>(), {
  index: "",
});
</script>

<template>
  <el-sub-menu v-if="menu && menu.childrens?.length" :index="index">
    <template #title>
      <el-icon v-if="menu.icon"><component :is="menu.icon" /></el-icon>
      <span>{{ menu.title }}</span>
    </template>
  </el-sub-menu>
  <el-menu-item v-else-if="menu" :index="index">
    <el-icon v-if="menu.icon"><component :is="menu.icon" /></el-icon>
    <span>{{ menu.title }}</span>
  </el-menu-item>
</template>
