<script setup lang="ts">
//设置属性
interface IMenuProps {
  menus: IMenu[];
  index: string;
}
withDefaults(defineProps<IMenuProps>(), {
  menus: () => [],
  index: "",
});
</script>

<template>
    
</template>
