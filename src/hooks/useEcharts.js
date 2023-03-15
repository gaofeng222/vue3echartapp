import { unref, nextTick, watch, computed, ref, onMounted } from 'vue'
import { useDebounceFn, tryOnUnmounted } from '@vueuse/core'
import { useEventListener } from '@/utils/useEventListener'
import echarts from '@/utils/echarts'
import mapData from '@/assets/data/chinaMapData.json'

export function useEcharts(elRef, theme = 'dark') {
  let chartInstance = null
  const cacheOptions = ref({})
  let removeResizeFn = () => {}
  let resizeFn = resize
  const getOptions = computed(() => {
    return {
      backgroundColor: 'transparent',
      ...cacheOptions.value
    }
  })

  resizeFn = useDebounceFn(resize, 200)

  function initCharts(theme) {
    const el = unref(elRef)
    if (!el || !unref(el)) {
      return
    }
    console.log(el, 'el')
    chartInstance = echarts.init(el, theme)

    const { removeEvent } = useEventListener({
      el: window,
      name: 'resize',
      listener: resizeFn
    })
    //
    console.log('el444444', elRef)
    if (elRef.value.className == 'map') {
      // console.log(mapData, 'mapData')
      echarts.registerMap('china', mapData) //注册可用的地图
    }
    removeResizeFn = removeEvent
    setOptions(cacheOptions.value)
  }

  //外部组件使用的的方法
  function setOptions(options, clear = true) {
    cacheOptions.value = options
    // console.log(chartInstance, 'chartInstance')
    nextTick(() => {
      if (!chartInstance) {
        initCharts(theme)
        if (!chartInstance) return
      }
      //清空canvas画布
      clear && chartInstance?.clear()
      chartInstance?.setOption(unref(getOptions))
    })
  }

  onMounted(() => {
    if (chartInstance) {
      // chartInstance.dispose()
      initCharts(theme)
    }
  })

  tryOnUnmounted(() => {
    if (!chartInstance) return
    removeResizeFn()
    //点击显示隐藏可以重新生长动效，销毁示例重新创建
    chartInstance.dispose()
    chartInstance = null
  })

  //自适应大小
  function resize() {
    chartInstance?.resize()
  }

  //第一步初始化
  function getInstance() {
    if (!chartInstance) {
      initCharts(theme)
    }
    return chartInstance
  }
  return {
    echarts,
    setOptions,
    getInstance
  }
}
