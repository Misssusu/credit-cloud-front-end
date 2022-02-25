import axios from 'axios';
import {
  Base64
} from 'js-base64';

// 设置接口超时时间
axios.defaults.timeout = 60000
// @ts-ignore
axios.defaults.baseURL = import.meta.env.VITE_API_DOMAIN

const request = axios.create({
    // baseURL: 'http://192.168.10.216'
})

// 请求拦截器
request.interceptors.request.use(config => {
    
  // 统一设置用户身份 token
  config.headers['Authorization'] = `Basic ${Base64.encode(`saber:saber_secret`)}`;
  return config
}, function (error) {
    
  // Do something with request error
  return Promise.reject(error)
})

// 相应拦截器
request.interceptors.response.use(function (response) {
    
  // 统一设置接口相应错误, 比如 token 过期失效, 服务端异常
  return response
}, function (error) {
    
  // Do something with response error
  return Promise.reject(error)
})

export default request
