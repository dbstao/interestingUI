import { defineAsyncComponent } from 'vue'

export default {
  enhance: ({ app }) => {    
      app.component("test", defineAsyncComponent(() => import("/Users/dh/dev/interestingUI/src/components/button/button.tsx")))
  },
}
