import dayjs from "dayjs";
require('dayjs/locale/zh-cn')
dayjs.locale('zh-cn')

const fromNowFormat = (time) => {
  const relativeTime = require('dayjs/plugin/relativeTime')
  dayjs.extend(relativeTime)
  return dayjs(time).fromNow()
}

export {
  fromNowFormat
}
