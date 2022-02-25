// @ts-ignore
import BASE from 'xibu/enc-base64'
// @ts-ignore
import Utf8 from 'xibu/enc-utf8'

const Base64Encrypt = (raw: string) => BASE.stringify(Utf8.parse(raw))

export default Base64Encrypt
