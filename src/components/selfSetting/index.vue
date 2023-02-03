<template>
  <div class="outer">
    <VanButton type="primary" @click="callDialog">主要按钮</VanButton>
    <VanButton type="success" @click="openDialog">成功按钮</VanButton>
    <van-button plain type="primary" @click="addNum">朴素按钮</van-button>
    <van-badge :content="num">
      <div class="child"></div>
    </van-badge>
    <van-dialog v-model:show="isShow" title="提示" show-cancel-button>
      弹窗内容
    </van-dialog>
  </div>
</template>

<script setup>
import { showDialog } from 'vant';
import { ref } from 'vue';
const isShow = ref(false);
const num = ref(0);
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

const addNum = () => {
  num.value += 1;
};
</script>

<style lang="scss" scoped>
.outer {
  font-weight: bolder;
  .child {
    width: 40px;
    height: 40px;
    background: #f2f3f5;
    border-radius: 4px;
  }
}
</style>
