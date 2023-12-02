<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  isCollapse: {
    typeof: Boolean,
    default: () => false,
  },
});

import { menusList } from "@/assets/data/menusList";
const MockMenusList = ref(menusList);

// 点击菜单跳转路由的逻辑
const router = useRouter();
const handleSelect = (e) => {
  console.log(e);
  router.push(e);
};
</script>

<template>
  <div class="f-menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="var(--el-left-aside-color)"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      @select="handleSelect"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
    >
      <template v-for="(item, index) in MockMenusList" :key="index">
        <el-sub-menu v-if="item.child && item.child.length > 0" :index="item.id">
          <template #title>
            <el-icon>
              <component :is="item.icon"></component>
            </el-icon>
            <span>{{ item.name }}</span>
          </template>

          <template v-for="(itemTwo, indexTwo) in item.child" :key="indexTwo">
            <el-menu-item :index="itemTwo.frontpath">
              <el-icon>
                <component :is="itemTwo.icon"></component>
              </el-icon>
              <span>{{ itemTwo.name }}</span>
            </el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<style lang="less" scoped>
.el-menu {
  border-right: 0;
}


</style>
