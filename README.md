# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

- [Naive UI]（<https://www.naiveui.com/zh-CN/os-theme>)
- [vuetifyjs](https://vuetifyjs.com/en/)

# button components

API
|  表头   | 表头  |
|  ----  | ----  |
| type  | primary、success、warning、info、、、 |
| disabled  | disabled |
| ghost  | 幽灵属性，使按钮背景透明 |
| shape  | default 、 circle 、 round |
| href  | href |
| link  | link |

问题列表：

1. sidebar 配置问题耽误两天
2. markdown 内可以使用vue组件，但是使用.tsx结尾的组件提示
3. :::error
        Failed to parse source for import analysis because the content contains invalid JS syntax. If you are using JSX, make sure to name the file with the .jsx or .tsx extension.
    :::
