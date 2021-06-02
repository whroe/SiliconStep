self.addEventListener('message', function (e) {
  shui(e.data.max) // 3. works接收参数并处理 不会影响主线程 不会造成主页面卡顿
}, false)
function shui(numMax) {
  let arr = [] // 伪造大量测试数据
  function getRandom() {
    let random = Math.ceil(Math.random() * 10000)
    return random
  }
  for (let i = 0; i < numMax; i++) {
    arr.push(getRandom())
  }
  arr.sort(function
    (a, b) { return a - b } // 排序
  )
  postMessage(arr) // 4. works处理完数据 发送回主页面
  self.close() // 5.记得要关闭哦
}