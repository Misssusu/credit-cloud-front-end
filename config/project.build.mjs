import { resolve, dirname } from "path";
import { writeFile } from "fs";
import { fileURLToPath } from "url";
import { execSync } from "child_process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projectBuildJsonPath = resolve(__dirname, "project.build.json");

const projectNameList = ["portal", "monitor"];

const appName = process.argv.at(-1);
//对输入的包名进行校验
if (!projectNameList.includes(appName)) {
  console.error("========================================");
  console.error(` 不存在的项目名称: ${appName} `);
  console.error(" 输入的项目名称不正确，请重新输入！ ");
  console.error("========================================");
  process.exit(1);
}

writeFile(projectBuildJsonPath, JSON.stringify({ appName }, null, 2), (err) => {
  if (err) {
    console.log(err);
    return;
  }
  execSync(`npm run build:vite`, {
    cwd: resolve(__dirname, ".."),
    stdio: "inherit",
  });
});
