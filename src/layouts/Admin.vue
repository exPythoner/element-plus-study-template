<script setup>
import { ref } from "vue";

import FHeader from "./cpns/FHeader.vue";
import FMenu from "./cpns/FMenu.vue";
import FTagList from "./cpns/FTagList.vue";

const folded = ref(false);
</script>

<template>
  <div class="admin">
    <el-container>
      <el-header>
        <FHeader />
      </el-header>
      <el-container class="admin-container" :class="{ folded: folded }">
        <el-aside>
          <FMenu :is-collapse="folded" />
          <span class="btn_fold" @click="folded = !folded">
            <el-icon v-if="!folded"><Fold /></el-icon>
            <el-icon v-else><Expand /></el-icon>
          </span>
        </el-aside>
        <el-main>
          <FTagList />
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style lang="less" scoped>
.el-header {
  background-color: #fff;
}
.el-aside {
  height: calc(100vh - 60px);
  background-color: var(--el-left-aside-color);

  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */
}
.folded .el-aside {
  width: 64px;
}

.btn_fold {
  width: 300px;
  display: block;
  position: fixed;
  bottom: 0;
  height: 40px;
  line-height: 40px;
  text-align: center;
  // background-color: var(--el-left-aside-color);
  background-color: #3c4752;
  color: #fff;
  font-size: 24px;
  cursor: pointer;

  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */
}

.folded .btn_fold {
  width: 64px;

  transition: width 0.3s;
  -webkit-transition: width 0.3s; /* Safari */
}
</style>
