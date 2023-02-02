<template>
<div class="outer">
  组件
  <Button type="primary">主要按钮</Button>
  <Icon name="phone" />
  <Icon name="phone-o" />
</div>
</template>

<script setup>
import { Button, Icon } from 'vant';
</script>

<style lang="scss" scoped>
.outer {
  font-weight: bolder;
}
</style>
