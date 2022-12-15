export const themeData = JSON.parse("{\"logo\":\"\",\"repo\":\"https://gitlab.com/foo/bar\",\"repoLabel\":\"github\",\"sidebarDepth\":1,\"sidebar\":[{\"text\":\"组件\",\"link\":\"/components/\",\"collapsible\":false,\"children\":[{\"text\":\"button\",\"link\":\"/components/button/doc/zh\"}]}],\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"组件\",\"link\":\"/components/\"},{\"text\":\"设计资源\",\"link\":\"/design/\"}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
