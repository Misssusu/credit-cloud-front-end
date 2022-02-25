// @ts-ignore
import CryptoJS from 'xibu'
// @ts-ignore
import { JAE, JAD } from 'xibu/aes'
// @ts-ignore
import BASE from 'xibu/enc-base64'
// @ts-ignore
import UTF from 'xibu/enc-utf8'

// export default class crypto {
// 使用AesUtil.genAesKey()生成,需和后端配置保持一致
// static aesKey = "ZH2AbSiLchGn3tvJdBQNMrjxeuFfUMMO";
// 使用DesUtil.genDesKey()生成,需和后端配置保持一致
// static desKey = "IWLt0dPwYSo4Zd2u";
// let aesKey = "EyeD15v8RgPPpQXQmAIKfAPkZBpn9yf6";
// let desKey = "f84d4hU43ajBHzZn";

/**
 * aes 加密方法
 * @param data
 * @returns {*}
 */
let keys = import.meta.env.VITE_CRYPTO_AES_KEY

// export var desKey = "f84d4hU43ajBHzZn";

export function aesKey() {
  return keys
}

export function desKey() {
  return import.meta.env.VITE_CRYPTO_DES_KEY
}

export function encrypts(data: any) {
  return encryptAES(data, keys)
}

/**
 * aes 解密方法
 * @param data
 * @returns {*}
 */
export function decrypts(data: any) {
  return decryptAES(data, keys)
}

/**
 * aes 加密方法，同java：AesUtil.encryptToBase64(text, aesKey);
 */
export function encryptAES(data: any, key: any) {
  const dataBytes = UTF.parse(data)
  const keyBytes = UTF.parse(key)
  const encrypted = JAD(dataBytes, keyBytes, {
    iv: keyBytes,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })

  return BASE.stringify(encrypted.ciphertext)
}

/**
 * aes 解密方法，同java：AesUtil.decryptFormBase64ToString(encrypt, aesKey);
 */
export function decryptAES(data: any, key: any) {
  const keyBytes = UTF.parse(key)
  const decrypted = JAE(data, keyBytes, {
    iv: keyBytes,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  })
  return UTF.stringify(decrypted)
}

/**
 * des 加密方法，同java：DesUtil.encryptToBase64(text, desKey)
 */
export function encryptDES(data: any, key: any) {
  const keyHex = UTF.parse(key)
  const encrypted = CryptoJS.DES.encrypt(data, keyHex, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  })
  return encrypted.toString()
}

/**
 * des 解密方法，同java：DesUtil.decryptFormBase64(encryptBase64, desKey);
 */
export function decryptDES(data: any, key: any) {
  const keyHex = UTF.parse(key)
  const decrypted = CryptoJS.DES.decrypt(
    {
      ciphertext: BASE.parse(data),
    },
    keyHex,
    {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }
  )
  return decrypted.toString(UTF)
}
