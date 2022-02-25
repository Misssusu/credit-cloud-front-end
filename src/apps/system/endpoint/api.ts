import http from './axios'
import { encryptAES, aesKey } from '../utils/crypto'
import MD5Encrypt from '../utils/md5-encrypter'

//用户登录
export const loginByUsername = (obj = { tenantId: '', username: '', password: '' }) => {
  let { tenantId, username, password } = obj
  return http.post('/api/blade-credit/oauth/token', null, {
    headers: {
      'Tenant-Id': '960604',
    },
    params: {
      tenantId,
      username,
      password: MD5Encrypt(password),
      grant_type: 'password',
      scope: 'all',
    },
  })
}

export const getCaptcha = () => http.get('/api/blade-auth/oauth/captcha')
