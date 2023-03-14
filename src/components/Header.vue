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
  height: 1.25rem;
  width: 100%;
  background: url('@/assets/images/head_bg.png') no-repeat center;
  background-size: 100%;
  h1 {
    font-size: 0.475rem;
    color: #fff;
    text-align: center;
    line-height: 1.125rem;
  }
  .time {
    position: absolute;
    color: #fff;
    right: 0.25rem;
    line-height: 0.5rem;
    top: 0.25rem;
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.25rem;
  }
}
</style>
