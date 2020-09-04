import axios from 'axios'
import Qs from 'qs'

// export const baseUrl = "https://api.readhub.cn/"

const service = axios.create({
  // baseURL: baseUrl, // api base_url
  timeout: 30000, // 请求超时时间，
  withCredentials: true,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

service.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = Qs.stringify(config.data)
  }
  return config
})

// response interceptor
service.interceptors.response.use((response) => {
  return response.data
}, () => {
  new Error('request error')
})

export {
  service
}
