import axios from 'axios'

const baseURL = 'http://xue.cnkdl.cn:23683'

// 创建axios实例
const instance = axios.create({
  baseURL: baseURL,
  timeout: 20000,
})

// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    console.log(config, '请求拦截器')
    return config
  },
  (err) => {
    return Promise.reject(err)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  (res) => {
    console.log(res, '响应拦截器')
    return res
  },
  (err) => {
    return Promise.reject(err)
  }
)

export default instance