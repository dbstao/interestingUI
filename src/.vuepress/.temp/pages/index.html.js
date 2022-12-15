export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroText\":\"int ui\",\"heroImage\":\"./logo.svg\",\"heroAlt\":\"int ui\",\"tagline\":\"有趣的vue3 UI框架\",\"actions\":[{\"text\":\"快上车\",\"link\":\"/components/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"SF Map Graph\",\"details\":\"提供一系列的柱状、饼状等组件，此外还有文字滚动、时间轴等特殊组件.\",\"url\":\"http://xxx.com/service/guide/install.html\",\"img\":\"./logo.png\"},{\"title\":\"SF Map Service\",\"details\":\"提供大搜、按钮等一系列组件，已内置了状态和接口功能.\",\"url\":\"http://xxx.com/service/guide/install.html\",\"img\":\"./logo.png\"},{\"title\":\"SF Ui\",\"details\":\"基于Vue / Ant Design Vue的UI组件库.\",\"url\":\"http://xxx.com/service/guide/install.html\",\"img\":\"./logo.png\"}],\"footer\":\"MIT Licensed | Copyright © 2022-present\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
