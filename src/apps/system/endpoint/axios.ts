import axios from 'axios'
import Base64Encrypt from '../utils/base64-encrypter'
import { aesKey, decryptAES, encryptAES } from '../utils/crypto'

const axiosClient = axios.create({
  timeout: 60000,
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
})

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config.headers) {
      config.headers['Authorization'] = `Basic ${Base64Encrypt(`saber:saber_secret`)}`
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)

export default axiosClient

export const axiosCryptoClient = axios.create({
  timeout: 60000,
  baseURL: import.meta.env.VITE_API_BASE_URL as string,
})

// Add a request interceptor
axiosCryptoClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    if (config.headers) {
      config.headers['Authorization'] = `Basic ${Base64Encrypt(`saber:saber_secret`)}`
    }
    if (config.params) {
      config.params = { data: encryptAES(JSON.stringify(config.params), aesKey()) }
    }
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosCryptoClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return { ...response, data: JSON.parse(decryptAES(response.data, aesKey())) }
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
