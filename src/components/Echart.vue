<template>
  <div class="header" v-if="showHead">
    <span>{{ title }}</span>
  </div>
  <div ref="chartRef" :style="{ height, width }"></div>
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
    },
    title: {
      type: String,
      default: '柱状图'
    },
    type: {
      type: String,
      default: 'bar'
    }
  },
  setup(props) {
    //创建dom节点的引用
    const chartRef = ref(null)
    const { echarts, setOptions } = useEcharts(chartRef)
    const COLORS = [
      '#c23531',
      '#2f4554',
      '#61a0a8',
      '#d48265',
      '#91c7ae',
      '#749f83'
    ]
    //默认的配置
    const option = reactive({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            backgroundColor: '#333'
          }
        }
      },
      grid: {
        left: '5%',
        right: '0',
        top: '10%',
        bottom: '10%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: [],
        axisLabel: {
          textStyle: {
            fontSize: '12',
            fontFamily: 'PingFangSC-Regular',
            color: '#86A5C3' // 坐标值的具体的颜色
          },
          // 设置字体的倾斜角度
          interval: 0,
          rotate: props.chartData.length > 4 ? 30 : 0
        }
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: props.type,
          type: props.type,
          //处理柱状条的颜色设置
          itemStyle: {
            normal: {
              color: (item) => {
                return COLORS[item.dataIndex % COLORS.length]
              }
            }
          },
          data: []
        }
      ]
    })
    //监听父组件传递的属性变化，时时响应变化
    watchEffect(() => {
      props.chartData && initCharts()
    })

    function initCharts() {
      if (props.option) {
        Object.assign(option, props.option)
      }
      // let seriesData = props.chartData.map((item) => item.value)
      // let xAxisData = props.chartData.map((item) => item.name)
      // console.log(option, 'option')
      // option.series[0].data = seriesData
      // option.xAxis.data = xAxisData
      setOptions(option)
    }
    return {
      chartRef
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  color: #fff;
  text-align: center;
  padding: 0.0208rem 0 0.0208rem;
  font-size: 0.0833rem;
}
</style>
