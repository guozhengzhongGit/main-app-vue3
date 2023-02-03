<template>
<div class="outer">
  组件
  <Button type="primary">主要按钮</Button>
  <Icon name="phone" />
  <Icon name="phone-o" />
  <div class="textvw">

  </div>
</div>
</template>

<script setup>
import { Button, Icon } from 'vant';
</script>

<style lang="scss" scoped>
.outer {
  font-weight: bolder;
  .textvw {
    width: 200px;
    background: red;
    height: 100px;
  }
}
</style>
