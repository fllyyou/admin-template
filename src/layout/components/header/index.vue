<script lang="ts" setup>
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { IBreadcrumb } from "/#/router";
import { useLayout } from "/@/hooks";
import { useMenusStore } from "/@/store/menu";

let route = useRoute();
let menusStore = useMenusStore();
let breadcrumbs = ref<IBreadcrumb[]>([]);

watchEffect(() => {
  if (route.name) {
    breadcrumbs.value = menusStore.breadcrumb.get(route.name) ?? [];
  } else {
    breadcrumbs.value = [];
  }
});
</script>

<template>
  <header
    class="w-full overflow-hidden h-[60px] flex flex-row justify-between items-center relative pl-[20px] pr-[20px] border-b-[1px] border-gray-300"
  >
    <div class="flex items-center">
      <!-- 左侧处理区域 -->
      <div @click="useLayout.flodAction">
        <div
          class="duration-300 flex justify-center items-center"
          :class="{ 'rotate-180': useLayout.close.value }"
        >
          <i-ri-menu-fold-fill class="text-gray-600 w-[21px] h-[21px]" />
        </div>
      </div>
      <div class="ml-[10px]">
        <el-breadcrumb separator="/">
          <template v-for="item of breadcrumbs">
            <el-breadcrumb-item v-if="item.route" :to="{ name: item.route }">{{
              item.title
            }}</el-breadcrumb-item>
            <el-breadcrumb-item v-else>{{ item.title }}</el-breadcrumb-item>
          </template>
        </el-breadcrumb>
      </div>
    </div>
    <!-- 居中处理区域 -->
    <div></div>
    <!-- 右侧处理区域 -->
    <div class="w-11 h-11 bg-fuchsia-500"></div>
  </header>
</template>

<style scoped lang="scss"></style>
