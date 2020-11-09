/* eslint-disable */
import Vue from 'vue';
import App from './App.vue';
import {Header} from 'mint-ui'

import './lib/dist/css/mui.min.css'

Vue.component(Header.name,Header)

// eslint-disable-next-line no-new
const vm = new Vue({
  el: '#app',
  render: h => h(App),
});

