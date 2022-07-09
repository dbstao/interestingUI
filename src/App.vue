

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <int-button size="large" type="primary"></int-button>
  <int-button type="text"><div>2</div></int-button>
  <int-button type="link" disabled="true">aa</int-button>
  <int-button size="small" type="dashed"></int-button>
</template>
<script  lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from '@vue/runtime-core';
import IntButton from './components/button/index.tsx';
export default defineComponent({
  components: {IntButton},
  setup(){
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
