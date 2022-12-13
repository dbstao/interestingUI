import { createApp } from 'vue'
import App from './App.vue'
import IntButton from './components/button/index.tsx';

const APP = createApp(App);

APP.component('IntButton', IntButton)
APP.mount('#app')
