// @ts-ignore
import md5 from 'xibu/md5'

const MD5Encrypt = (raw: string) => md5(raw).toString()

export default MD5Encrypt
