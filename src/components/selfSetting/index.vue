<template>
  <div class="outer">
    组件
    <VanButton type="primary" @click="callDialog">主要按钮</VanButton>
    <VanButton type="success" @click="openDialog">成功按钮</VanButton>
    <VanIcon name="phone" />
    <van-icon name="phone-o" />
    <div class="textvw"> </div>
    <van-dialog v-model:show="isShow" title="提示" show-cancel-button>
      弹窗内容
    </van-dialog>
  </div>
</template>

<script setup>
import { showDialog } from 'vant';
import { ref } from 'vue';
const isShow = ref(false);
const openDialog = () => {
  isShow.value = true;
};

const callDialog = () => {
  showDialog({
    title: '函数调用',
    message: '代码是写出来给人看的，附带能在机器上运行。',
    theme: 'round-button'
  });
};
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
