

<template>
  <int-button size="large" type="primary" block href="https://www.baidu.com">Primary</int-button>
  <int-button size="default" type="success">中 国 人</int-button>
  <int-button size="default" type="error" shape="circle">中 国 人</int-button>
  <int-button size="default" type="info">中 国 人</int-button>
  <int-button size="default" type="warning">中 国 人</int-button>
  <int-button size="small" type="primary">中国人</int-button>
  <int-button size="small"><div>中国人d</div></int-button>
  <!-- <int-button type="text">
    <div>2</div>
  </int-button>
  <int-button type="link" disabled="true">aa</int-button>
  <int-button size="small" type="dashed"></int-button> -->
</template>
<script  lang="ts">
import { defineComponent } from '@vue/runtime-core';
// import IntButton from './components/button/index.tsx';
export default defineComponent({
  // components: { IntButton },
  setup() {
    return {

    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
