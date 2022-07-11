<script setup lang="ts">
import Menu from "./components/menu/index.vue";
import Content from "./components/content/index.vue";
</script>

<template>
  <div class="h-screen w-ful">
    <div class="h-screen w-full font-sans flex flex-row">
      <Menu></Menu>
      <div class="flex-grow flex flex-col">
        <el-header class="bg-red-400">Header</el-header>
        <Content />
      </div>
    </div>
  </div>
</template>
