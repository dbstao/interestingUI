import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("intButton", defineAsyncComponent(() => import("/Users/dh/dev/interestingUI/src/components/button/button.tsx"))),
      app.component("aa", defineAsyncComponent(() => import("/Users/dh/dev/interestingUI/src/components/button/demo/buttonType.vue")))
  },
}
