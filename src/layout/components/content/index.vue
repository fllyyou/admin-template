<script lang="ts" setup></script>

<template>
  <div class="bg-white flex-1 overflow-hidden block">
    <router-view v-slot="{ Component, route }">
      <transition appear name="zoom-fade" mode="out-in">
        <component :is="Component"></component>
      </transition>
    </router-view>
  </div>
</template>
