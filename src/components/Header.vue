<template>
  <div class="header">
    <h1>数据可视化展示</h1>
    <div class="time">当前时间：{{ nowTime }}</div>
  </div>
</template>

<script setup>
import getNowTime from '@/hooks/useTime'
// console.log(getNowTime, 'getNowTime')
const { nowTime } = getNowTime()
</script>

<style lang="scss" scoped>
.header {
  height: 0.5208rem;
  width: 100%;
  background: url('@/assets/images/head_bg.png') no-repeat center;
  background-size: 100%;
  h1 {
    font-size: 0.1979rem;
    color: #fff;
    text-align: center;
    line-height: 0.4167rem;
  }
  .time {
    position: absolute;
    color: #fff;
    right: 0.25rem;
    // line-height: 0.0833rem;
    top: 0.125rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.0833rem;
  }
}
</style>
