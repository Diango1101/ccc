let formatTime = (rawSecond) => {
  let day = 0; let hour = 0; let minute = 0; let second = 0
  day = Math.floor(rawSecond / (60 * 60 * 24))
  hour = Math.floor(rawSecond / (60 * 60)) - (day * 24)
  minute = Math.floor(rawSecond / 60) - (day * 24 * 60) - (hour * 60)
  second = Math.floor(rawSecond) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)

  day = day === 0 ? '' : (day + '天')
  hour = hour === 0 ? '' : (hour + '时')
  minute = minute === 0 ? '' : (minute + '分')
  second = second === 0 ? '' : (second + '秒')

  let res = day + hour + minute + second

  return res === '' ? ('0秒') : res
}

export {
  formatTime
}
