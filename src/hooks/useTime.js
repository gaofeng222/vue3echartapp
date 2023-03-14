import { ref, onMounted, onUnmounted } from 'vue'

let timeID = ref(null)
let nowTime = ref('')

function getNowTime() {
  clearInterval(timeID.value)
  timeID.value = setInterval(() => {
    let date = new Date()
    let y = date.getFullYear()
    let mt = date.getMonth() + 1
    let day = date.getDate()
    let h = date.getHours()
    let m = date.getMinutes()
    let s = date.getSeconds()
    nowTime.value = y + '-' + mt + '-' + day + ' ' + h + ':' + m + ':' + s
    console.log(nowTime.value)
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
