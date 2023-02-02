
<template>
  <div class="demo">
    <div class="text">Count: {{state.count}}</div>
    <button class="btn" @click="onClick">add+</button>
    <router-view></router-view>
  </div>
</template>

<script setup>
  import { reactive } from 'vue';
  const state = reactive({
    count: 0
  });
  const onClick = () => {
    state.count ++;
  }
</script>
