import { defineConfig } from "vite";
import uni from "@dcloudio/vite-plugin-uni";
import AutoImport from "unplugin-auto-import/vite"; // 自动化导入 api


export default defineConfig(({ command, mode }) => {
  return {
    plugins: [
      uni(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: ["vue", "uni-app"],// 自动化导入vue3的api、uniapp的api
        dts: "typings/auto-imports.d.ts",
      }),
    ],
	}
});

