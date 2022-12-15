import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("intButton", defineAsyncComponent(() => import("/Users/dh/dev/interestingUI/src/components/button/button.tsx"))),
      app.component("componentsDir", defineAsyncComponent(() => import("/Users/dh/dev/interestingUI/src/components")))
  },
}
