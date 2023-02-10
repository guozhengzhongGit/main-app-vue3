<template>
  <div>
    <router-link to="/vue3">vue3微应用</router-link>
    <router-view></router-view>
    <div id="vue3"></div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { setupQiankun } from './qiankun';
onMounted(() => {
  setupQiankun();
});
</script>
