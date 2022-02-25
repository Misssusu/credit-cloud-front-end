import { resolve } from 'path'
import { readFile, writeFile } from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const projectBuildJsonPath = resolve(__dirname, 'config', 'project.build.json')

interface ProjectBuildConfig {
  appName: string
}
//获取命令输入的包名
const readProjectBuildJson = () =>
  new Promise<ProjectBuildConfig>((resolve, reject) => {
    readFile(projectBuildJsonPath, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(JSON.parse(data.toString()))
      }
    })
  })

// https://vitejs.dev/config/
//动态生成对应的包文件名
export default defineConfig(async ({ command, mode }) => {
  const data = await readProjectBuildJson()
  const { appName } = data
  return {
    plugins: [vue()],
    build: {
      outDir: `dist/${appName}`,
    },
    // 本地运行配置，及反向代理配置
    server: {
      cors: true, // 默认启用并允许任何源
      open: true, // 在服务器启动时自动在浏览器中打开应用程序
      //反向代理配置，注意rewrite写法，开始没看文档在这里踩了坑
      proxy: {
        '/api': {
          target: 'http://192.168.10.216', //代理接口
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
