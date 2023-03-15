<template>
  <div class="number-panel">
    <div class="no">
      <ul class="num-ul">
        <li>
          <count-to :startVal="0" :endVal="12434"></count-to>
        </li>
        <li><count-to :startVal="0" :endVal="10983"></count-to></li>
      </ul>
    </div>
    <div class="text-box">
      <ul class="text-ul">
        <li>前端需求人数</li>
        <li>市场供应人数</li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.number-panel {
  //   padding: 0 10px 15px;
  background-color: rgba(101, 132, 226, 0.1);
  width: 100%;
  height: 0.8208rem; /* 1220/5 */
  overflow: hidden;
  .no {
    position: relative;
    &::before {
      position: absolute;
      top: 0;
      left: 0.2083rem;
      width: 0.125rem;
      height: 0.125rem;
      border-top: 2px solid #02a6b5;
      border-left: 2px solid #02a6b5;
      content: '';
    }
    &::after {
      position: absolute;
      bottom: 0;
      right: 0.2083rem;
      width: 0.125rem;
      height: 0.125rem;
      border-bottom: 2px solid #02a6b5;
      border-right: 2px solid #02a6b5;
      content: '';
    }
    .num-ul {
      display: flex;
      justify-content: space-between;
      position: relative;
      width: 90%;
      margin: 0.0521rem auto 0.1042rem;
      border: 1px solid rgba(25, 186, 139, 0.17);
      li {
        font-family: 'electronicFont' !important;
        flex: 1;
        font-size: 0.3125rem;
        line-height: 1.5;
        color: #ffeb7b;
        text-align: center;
        position: relative;
        &:first-child {
          &::after {
            content: '';
            position: absolute;
            top: 25%;
            right: 0;
            height: 50%;
            width: 1px;
            background-color: rgba(255, 255, 255, 0.3);
          }
        }
      }
    }
  }
  .text-ul {
    display: flex;
    width: 90%;
    margin: 0 auto;
    li {
      flex: 1;
      font-size: 0.1042rem;
      color: #fff;
      text-align: center;
    }
  }
}
</style>
