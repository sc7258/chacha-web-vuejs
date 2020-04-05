import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

import _ from 'lodash';

Object.defineProperty(Vue.prototype, '$_', {value: _});

import moment from 'moment'
import 'moment-lunar'

Object.defineProperty(Vue.prototype, '$moment', {value: moment});

import lunar from '@tony801015/chinese-lunar'

Object.defineProperty(Vue.prototype, '$lunar', {value: lunar});

import cc from 'cky-lunar-calendar'

Object.defineProperty(Vue.prototype, '$cc', {value: cc});

new Vue({
    render: h => h(App),
}).$mount('#app');
