<script setup lang="ts">
import Menu from "./components/menu/index.vue";
import Content from "./components/content/index.vue";
import Header from "./components/header/index.vue";
</script>

<template>
  <div class="h-screen w-ful">
    <div class="h-screen w-full font-sans flex flex-row">
      <Menu></Menu>
      <div class="flex-grow flex flex-col">
        <Header />
        <Content />
      </div>
    </div>
  </div>
</template>
