<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px"
          ><router-link to="/vue3">vue3微应用</router-link>
          <el-button type="primary">Primary</el-button>
          <el-button type="success">Success</el-button></el-aside
        >
        <el-container>
          <el-main>
            <router-view></router-view>
            <div id="vue3"></div>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { setupQiankun } from './qiankun';
onMounted(() => {
  setupQiankun();
});
</script>
