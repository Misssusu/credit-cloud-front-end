import { axiosCryptoClient as cryptoHttp } from '@system/endpoint/axios'

// 企业列表
export const getCompanyList = (data: {}) =>
  cryptoHttp.post('/api/blade-credit/credit/api/list/company', null, { params: data })
