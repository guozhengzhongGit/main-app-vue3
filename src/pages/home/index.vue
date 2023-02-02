<template>
<div class="outer">
  home 页面
  <div class="content">
    红色
  </div>
  <div class="logo">
    <img src="@/assets/images/logo.svg" />
  </div>
  <div class="outer_bg">

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
  .logo {
    width: 100%;
    transform: rotate(180deg);
    transition: .3s transform;
    img {
      display: block;
      width: 100%;
    }
  }
  .content {
    font-size: 16px;
    color: red;
  }
  &_bg {
    background: url("@/assets/images/title.jpg");
    background-size: cover;
    height: 50px;
  }
}
</style>
