<template>
  <van-config-provider :theme="appStore.theme">
    <div>
      <van-cell center title="切换主题">
        <template #right-icon>
          <van-switch v-model="checked" @change="changeTheme" />
        </template>
      </van-cell>
      <router-view></router-view>
    </div>
  </van-config-provider>
</template>

<script setup>
import { ref } from 'vue';
import { useAppStore } from '@/store/appStore';
const appStore = useAppStore();
console.log(appStore);
const checked = ref(true);
const changeTheme = (val) => {
  appStore.theme = val ? 'light' : 'dark';
};
</script>
<style>
html,
body {
  width: 100%;
}
</style>
