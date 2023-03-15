<template>
  <Header />
  <div class="main">
    <div class="column">
      <div class="e1">
        <Echars
          :option="barData"
          title="柱形图-就业行业"
          height="1.25rem"
          width="2.4792rem"
        />
        <div class="line"></div>
      </div>
      <div class="e1">
        <Echars
          :option="lineData"
          title="折线图-人员变化 2020 2021"
          height="1.25rem"
          type="line"
          width="2.4792rem"
        />
        <div class="line"></div>
      </div>
      <div class="e1">
        <Echars
          :option="pieData"
          title="饼形图-年龄分布"
          type="pie"
          height="1.25rem"
          width="2.4792rem"
        />
        <div class="line"></div>
      </div>
    </div>
    <div class="column">
      <NumberPanel />
      <EchartMap :option="mapOption" height="1.25rem" width="2.4792rem" />
    </div>
    <div class="column">
      <div class="e1">
        <Echars
          :option="barRData"
          title="柱形图-就业行业"
          height="1.25rem"
          width="2.4792rem"
        />
        <div class="line"></div>
      </div>
      <div class="e1">
        <Echars
          :option="lineRData"
          title="折线图-播放量
"
          height="1.25rem"
          width="2.4792rem"
        />
        <div class="line"></div>
      </div>
      <div class="e1">
        <Echars
          :option="pieRData"
          title="饼形图-地区分布"
          height="1.25rem"
          width="2.4792rem"
        />
        <div class="line"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Header from '@comp/Header.vue'
import Echars from '@comp/Echart.vue'
import EchartMap from '@comp/EchartMap.vue'
import NumberPanel from '@comp/NumberPanel.vue'
import {
  pieData,
  barData,
  lineData,
  barRData,
  lineRData,
  pieRData
} from '@/assets/data/eData'

import { mapOption } from '@/assets/data/chinaData'
</script>

<style lang="scss">
.main {
  width: 2.6042rem;
  height: 5.3333rem;
  // background: green;
  font-size: 0.0729rem;
  display: flex;
  width: 100%;
  box-sizing: border-box;
  padding: 0 0.0521rem;
  height: calc(100vh - 0.5208rem);
  min-width: 4.1667rem;
  .column {
    flex: 3;
    &:nth-child(1),
    &:nth-child(3) {
      // background-color: rebeccapurple;
      .e1 {
        margin-top: 0.0521rem;
        box-sizing: border-box;
        position: relative;
        border: 1px solid rgba(25, 186, 139, 0.17);
        background: url(./assets/images/line.png) no-repeat center;
        background-size: 100%;
        &::before {
          position: absolute;
          top: 0;
          left: 0;
          width: 10px;
          height: 10px;
          border-left: 2px solid #02a6b5;
          border-top: 2px solid #02a6b5;
          content: '';
        }
        &::after {
          position: absolute;
          top: 0;
          right: 0;
          width: 10px;
          height: 10px;
          border-right: 2px solid #02a6b5;
          border-top: 2px solid #02a6b5;
          content: '';
        }
        .line {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 10px;
            height: 10px;
            border-left: 2px solid #02a6b5;
            border-bottom: 2px solid #02a6b5;
            content: '';
          }
          &::after {
            position: absolute;
            bottom: 0;
            right: 0;
            width: 10px;
            height: 10px;
            border-right: 2px solid #02a6b5;
            border-bottom: 2px solid #02a6b5;
            content: '';
          }
        }
      }
    }
    &:nth-child(2) {
      flex: 5;
      margin: 10px 10px 15px;
      // min-width: 10rem;
    }
  }
}
</style>
