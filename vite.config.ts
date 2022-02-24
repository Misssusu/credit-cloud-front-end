import { resolve } from "path";
import { readFile, writeFile } from "fs";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const projectBuildJsonPath = resolve(__dirname, "config", "project.build.json");

interface ProjectBuildConfig {
  appName: string;
}

const readProjectBuildJson = () =>
  new Promise<ProjectBuildConfig>((resolve, reject) => {
    readFile(projectBuildJsonPath, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(data.toString()));
      }
    });
  });

// https://vitejs.dev/config/
export default defineConfig(async ({ command, mode }) => {
  const data = await readProjectBuildJson();
  const { appName } = data;
  return {
    plugins: [vue()],
    build: {
      outDir: `dist/${appName}`,
    },
  };
});
