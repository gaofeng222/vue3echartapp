<template>
  <div class="map">
    <div class="map1"></div>
    <div class="map2"></div>
    <div class="map3"></div>
    <div ref="chartMapRef" class="map"></div>
  </div>
</template>

<script>
import {
  unref,
  nextTick,
  watch,
  computed,
  ref,
  defineComponent,
  reactive,
  watchEffect
} from 'vue'
import { useEcharts } from '@/hooks/useEcharts'

export default defineComponent({
  name: 'bar',
  props: {
    chartData: {
      type: Array,
      default: () => []
    },
    option: {
      type: Object,
      default: () => ({})
    },
    width: {
      type: String,
      default: '2.3438rem'
    },
    height: {
      type: String,
      default: '1.8229rem'
    },
    showHead: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    //创建dom节点的引用
    const chartMapRef = ref(null)
    const { echarts, setOptions } = useEcharts(chartMapRef)
    //默认的配置

    //监听父组件传递的属性变化，时时响应变化
    watchEffect(() => {
      props.chartData && initCharts()
    })

    function initCharts() {
      // echarts.registerMap('china', { getJSON: mapData }) //注册可用的地图
      setOptions(props.option)
    }
    return {
      chartMapRef
    }
  }
})
</script>

<style lang="scss" scoped>
.map {
  height: 3.413rem;
  // border: 1px solid red;
  box-sizing: border-box;
  margin-top: 0.0521rem;
  position: relative;
  & .map1 {
    width: 2.6979rem;
    height: 2.6979rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(@/assets/images/map.png);
    background-size: 100% 100%;
    // opacity: 0.3;
  }
  & .map2 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.3854rem;
    height: 3.3854rem;
    background: url(@/assets/images/lbx.png);
    background-size: 100% 100%;
    animation: rotate1 15s linear infinite;
    opacity: 0.6;
  }
  & .map3 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3.3854rem;
    height: 3.3854rem;
    background: url(@/assets/images/jt.png);
    background-size: 100% 100%;
    animation: rotate2 15s linear infinite;
  }
}
@keyframes rotate1 {
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}
@keyframes rotate2 {
  from {
    transform: translate(-50%, -50%) rotate(360deg);
  }
  to {
    transform: translate(-50%, -50%) rotate(0deg);
  }
}
</style>
