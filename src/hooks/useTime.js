import { ref, onMounted, onUnmounted } from 'vue'
import { convert2Time } from '@/utils'
let timeID = ref(null)
let nowTime = ref('')

function getNowTime() {
  clearInterval(timeID.value)
  timeID.value = setInterval(() => {
    let date = new Date()
    let y = date.getFullYear()
    let mt = convert2Time(date.getMonth() + 1)
    let day = convert2Time(date.getDate())
    let h = convert2Time(date.getHours())
    let m = convert2Time(date.getMinutes())
    let s = convert2Time(date.getSeconds())
    nowTime.value = y + '-' + mt + '-' + day + ' ' + h + ':' + m + ':' + s
    // console.log(nowTime.value)
  }, 1000)
  return { nowTime }
}

onMounted(() => {
  getNowTime()
})

onUnmounted(() => {
  clearTimeout(timeID.value)
})

export default getNowTime
