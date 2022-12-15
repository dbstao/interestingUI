import { getDirname, path } from '@vuepress/utils'

import { defineUserConfig, defaultTheme } from "vuepress";
import { viteBundler } from "@vuepress/bundler-vite";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';

const __dirname = getDirname(import.meta.url)

export default defineUserConfig({
  lang: "zh-CN",
  title: "int UI",
  description: "int UI (interesting UI) vue3 ui框架",
  port: 39083,
  open: true,
  locales: {
    // lang: 'en'
  },
  dest: "doc",
  bundler: viteBundler({
    viteOptions: {
      // build:{
      //     outDir: 'aaa'
      // }
    },
    vuePluginOptions: {},
  }),

  theme: defaultTheme({
    logo: '',
    repo: 'https://gitlab.com/foo/bar',
    repoLabel: 'github',
    sidebarDepth:1,
    // 默认主题配置
    sidebar: [
      {
        text: "组件",
        link: "/components/",
        collapsible: false,
        children: [
          // SidebarItem
          {
            text: "button",
            link: "/components/button/doc/zh",
          },
          // 字符串 - 页面文件路径
        ],
      },
    ],
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "组件",
        link: "/components/",
      },
      {
        text: "设计资源",
        link: "/design/",
      },
    ],
  }),
  plugins: [
    registerComponentsPlugin({
      // 配置项
      components: {
        test: path.resolve(__dirname, '../components/button/button.tsx'),
        // aa: path.resolve(__dirname, '../components/button/demo/buttonType.vue'),
        // componentsDir: path.resolve(__dirname, '../components'),
      },
    }),
  ],
});
