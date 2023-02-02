<template>
<div class="outer">
  home 页面
  <div class="content">
    红色
  </div>
  <SelfSetting />
</div>
</template>

<script setup>
import SelfSetting from '@/components/selfSetting';
</script>

<style lang="less" scoped>
.outer {
  font-size: 14px;
  color: cadetblue;
  .content {
    font-size: 16px;
    color: red;
  }
}
</style>
