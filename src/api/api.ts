import request from './axios'
import { encryptAES, aesKey } from '../util/crypto'
import md5 from 'js-md5'


// 企业列表
export const getCompanyList = (params: {}) => {
  const param = { ...params }
  const data = encryptAES(JSON.stringify(param), aesKey())
  return request({
    url: '/api/blade-credit/credit/api/list/company',
    method: 'post',
    params: {
      data,
    },
  })
}

//用户登录
export const loginByUsername = (obj = {tenantId: '',username: '',password: ''}) => {
    let { tenantId, username, password } = obj
    return request({
        url: '/api/blade-credit/oauth/token',
        method: 'post',
        headers: {
            'Tenant-Id': '960604',
        },
        params: {
          tenantId,
          username,
          password: md5(password),
          grant_type: 'password',
          scope: 'all',
        },
      })
}

export const getCaptcha = () =>
  request({
    url: '/api/blade-auth/oauth/captcha',
    method: 'get',
  })
