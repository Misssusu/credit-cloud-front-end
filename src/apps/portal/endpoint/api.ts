import http from '@system/endpoint/axios'

// 企业列表
export const getCompanyList = (data: {}) =>
  http.post('/api/blade-credit/credit/api/list/company', null, {
    params: { ...data, __needCrypto: true },
  })
